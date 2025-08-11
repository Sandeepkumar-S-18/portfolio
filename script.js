// Simple interactivity: show year and mobile nav toggle
document.addEventListener('DOMContentLoaded', function () {
    // year
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // mobile nav toggle
    const navToggle = document.getElementById('navToggle');
    const navList = document.getElementById('navList');
    if (navToggle && navList) {
        navToggle.addEventListener('click', () => {
            navList.classList.toggle('show');
        });

        // close on link click (mobile)
        navList.querySelectorAll('a').forEach(a => {
            a.addEventListener('click', () => navList.classList.remove('show'));
        });
    }
});
