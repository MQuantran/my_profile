// 1. SELECT ELEMENTS
const toggleBtn = document.getElementById('dark-mode-toggle');
const body = document.body;
const navLinks = document.querySelectorAll('.nav-links a[data-section]');
const ctaButtons = document.querySelectorAll('.cta-button[data-section]');
const sections = document.querySelectorAll('.section');

// 2. DARK MODE "MEMORY" CHECK
// Run this immediately when any page loads to check the browser's memory
const currentTheme = localStorage.getItem('theme');

if (currentTheme === 'dark') {
    body.classList.add('dark-mode');
    if (toggleBtn) {
        const modeText = toggleBtn.querySelector('.mode-text');
        if (modeText) modeText.textContent = 'Light Mode';
    }
}

// 3. DARK MODE TOGGLE LOGIC
if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        
        const isDark = body.classList.contains('dark-mode');
        
        // Update the button text
        const modeText = toggleBtn.querySelector('.mode-text');
        if (modeText) {
            modeText.textContent = isDark ? 'Light Mode' : 'Dark Mode';
        }
        
        // Save the choice to the browser's memory
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
}

// 4. NAVIGATION LOGIC (Sidebar & CTA Buttons)
// This function handles switching sections for both the sidebar and your new buttons
function showSection(targetId) {
    const targetSection = document.getElementById(targetId);
    
    if (targetSection) {
        // Hide all current sections
        sections.forEach(sec => sec.classList.remove('active'));
        // Show the one we want
        targetSection.classList.add('active');
        
        // Optional: Update sidebar link styling to show which is active
        navLinks.forEach(link => {
            if (link.dataset.section === targetId) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }
}

// Attach listener to Sidebar links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        showSection(link.dataset.section);
    });
});

// Attach listener to "About Me >" and other CTA buttons
ctaButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        // Only prevent default if it's an internal link (has data-section)
        if (btn.dataset.section) {
            e.preventDefault();
            showSection(btn.dataset.section);
        }
    });
});