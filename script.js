let portfolioImages = document.querySelectorAll('.porfolio__images_img');
let portfolioTabs = document.querySelectorAll('.portfolio__navigation_list');
let portfolioTab = document.querySelectorAll('.portfolio_navigation');
let portfolioImagesWrapper = document.querySelector('.porfolio__images');
let navigationList = document.querySelectorAll('.navigation__list');


function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

// NAV
for (let elem of navigationList) {
    elem.classList.remove('checked');
    elem.onclick = function () {
        resetNavs();
        burgerMenuOff();
        elem.classList.add('checked');
    }
}

function resetNavs() {
    for (let elem of navigationList) {
        elem.classList.remove('checked');
    }
}

// HEADER

// Burger
let burgerMenu = document.getElementById('burger');
let burgerBackground = document.querySelector('.burger_background');
let shadow = document.querySelector('.shadow');
let navigation = document.querySelector('.header__navigation');
let navigationUl = document.querySelector('.navigation');
let headerWrapper = document.querySelector('.header__wrapper');

let burgerFlag = true;

function burgerMenuOn(){
    burgerFlag = false;
    burgerMenu.classList.add('burger_click');
    burgerBackground.classList.add('burger_background_click');
    shadow.classList.add('shadow_click');
    navigation.classList.add('header__navigation_click');
    navigationUl.classList.add('navigation_click');
    headerWrapper.classList.add('header__wrapper_click');
}
function burgerMenuOff(){
    burgerFlag = true;
    burgerMenu.classList.remove('burger_click');
    burgerBackground.classList.remove('burger_background_click');
    shadow.classList.remove('shadow_click');
    navigation.classList.remove('header__navigation_click');
    navigationUl.classList.remove('navigation_click');
    headerWrapper.classList.remove('header__wrapper_click');

}

burgerMenu.onclick = function(){
    if(burgerFlag){
        burgerMenuOn()
    } else {
        burgerMenuOff()
    }
}

// Scroll
let header = document.querySelector('.header');

window.addEventListener('scroll', function () {
    let scrollY = Math.round(pageYOffset / 10);
    if (scrollY > 5) {
        header.style.padding = '8px 0';
    } else {
        header.style.padding = '35px 0'
    }
    if (scrollY < 61) {
        resetNavs();
        navigationList[0].classList.add('checked');
    } else if (scrollY >= 61 && scrollY < 100) {
        resetNavs();
        navigationList[1].classList.add('checked');
    } else if (scrollY >= 100 && scrollY < 197) {
        resetNavs();
        navigationList[2].classList.add('checked');
    } else if (scrollY >= 197 && scrollY < 269) {
        resetNavs();
        navigationList[3].classList.add('checked');
    } else if (scrollY > 269) {
        resetNavs();
        navigationList[4].classList.add('checked');
    }
 //   console.log(scrollY + '0px');
});

// Slider on/off
let phoneHoris = document.querySelector('.slider__horizontal');
let phoneVert = document.querySelector('.slider__vertical');

let phoneHorisBgImg = document.querySelector('.slider__horisontal-phone_background');
let phoneVertBgImg = document.querySelector('.slider__vertical-phone_background');

let phoneHorisBgStatus = true;
let phoneVertBgStatus = true;

function phoneOnOff(phone, phoneBg, bgStatus) {
    phone.onclick = function () {
        if (bgStatus) {
            bgStatus = false;
            phoneBg.style.background = 'black';
        } else {
            bgStatus = true;
            phoneBg.style.background = '';
        }
    }
}
phoneOnOff(phoneHoris, phoneHorisBgImg, phoneHorisBgStatus);
phoneOnOff(phoneVert, phoneVertBgImg, phoneVertBgStatus);

// Slider (slider)
/*  рабочий код (туды-сюды)
let sliderWrapperOne = document.querySelector('.slider__wrapper_one');
let sliderWrapperTwo = document.querySelector('.slider__wrapper_two');
let sliderButtons = document.querySelectorAll('.slider__button');
let sliderStatus = true;

for (let elem of sliderButtons){
    elem.onclick = function(){
        if(sliderStatus){
			sliderStatus = false;
			sliderWrapperOne.style.width = '0';
			sliderWrapperTwo.style.width = '100%';
        } else {
            sliderStatus = true;
			sliderWrapperOne.style.width = '100%';
			sliderWrapperTwo.style.width = '0';
        }
    }
}
*/
let sliderWrapperOne = document.querySelector('.slider__wrapper_one');
let sliderWrapperTwo = document.querySelector('.slider__wrapper_two');
let sliderWrapperOneImgs = document.querySelector('.slider__wrapper_one_imgs');
let sliderWrapperTwoImgs = document.querySelector('.slider__wrapper_two_imgs');
let sliderButtons = document.querySelectorAll('.slider__button');
let sliderStatus = true;

