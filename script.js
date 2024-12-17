// Snowflake Effect
for (let i = 0; i < 30; i++) {
    const snowflake = document.createElement('div');
    snowflake.className = 'snowflake';
    snowflake.style.left = Math.random() * 100 + 'vw';
    snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';
    snowflake.textContent = '❄';
    document.body.appendChild(snowflake);
}

// Page Navigation
function showPage(page) {
    document.querySelectorAll('div').forEach(div => div.classList.add('hidden'));
    document.getElementById(`page${page}`).classList.remove('hidden');
}

// Wheel Setup
let wheel = document.getElementById('wheel');
let results = {
    "Cooking": ["Perfume (smell good cooking)", "Spatula", "Cookbook", "Pasta Maker"],
    "Traveling": ["Perfume (leave a trail)", "Backpack", "Plane Tickets", "Guidebook"],
    "Binge Watching": ["Perfume (freshen up)", "Netflix Sub", "Projector", "Popcorn Machine"],
    "Reading": ["Perfume (bookish scent)", "Novel Set", "Reading Lamp", "Bookmark"]
};
let selectedItems = [];

// Populate Wheel
function generateWheel(activity) {
    showPage(4);
    document.getElementById('progress').classList.remove('hidden');
    let progress = 0, bar = document.getElementById('progress-bar');
    const interval = setInterval(() => {
        progress += Math.random() * 20;
        bar.style.width = `${Math.min(progress, 100)}%`;
        if (progress >= 100) {
            clearInterval(interval);
            bar.style.width = '100%';
            selectedItems = results[activity];
            wheel.style.background = "conic-gradient(#e63946 0% 5%, #457b9d 5% 33%, #a8dadc 33% 61%, #f1faee 61% 100%)";
        }
    }, 300);
}

// Spin Logic
function spinWheel() {
    wheel.style.transform = 'rotate(1080deg)';
    setTimeout(() => {
        document.getElementById('result').innerText = `You won ${selectedItems[0]} 🎁!`;
        showPage(5);
    }, 3000);
}
