var link = document.querySelector(".footer-contacts-button");
var popup = document.querySelector(".modal");
var close = popup.querySelector(".modal-close");
var slider = document.querySelector(".slider");
var slideritem1 = document.querySelector(".slider-item-1");
var slideritem2 = document.querySelector(".slider-item-2");
var slideritem3 = document.querySelector(".slider-item-3");
var sliderlink1 = document.querySelector(".slider-controls-item--1");
var sliderlink2 = document.querySelector(".slider-controls-item--2");
var sliderlink3 = document.querySelector(".slider-controls-item--3");


link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (popup.classList.contains("modal-show")) {
            popup.classList.remove("modal-show");
        }
    }
});

sliderlink1.addEventListener("click", function (evt) {
    evt.preventDefault();
    slideritem1.classList.add("slider-item-show");
    slideritem2.classList.remove("slider-item-show");
    slideritem3.classList.remove("slider-item-show");
});

sliderlink2.addEventListener("click", function (evt) {
    evt.preventDefault();
    slideritem1.classList.remove("slider-item-show");
    slideritem2.classList.add("slider-item-show");
    slideritem3.classList.remove("slider-item-show");
});

sliderlink3.addEventListener("click", function (evt) {
    evt.preventDefault();
    slideritem1.classList.remove("slider-item-show");
    slideritem2.classList.remove("slider-item-show");
    slideritem3.classList.add("slider-item-show");
});

