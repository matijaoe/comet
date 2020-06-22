const allVideos = document.querySelectorAll('.video');

allVideos.forEach(v => {
    v.addEventListener('mouseover', () => {
        const video = v.querySelector('video');
        video.play();
    });
    v.addEventListener('mouseleave', () => {
        const video = v.querySelector('video');
        video.pause();
    });
});

const toggleButton = document.getElementById('theme-toggler');

toggleButton.addEventListener('click', () => {
    if (document.body.classList.contains('light-mode')) {
        document.body.classList.replace("light-mode", "dark-mode")
    } else if (document.body.classList.contains('dark-mode')) {
        document.body.classList.replace("dark-mode", "amoled-mode")
    } else if (document.body.classList.contains('amoled-mode')) {
        document.body.classList.replace("amoled-mode", "light-mode")
    }
});


const menuButton = document.getElementById('hamburger-menu');
const asideNav = document.getElementById('aside-nav');

menuButton.addEventListener('click', () => {
    asideNav.classList.toggle('hide');
});


