
const body = document.body;


/* PLAY VIDEOS ON MOUSE HOVER */
const videos = document.querySelectorAll('.video');

videos.forEach(v => {
    v.addEventListener('mouseover', () => {
        const video = v.querySelector('video');
        video.play();
    });
    v.addEventListener('mouseleave', () => {
        const video = v.querySelector('video');
        video.pause();
    });
});


/* BROWSER LOCAL STORAGE FOR THE THEME */
const theme = localStorage.getItem('theme');
const accent = localStorage.getItem('accent');

if (theme) {
    body.classList.add(theme);
}


// UPLOAD ICON ANIMATION
const uploadBtn = document.getElementById('btn-upload');
const uploadIcon = document.getElementById('icon-upload');

uploadBtn.addEventListener('mouseover', () => {
    uploadIcon.setAttribute("animation", "fade-up");
    console.log("works")
});
uploadBtn.addEventListener('mouseleave', () => {
    uploadIcon.setAttribute("animation", "");
});


/* THEME TOGGLER ON THE LOGO */
// const toggleBtn = document.getElementById('theme-toggler');

// toggleBtn.addEventListener('click', () => {
//     if (body.classList.contains('light')) {
//         body.classList.replace("light", "dark");
//         localStorage.setItem('theme', 'dark');
//     } else if (body.classList.contains('dark')) {
//         body.classList.replace("dark", "amoled");
//         localStorage.setItem('theme', 'amoled');
//     } else if (body.classList.contains('amoled')) {
//         body.classList.replace("amoled", "light");
//         localStorage.setItem('theme', 'light');
//     } else {
//         body.classList.add('light');
//         localStorage.setItem('theme', 'light');
//     }
// });

/* THEME PICKER */
const lightBtn = document.getElementById('light-option');
const darkBtn = document.getElementById('dark-option');
const amoledBtn = document.getElementById('amoled-option');

lightBtn.onclick = () => {
    if (body.classList.contains('dark')) {
        body.classList.replace('dark', 'light');
    } else if (body.classList.contains('amoled')) {
        body.classList.replace('amoled', 'light');
    } else {
        body.classList.add('light');
    }
    localStorage.setItem('theme', 'light');
}

darkBtn.onclick = () => {
    if (body.classList.contains('light')) {
        body.classList.replace('light', 'dark');
    } else if (body.classList.contains('amoled')) {
        body.classList.replace('amoled', 'dark');
    } else {
        body.classList.add('dark');
    }

    localStorage.setItem('theme', 'dark');
}

amoledBtn.onclick = () => {
    if (body.classList.contains('light')) {
        body.classList.replace('light', 'amoled');
    } else if (body.classList.contains('dark')) {
        body.classList.replace('dark', 'amoled');
    } else {
        body.classList.add('amoled');

    }

    localStorage.setItem('theme', 'amoled');
}





/* DROPDOWN OPEN/CLOSE */
const dropdownIcon = document.getElementById('dropdown-box');
const dropdown = document.getElementById('dropdown');

dropdownIcon.addEventListener('click', () => {
    if (dropdown.classList.contains('closed')) {
        dropdown.style.visibility = 'visible';
        dropdown.style.opacity = '1';
        dropdown.classList.replace('closed', 'open');
    } else if (dropdown.classList.contains('open')) {
        dropdown.style.visibility = 'hidden';
        dropdown.style.opacity = '0';
        dropdown.classList.replace('open', 'closed');
    }
});

//I'm using "click" but it works with any event
// if (dropdown.classList.contains('open')) {

//     body.addEventListener('click', function (event) {
//         var isClickInside = dropdown.contains(event.target);

//         if (!isClickInside) {
//             dropdown.style.visibility = 'hidden';
//             dropdown.style.opacity = '0';
//         }
//     });
// }



/* HAMBURGER MENU  */
const menuButton = document.getElementById('hamburger-menu');
const aside = document.getElementById('aside-nav');

menuButton.addEventListener('click', () => {
    aside.classList.toggle('hide');
});





//TODO on upload hover add property to icon "animation:whteverthefuck"


/* ACCENT PICKER */
const red1 = document.getElementById('red-1');
const red3 = document.getElementById('red-3');

const pink2 = document.getElementById('pink-2');

const purple1 = document.getElementById('purple-1');
const purple2 = document.getElementById('purple-2')

const blue1 = document.getElementById('blue-1');
const blue2 = document.getElementById('blue-2');

const green1 = document.getElementById('green-1');
const green2 = document.getElementById('green-2');

const orange1 = document.getElementById('orange-1');
const orange2 = document.getElementById('orange-2');
const brown2 = document.getElementById('brown-2');




let root = document.documentElement;

/* RED */
red1.addEventListener('click', () => {
    root.style.setProperty('--accent',
        getComputedStyle(document.documentElement)
            .getPropertyValue('--red-1'));

});

red3.addEventListener('click', () => {
    root.style.setProperty('--accent',
        getComputedStyle(document.documentElement)
            .getPropertyValue('--red-3'));

});

/* PINK */
pink2.addEventListener('click', () => {
    root.style.setProperty('--accent',
        getComputedStyle(document.documentElement)
            .getPropertyValue('--pink-2'));

});

/* PURPLE */
purple1.addEventListener('click', () => {
    root.style.setProperty('--accent',
        getComputedStyle(document.documentElement)
            .getPropertyValue('--purple-1'));

});

purple2.addEventListener('click', () => {
    root.style.setProperty('--accent',
        getComputedStyle(document.documentElement)
            .getPropertyValue('--purple-2'));

});

/* BLUE */
blue1.addEventListener('click', () => {
    root.style.setProperty('--accent',
        getComputedStyle(document.documentElement)
            .getPropertyValue('--blue-1'));

});

blue2.addEventListener('click', () => {
    root.style.setProperty('--accent',
        getComputedStyle(document.documentElement)
            .getPropertyValue('--blue-2'));

});

/* GREEN */
green1.addEventListener('click', () => {
    root.style.setProperty('--accent',
        getComputedStyle(document.documentElement)
            .getPropertyValue('--green-1'));

});
green2.addEventListener('click', () => {
    root.style.setProperty('--accent',
        getComputedStyle(document.documentElement)
            .getPropertyValue('--green-2'));

});


/* ORANGE */
orange1.addEventListener('click', () => {
    root.style.setProperty('--accent',
        getComputedStyle(document.documentElement)
            .getPropertyValue('--orange-1'));

});

orange2.addEventListener('click', () => {
    root.style.setProperty('--accent',
        getComputedStyle(document.documentElement)
            .getPropertyValue('--orange-2'));
});
brown2.addEventListener('click', () => {
    root.style.setProperty('--accent',
        getComputedStyle(document.documentElement)
            .getPropertyValue('--brown-2'));
});








