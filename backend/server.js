require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { GoogleGenerativeAI } = require('@google/generative-ai');

const app = express();
app.use(cors());
app.use(express.json());

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

app.post('/api/analyze', async (req, res) => {
    const { text } = req.body;
    if (!text) return res.status(400).json({ error: "Text is required for analysis." });

    try {
        // NEW STABLE MODEL
            const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
        
        const prompt = `
        You are an expert fact-checker and journalism AI for a system called NewsShield. 
        Analyze the following news headline or article excerpt. Determine if it is likely "Real", "Fake", or "Unverified".
        
        Text to analyze: "${text}"
        
        Respond ONLY with a valid JSON object in this exact format. Do not include markdown code blocks (like \`\`\`json).
        {
            "prediction": "Real" | "Fake" | "Unverified",
            "confidence": <number between 0 and 100>,
            "explanation": "<A clear, 2-3 sentence explanation of your reasoning. Mention specific logical flaws, sensationalism, or verified facts>",
            "keywords": ["<word1>", "<word2>", "<word3>"]
        }
        `;

        const result = await model.generateContent(prompt);
        const responseText = result.response.text();
        
        const cleanJsonString = responseText.replace(/```json/g, '').replace(/```/g, '').trim();
        const analysisData = JSON.parse(cleanJsonString);

        res.json(analysisData);

    } catch (error) {
        console.error("Inference Error:", error);
        res.status(500).json({ error: "Failed to process the text through the LLM." });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`NewsShield Backend running on port ${PORT}`));