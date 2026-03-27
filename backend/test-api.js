require('dotenv').config();
const { GoogleGenerativeAI } = require('@google/generative-ai');

async function test() {
    console.log("Checking API Key:", process.env.GEMINI_API_KEY ? "Found" : "MISSING");
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    try {
        const result = await model.generateContent("Hello, are you working?");
        console.log("Response from AI:", result.response.text());
        console.log("✅ Connection Successful!");
    } catch (error) {
        console.error("❌ API Error Details:");
        console.error(error.message);
    }
}
test();