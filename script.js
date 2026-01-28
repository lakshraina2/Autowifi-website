// --- BLOG DATA ---
const blogPosts = {
    1: {
        title: "10 Tips for Faster Hostel Wi-Fi",
        content: `
            <p><strong>1. Use Google DNS:</strong> Change your DNS settings to 8.8.8.8 and 8.8.4.4. This is often faster than your college's default server.</p>
            <p><strong>2. Avoid Peak Hours:</strong> Downloads speed up significantly after 1 AM when most students are asleep.</p>
            <p><strong>3. Use a LAN Cable:</strong> If your room has a port, wired connections are always more stable than Wi-Fi.</p>
            <p><strong>4. Update Network Drivers:</strong> Old drivers can cause frequent disconnections.</p>
            <p><strong>5. Use AutoWifi:</strong> Obviously! Reconnecting instantly saves you from the frustration of dropped sessions.</p>
        `
    },
    2: {
        title: "Best Student Gadgets 2026",
        content: `
            <p><strong>1. Noise Cancelling Headphones:</strong> Essential for studying in a noisy hostel wing.</p>
            <p><strong>2. Mechanical Keyboard:</strong> Once you type on Blue switches, you never go back (sorry roommates!).</p>
            <p><strong>3. Monitor Light Bar:</strong> Saves your eyesight during late-night coding sessions.</p>
            <p><strong>4. Power Bank (20,000mAh):</strong> Because you never know when the power cut hits.</p>
        `
    }
};

// --- MODAL LOGIC ---
function openModal(id) {
    const modal = document.getElementById('blogModal');
    const title = document.getElementById('modalTitle');
    const body = document.getElementById('modalBody');

    title.innerText = blogPosts[id].title;
    body.innerHTML = blogPosts[id].content;
    
    modal.style.display = 'flex';
}

function closeModal() {
    document.getElementById('blogModal').style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('blogModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// --- DAILY CONTENT ROTATION (For Connected Page) ---
const techTips = [
    "Press 'Win + V' to see your clipboard history.",
    "Press 'Ctrl + Shift + T' to reopen the last closed tab.",
    "Hold 'Shift' while dragging a file to delete it permanently.",
    "Use 'Alt + Tab' to switch between apps quickly.",
    "Press 'Win + .' to open the emoji keyboard on Windows."
];

const studentNews = [
    "Hackathon Alert: Smart India Hackathon registrations open soon.",
    "Campus Update: New coding club auditions are this weekend.",
    "Exam Tip: Start preparing your notes now to avoid last-night panic.",
    "Tech News: Python 3.14 is released with faster loops!",
    "Scholarship: Check the portal for the new merit scholarship."
];

const facts = [
    "The first computer bug was a real moth found in 1947.",
    "The QWERTY keyboard was designed to slow down typing to prevent jams.",
    "Wi-Fi doesn't stand for 'Wireless Fidelity'. It stands for nothing.",
    "More people own mobile phones than toothbrushes.",
    "The first 1GB hard drive weighed over 500 pounds."
];

function loadDailyContent() {
    // Get Day of Year (0-365)
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const diff = now - start;
    const oneDay = 1000 * 60 * 60 * 24;
    const day = Math.floor(diff / oneDay);

    // Use Modulo to cycle through arrays
    if(document.getElementById('dailyTip')) {
        document.getElementById('dailyTip').innerText = techTips[day % techTips.length];
        document.getElementById('dailyNews').innerText = studentNews[day % studentNews.length];
        document.getElementById('dailyFact').innerText = facts[day % facts.length];
    }
}

// Run on page load
document.addEventListener('DOMContentLoaded', loadDailyContent);