//for (let elem of sliderButtons){
sliderButtons[0].onclick = function () {
    if (sliderStatus) {
        sliderStatus = false;

        sliderWrapperOne.style.width = '0';
        sliderWrapperOne.style.left = '0';
        sliderWrapperOne.style.right = '';

        sliderWrapperTwo.style.width = '100%';
        sliderWrapperTwo.style.right = '0';
        sliderWrapperTwo.style.left = '';

        sliderWrapperOneImgs.style.transition = '1s';
        sliderWrapperOneImgs.style.left = '-940px';
        sliderWrapperOneImgs.style.right = '';
        sliderWrapperOneImgs.style.display = '';  //

        sliderWrapperTwoImgs.style.transition = '';
        sliderWrapperTwoImgs.style.left = '0';
        sliderWrapperTwoImgs.style.right = '0';
        sliderWrapperTwoImgs.style.display = '';  //
    } else {
        sliderStatus = true;

        sliderWrapperOne.style.width = '100%';
        sliderWrapperOne.style.right = '0';
        sliderWrapperOne.style.left = '';

        sliderWrapperTwo.style.width = '0';
        sliderWrapperTwo.style.left = '0';
        sliderWrapperTwo.style.right = '';

        sliderWrapperOneImgs.style.transition = '';
        sliderWrapperOneImgs.style.left = '0';
        sliderWrapperOneImgs.style.right = '0';
        sliderWrapperOneImgs.style.display = '';  //			

        sliderWrapperTwoImgs.style.transition = '1s';
        sliderWrapperTwoImgs.style.left = '-940px';
        sliderWrapperTwoImgs.style.right = '';
        sliderWrapperTwoImgs.style.display = '';  //
    }
}
sliderButtons[1].onclick = function () {
    if (sliderStatus) {
        sliderStatus = false;

        sliderWrapperOne.style.width = '0';
        sliderWrapperOne.style.left = '';
        sliderWrapperOne.style.right = '0';
        sliderWrapperOne.style.zIndex = '1';


        sliderWrapperTwo.style.width = '100%';
        sliderWrapperTwo.style.left = '0';
        sliderWrapperTwo.style.right = '';
        sliderWrapperTwo.style.zIndex = '0';



        sliderWrapperOneImgs.style.transition = '1s';
        
        sliderWrapperOneImgs.style.right = '-940px';
        sliderWrapperOneImgs.style.left = '';
        //		sliderWrapperOneImgs.style.display = 'none';  //

        sliderWrapperTwoImgs.style.transition = '';
        sliderWrapperTwoImgs.style.left = '0';
        sliderWrapperTwoImgs.style.right = '0';

        sliderWrapperOne.style.transitionProperty = 'width, right, left';
        sliderWrapperTwo.style.transitionProperty = 'width, right, left';

        //		sliderWrapperTwoImgs.style.display = '';  //	

    } else {
        sliderStatus = true;

        sliderWrapperOne.style.width = '100%';
        sliderWrapperOne.style.left = '0';
        sliderWrapperOne.style.right = '';
        sliderWrapperOne.style.zIndex = '0';


        sliderWrapperTwo.style.width = '0';
        sliderWrapperTwo.style.left = '';
        sliderWrapperTwo.style.right = '0';
        sliderWrapperTwo.style.zIndex = '1';


        sliderWrapperOneImgs.style.transition = '';
        sliderWrapperOneImgs.style.left = '0';
        sliderWrapperOneImgs.style.right = '0';
        sliderWrapperOneImgs.style.display = '';  //			

        sliderWrapperTwoImgs.style.transition = '1s';
        sliderWrapperTwoImgs.style.right = '-940px';
        sliderWrapperTwoImgs.style.left = '0';

        sliderWrapperOne.style.transitionProperty = 'width, right, left';
        sliderWrapperTwo.style.transitionProperty = 'width, right, left';
        //		sliderWrapperTwoImgs.style.display = 'none';  //			
    }
}
//}
// Portfolio TABS

function resetTabs() {
    for (let elem of portfolioTabs) {
        elem.classList.remove('portfolio_checked');
    }
}

function moveImges(tab) {
    let countClick = 1;

    tab.onclick = function (e) {
        e.preventDefault();
        resetBorders();

        countClick++;

        for (let i = 0; i < portfolioImages.length; i++) {
            let count = countClick + i;
            if (count % 12 === 0){
                count = 12;
            } else if (count > 12) {
                count = count % 12;
            }
            
            portfolioImages[i].src = `assets/portfolio${count}.jpg`;
        }
        
    }
}

let portf = document.querySelector('.portfolio_navigation');  //

moveImges(portf);

function selectTab(tab) {
    tab.onclick = function (e) {
        e.preventDefault();
        resetTabs();
        tab.classList.add('portfolio_checked');
    }
}

for (let elem of portfolioTabs) {
    selectTab(elem);
}

// Portfolio - borders
function resetBorders() {
    for (let elem of portfolioImages) {
        elem.style.outline = '';
    };
}

function selectImage(img) {
    img.onclick = function () {
        resetBorders();
        img.style.outline = '5px solid #F06C64';
    }
}

for (let elem of portfolioImages) {
    selectImage(elem);
}

// FORM

let form = document.querySelector('.contact_form');
let subject = document.getElementById('subject');
let describe = document.getElementById('describe');

form.onsubmit = function (e) {
    e.preventDefault();
    let text = 'The letter was sent';
    if (subject.value.length > 0) {
        text += `\nSubject: ${subject.value}`
    } else {
        text += `\nWithout subject`;
    }
    if (describe.value.length > 0) {
        text += `\nDescribe: ${describe.value}`
    } else {
        text += `\nWithout describe`;
    }
    alert(text);
    form.reset();
}
