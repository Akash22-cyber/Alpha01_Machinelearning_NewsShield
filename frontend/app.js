// NOTE: Change this to your live backend URL when deploying
const API_URL = 'http://localhost:5000/api/analyze';

document.getElementById('analyzeBtn').addEventListener('click', async () => {
    const textInput = document.getElementById('newsInput').value;
    const btn = document.getElementById('analyzeBtn');
    const btnText = document.getElementById('btnText');
    const btnLoader = document.getElementById('btnLoader');
    const resultsDiv = document.getElementById('results');

    if (!textInput.trim()) {
        alert("Please paste some text to verify.");
        return;
    }

    // Enter Loading State
    btnText.innerText = "Analyzing Context...";
    btnLoader.classList.remove('hidden');
    btn.disabled = true;
    resultsDiv.classList.add('hidden');

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ text: textInput })
        });

        const data = await response.json();
        if (data.error) throw new Error(data.error);

        // 1. Update Verdict Badge
        const badge = document.getElementById('predictionBadge');
        badge.innerText = data.prediction;
        badge.className = `badge ${data.prediction.toLowerCase()}`;

        // 2. Animate Confidence Meter
        const bar = document.getElementById('confidenceBar');
        
        // Dynamic coloring based on AI prediction
        let meterColor = 'var(--color-unverified)';
        if (data.prediction === 'Fake') meterColor = 'var(--color-fake)';
        if (data.prediction === 'Real') meterColor = 'var(--color-real)';
        
        bar.style.backgroundColor = meterColor;
        
        setTimeout(() => {
            bar.style.width = `${data.confidence}%`;
        }, 50);
        
        // Count up animation for the number
        animateValue("confidenceValue", 0, data.confidence, 1500);

        // 3. Inject Keyword Tags
        const tagsContainer = document.getElementById('keywordTags');
        if (data.keywords && data.keywords.length > 0) {
            tagsContainer.innerHTML = data.keywords
                .map(kw => `<span class="tag">${kw}</span>`)
                .join('');
        } else {
            tagsContainer.innerHTML = '<span class="tag" style="color:var(--text-muted); border-color:transparent; background:transparent;">No specific flags</span>';
        }

        // 4. Inject Reasoning Text
        document.getElementById('explanationText').innerText = data.explanation;

        // Reveal the dashboard
        resultsDiv.classList.remove('hidden');

    } catch (err) {
        alert("Server Error: " + err.message);
    } finally {
        // Reset Button State
        btnText.innerText = "Verify Authenticity";
        btnLoader.classList.add('hidden');
        btn.disabled = false;
    }
});

// Utility function to animate the numbers counting up
function animateValue(id, start, end, duration) {
    const obj = document.getElementById(id);
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const easeProgress = 1 - Math.pow(1 - progress, 4); 
        obj.innerHTML = Math.floor(easeProgress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}