let loadingPage = document.querySelector('.loading-page');
let h1s = document.querySelector(".landing-page .container .glasses-name div");
let headers = document.querySelectorAll(".landing-page .container  h1");
let loadMainImg = document.querySelector(".landing-page .container .col2 div");
let landingPage = document.querySelector(".landing-page");
let header = document.querySelector('header');
let nextBtn = document.querySelector(".landing-page .container .col3 .slide-btn .next");
let prevBtn = document.querySelector(".landing-page .container .col3 .slide-btn .prev");
let nbrOfProducts = 3;

window.addEventListener('load', ()=> {
    loadingPage.classList.add("active");
    h1s.style.setProperty("--loadTranslate", "translateX(100%)");
    headers.forEach((ele)=> {
        ele.classList.add('active');
    })
    loadMainImg.querySelector('img').classList.add("active");
    loadMainImg.style.setProperty("--loadMainImg", "translateX(100%)");
    landingPage.style.opacity = '1';
    header.style.opacity = '1';
    setTimeout(()=> {
        loadMainImg.style.setProperty("--loadTransition", "0s");
        loadMainImg.style.setProperty("--loadTransitionDelay", "0s");
        loadMainImg.style.setProperty("--loadZIndex", "-1");
        loadMainImg.style.setProperty("--loadMainImg", "translateX(-100%)");
    }, 4000);
})
let index = 1;

function btnLoadingImg () {
    loadMainImg.querySelector('img').classList.remove("active");
    loadMainImg.style.setProperty("--loadTransition", "0s");
    loadMainImg.style.setProperty("--loadTransitionDelay", "0s");
    loadMainImg.style.setProperty("--loadZIndex", "-1");
    loadMainImg.style.setProperty("--loadMainImg", "translateX(-100%)");
    setTimeout(()=> {
        loadMainImg.style.setProperty("--loadZIndex", "99");
        loadMainImg.style.setProperty("--loadTransition", "1s");
    }, 0);
    setTimeout(()=>{
        loadMainImg.style.setProperty("--loadMainImg", "translateX(100%)");
        loadMainImg.querySelector('img').classList.add("active");
    }, 0);
}

nextBtn.onclick = function () {
    index++;
    if(index > nbrOfProducts) {
        index = 1;
    }
    loadMainImg.querySelector('img').src = `images/slide-img${index}.png`;
    btnLoadingImg();
}
prevBtn.onclick = function () {
    index--;
    if(index < 1) {
        index = nbrOfProducts;
    }
    loadMainImg.querySelector('img').src = `images/slide-img${index}.png`;
    btnLoadingImg();
}