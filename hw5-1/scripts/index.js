let INDEX = 0;
let slides = document.querySelectorAll('.slide');
let slLenght= slides.length;
function setArrows(sliderId){
    let arrowCont=document.createElement('div');
    arrowCont.id="arrows-wrapper";
    let left=document.createTextNode('&#10094');
    let arrowPrev=document.createElement('p');
    arrowPrev.id='arrow-prev';
    arrowPrev.innerHTML='&#10094';
    arrowCont.appendChild(arrowPrev);
    let right=document.createTextNode('&#10095');
    let arrowNext=document.createElement('p');
    arrowNext.id='arrow-next';
    arrowNext.appendChild(right);
    arrowCont.appendChild(arrowNext);
    let arg=arguments;
    arrowCont.querySelectorAll('#arrows-wrapper p').forEach(function (arrow){
        for(let j=1;j<arg.length;j++){
            console.log(arg);
        arrow.classList.add(arg[j]);}
    })
    document.getElementById(sliderId).appendChild(arrowCont);
}
function setSlider(sliderId,dotWrapperId){
    let slides = document.querySelectorAll('#'+sliderId+' '+'.slide').length;
    let dotContainer=document.createElement('div');
    dotContainer.id=dotWrapperId;
    dotContainer.classList.add('center_x');
    for(let i=0;i<slides;i++){
        let dot=document.createElement('div');
        dot.classList.add('dot-navigation');
        dot.setAttribute('data-index',i);
        dotContainer.appendChild(dot);
    }
    document.getElementById(sliderId).appendChild(dotContainer);
}
setArrows('slider-container','slider-arrow','center_y');
setSlider('slider-container','dots-wrapper');
function showSlides(index) {
    // извлекаем слайды и навигационные точки
    let slides = document.querySelectorAll('.slide');
    let slLenght= slides.length;

    for(let j=0;j<=slLenght;j++){
        document.createElement('div');

    }
    let dots = document.querySelectorAll('.dot-navigation');

    // // проверка диапазона индекса
    if (index >= slLenght) INDEX = 0;

    if (index < 0) INDEX = slLenght - 1;

    // скрытие слайдов и удаление активной точки в навигации
    for (let i = 0; i < slLenght; i++) {
        slides[i].style.display = 'none';
        dots[i].classList.remove("active-dot");
    }

    // показ активнового слайда и активация точки навигации
    slides[INDEX].style.display = "block";
    dots[INDEX].classList.add("active-dot");
};

showSlides(INDEX);


// событие при нажатии на левую стрелку
document.querySelector("#arrow-prev").addEventListener('click', function () {
    showSlides(--INDEX);
});

// событие при нажатии на правую стрелку
document.querySelector("#arrow-next").addEventListener('click', function () {
    showSlides(++INDEX);
});

// обработка событий для точек
document.querySelectorAll('.dot-navigation').forEach(function (elem) {
    elem.addEventListener('click', function () {
        let dotIndex = event.target.getAttribute('data-index');

        // вызов функции для прокрутки слайдера
        showSlides(INDEX = dotIndex);
    });
});

// автоматическое слайд-шоу
setInterval(function () {
    showSlides(++INDEX);
}, 10000);
