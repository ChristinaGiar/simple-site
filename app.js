var menuNav = document.getElementById("menu");
var menuBtn = document.getElementById("menuBtn");

let sections = document.querySelectorAll("section")
let lis = document.querySelectorAll("#menu li a")




menuNav.style.right = "-250px";
menuBtn.onclick = function () {
    if (menuNav.style.right == "0px") {
        menuNav.style.right = "-250px";
    }
    else {
        menuNav.style.right = "0px";
    }

    //content is clicked
    for (let li of lis) {
        li.addEventListener('click', function () {
            // alert("button was clicked");
            menuNav.style.right = "-250px";

        })
    }

    // menu is open and a place expept menu is clicked
    if (menuNav.style.right == "0px") {
        for (let section of sections) {
            section.addEventListener('click', function () {
                menuNav.style.right = "-250px";
            })
        }
    }

}


let arrow = document.querySelector(".go-to-top i")

document.addEventListener('scroll', function () {
    if (window.pageYOffset > 1000) {
        arrow.style.opacity = "1"
    }
    else {
        arrow.style.opacity = "0"

    }
})


var swiper = new Swiper('.swiper-container', {
    slidesPerView: 4,

    spaceBetween: 0,
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 1.5,
            spaceBetween: 30
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 2.5,
            spaceBetween: 30
        },
        992: {
            slidesPerView: 4,
            spaceBetween: 0
        }
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});
// counter ----------------------------------

const counters = document.querySelectorAll('.counter');
const speed = 2000000;

window.addEventListener("scroll", function generateCounter() {
    const elementTarget = document.querySelector('#reviews');
    if (window.scrollY > (elementTarget.offsetTop)) {
        counters.forEach(counter => {
            const updateCount = () => {
                const target = parseInt(counter.getAttribute('data-target'));
                const count = parseInt(counter.innerText);

                const inc = (target) / speed;

                if (count < target) {
                    counter.innerText = Math.ceil(count + inc);
                    // start/continue loop
                    setTimeout(updateCount, 60);
                } else {
                    counter.innerText = target;
                }
            };

            updateCount();
        });
    }
    //occurs only once
    // window.removeEventListener('scroll', generateCounter);
});



// parallax effect on call section ------------------------

const target = document.querySelector('#offer');
window.addEventListener("scroll", function () {
    let offset = window.pageYOffset;
    target.style.backgroundPositionY = offset * 0.05 + "px";
    target.style.transition = 'all .7s ease';
});

