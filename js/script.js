// const toggleButton = document.getElementById('theme-toggler');

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});


// const allVideos = document.querySelectorAll('.video');

// allVideos.forEach(v => {
//     v.addEventListener('mouseover', () => {
//         const video = v.querySelector('video');
//         video.play();
//     });
//     v.addEventListener('mouseleave', () => {
//         const video = v.querySelector('video');
//         video.pause();
//     });
// });

var video = document.getElementsByName("video");
video.addEventListener("mouseover", function () {
    video.play();
});

console.log("Test");