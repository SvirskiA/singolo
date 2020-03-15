let portfolioImages = document.querySelectorAll('.porfolio__images_img');
let portfolioTabs = document.querySelectorAll('.portfolio__navigation_list');
let portfolioImagesWrapper = document.querySelector('.porfolio__images');
let navigationList = document.querySelectorAll('.navigation__list');

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

// NAV
for (let elem of navigationList){
    elem.classList.remove('checked');
    console.log(elem);
    elem.onclick = function(){
  //      e.preventDefault();
        console.log(123);
        resetNavs();
        // window.location.hash = "slider";
        elem.classList.add('checked');
    }
}

function resetNavs(){
    for (let elem of navigationList){
        elem.classList.remove('checked');
    }
}

// Slider on/off
let phoneHorisBgImg = document.querySelector('.slider__horisontal-phone_background'); 
let phoneVertBgImg = document.querySelector('.slider__vertical-phone_background'); 
let phoneHorisBgStatus = true;
let phoneVertBgStatus = true;

function phoneOnOff(phoneBg, bgStatus){
    phoneBg.onclick = function(){
        if (bgStatus){
            bgStatus = false;
            phoneBg.style.background = 'black';
        } else {
            bgStatus = true;
            phoneBg.style.background = '';
        }
    }
}
phoneOnOff(phoneHorisBgImg, phoneHorisBgStatus);
phoneOnOff(phoneVertBgImg, phoneVertBgStatus);

// Slider (slider)
let sliderWrapper = document.querySelector('.slider');
let iphoneVertical = document.querySelector('.slider__vertical');
let iphoneHorisontal = document.querySelector('.slider__horizontal');
let iphoneSlide2 = document.querySelector('.slider__slide2');
let iphoneSlide2add1 = document.querySelector('.slider__slide2_add1');
let iphoneSlide2add2 = document.querySelector('.slider__slide2_add2');
let sliderButtons = document.querySelectorAll('.slider__button');
let sliderStatus = true;

for (let elem of sliderButtons){
    elem.onclick = function(){
        if(sliderStatus){
            sliderStatus = false;
            phoneHorisBgImg.style.opacity = '0';
            phoneVertBgImg.style.opacity = '0';
            iphoneVertical.style.opacity = '0';
            iphoneHorisontal.style.opacity = '0';
            iphoneSlide2.style.opacity = '1';
            iphoneSlide2add1.style.opacity = '1';
            iphoneSlide2add2.style.opacity = '1';
            sliderWrapper.style.background = '#648BF0';
        } else {
            sliderStatus = true;
            phoneHorisBgImg.style.opacity = '1';
            phoneVertBgImg.style.opacity = '1';
            iphoneVertical.style.opacity = '1';
            iphoneHorisontal.style.opacity = '1';
            iphoneSlide2.style.opacity = '0';
            iphoneSlide2add1.style.opacity = '0';
            iphoneSlide2add2.style.opacity = '0';
            sliderWrapper.style.background = '#F06C64';
        }
    }
}

// TABS
function selectTab(tab){
    let countClick = 1;

    tab.onclick = function(e){
        e.preventDefault();
        countClick ++;
        
    //    for (let elem of portfolioImages){
        for (let i = 0; i < portfolioImages.length; i++){
            let count = countClick + i;
            if (count > 12){
            //    console.log(count % 12 + 1);
                count = count % 12 + 1;
            }
            // else {console.log('else - ',count);}
            portfolioImages[i].src = `assets/portfolio${count}.jpg`;  // исправить повторяемость (сделать картинки уникальными)          
//            portfolioImages[i].src = `assets/portfolio${randomInteger(1, 13)}.jpg`;  // исправить повторяемость (сделать картинки уникальными)
        }
        resetTabs();
        tab.classList.add('portfolio_checked');
//        console.log('--NEXT--');
    }
}
// Portfolio
for (let elem of portfolioTabs){
    selectTab(elem);
}

function resetTabs(){
    for (let elem of portfolioTabs){
        elem.classList.remove('portfolio_checked');
    }
}

// ---
function resetBorders(){
    for (let elem of portfolioImages){
        elem.style.border = '';
    };
}

function selectImage(img){
    img.onclick = function (){
        resetBorders();
        img.style.border = '5px solid #F06C64';
    }
}

for (let elem of portfolioImages){
    selectImage(elem);
}

// FORM

let form = document.querySelector('.contact_form');
let subject = document.getElementById('subject');
let describe = document.getElementById('describe');

form.onsubmit = function(e){
    e.preventDefault();
    let text = 'The letter was sent';
    if (subject.value.length > 0){
        text += `\nSubject: ${subject.value}`
    } else {
        text += `\nWithout subject`;
    }
    if (describe.value.length > 0){
        text += `\nDescribe: ${describe.value}`
    } else {
        text += `\nWithout describe`;
    }
    alert(text);
    console.log(subject.value);
}