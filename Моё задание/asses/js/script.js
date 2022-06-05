let offset = 0;
const textSlider = document.getElementById('TextImg');
const sliderLine= document.querySelector('.slider-line');
const counter = document.getElementById('counterSlider');

const btnNext = document.querySelector('.slider-next');
btnNext.addEventListener('click', () => {
    offset = offset + 800;
    if (offset > 1600) offset = 0;
    sliderLine.style.left = -offset + 'px';

    switch (offset) {
        case 0: textSlider.innerHTML = "Горы Тарки"; counter.innerHTML = "1/3"; break;
        case 800: textSlider.innerHTML = "Гора Базардюзю!"; counter.innerHTML = "2/3"; break;
        case 1600: textSlider.innerHTML = "Вокзал Махачкала"; counter.innerHTML = "3/3"; break;
    }
})

const btnPrev = document.querySelector('.slider-prev');
btnPrev.addEventListener('click', () => {
    offset = offset - 800;
    if (offset < 0) offset = 1600;
    sliderLine.style.left = -offset + 'px';
    
    switch (offset) {
        case 0: textSlider.innerHTML = "Горы Тарки"; counter.innerHTML = "1/3"; break;
        case 800: textSlider.innerHTML = "Гора Базардюзю!"; counter.innerHTML = "2/3"; break;
        case 1600: textSlider.innerHTML = "Вокзал Махачкала"; counter.innerHTML = "3/3"; break;
    }
})

let addUser = document.getElementById("userName");
let textComment = document.getElementById("text_comment");
let containerComment = document.getElementById("CommentContainer");

function Comment (name, text){
    this.name = name;
    this.text = text;
}

let btnComment = () => {
    addUser.value = "";
    textComment.value = "";
}
