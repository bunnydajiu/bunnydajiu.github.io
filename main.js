document.addEventListener('mousemove', (e) => {
    const bg = document.getElementById('interactive-background');
    const cursorEffect = document.createElement('div');
    cursorEffect.classList.add('cursor-effect');
    cursorEffect.style.left = `${e.pageX - 25}px`; /* Adjusted for smaller size */
    cursorEffect.style.top = `${e.pageY - 25}px`;  /* Adjusted for smaller size */
    bg.appendChild(cursorEffect);
    setTimeout(() => cursorEffect.remove(), 1000);
});

document.addEventListener('touchstart', (e) => {
    const bg = document.getElementById('interactive-background');
    const touch = e.touches[0];
    const cursorEffect = document.createElement('div');
    cursorEffect.classList.add('cursor-effect');
    cursorEffect.style.left = `${touch.pageX - 25}px`; /* Adjusted for smaller size */
    cursorEffect.style.top = `${touch.pageY - 25}px`;  /* Adjusted for smaller size */
    bg.appendChild(cursorEffect);
    setTimeout(() => cursorEffect.remove(), 1000);
});

function generateStars() {
    const bg = document.getElementById('interactive-background');
    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDuration = `${Math.random() * 3 + 2}s`;
        bg.appendChild(star);
    }
}

generateStars();

function confirmExit(event) {
    if (!confirm("Are you sure you want to leave this page?")) {
        event.preventDefault(); // Prevent default link behavior if user cancels
        return false;
    }
    // If the user confirms, no need to return anything here.
}

// Manual initialization of dropdown using vanilla JavaScript
document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('.dropdown-toggle').forEach(function (dropdownToggle) {
        dropdownToggle.addEventListener('click', function () {
            var dropdownMenu = this.nextElementSibling;
            if (!dropdownMenu.classList.contains('show')) {
                dropdownMenu.classList.add('show');
                dropdownMenu.setAttribute('aria-expanded', 'true');
            } else {
                dropdownMenu.classList.remove('show');
                dropdownMenu.setAttribute('aria-expanded', 'false');
            }
        });
    });
});