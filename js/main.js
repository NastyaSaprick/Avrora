//слайдер 
$(document).ready(function(){
  $('.slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: true,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
});

// Калькулятор
function filterCalOne() { 
  document.getElementById("calButtonOne").classList.add("calculation__buttons__button-on");
  document.getElementById("calButtonOne").classList.remove("calculation__buttons__button-off");
  document.getElementById("calButtonTwo").classList.add("calculation__buttons__button-off");
  document.getElementById("calButtonThree").classList.add("calculation__buttons__button-off");
  document.getElementById("calButtonFour").classList.add("calculation__buttons__button-off");
  document.getElementById("calSlideOne").classList.remove("d-none");
  document.getElementById("calSlideTwo").classList.add("d-none");
  document.getElementById("calSlideThree").classList.add("d-none");
  document.getElementById("calSlideFour").classList.add("d-none");
 }

 function filterCalTwo() { 
  document.getElementById("calButtonOne").classList.add("calculation__buttons__button-off");
  document.getElementById("calButtonTwo").classList.add("calculation__buttons__button-on");
  document.getElementById("calButtonTwo").classList.remove("calculation__buttons__button-off");
  document.getElementById("calButtonThree").classList.add("calculation__buttons__button-off");
  document.getElementById("calButtonFour").classList.add("calculation__buttons__button-off");
  document.getElementById("calSlideOne").classList.add("d-none");
  document.getElementById("calSlideTwo").classList.remove("d-none");
  document.getElementById("calSlideThree").classList.add("d-none");
  document.getElementById("calSlideFour").classList.add("d-none");
 }

 function filterCalThree() { 
  document.getElementById("calButtonOne").classList.add("calculation__buttons__button-off");
  document.getElementById("calButtonTwo").classList.add("calculation__buttons__button-off");
  document.getElementById("calButtonThree").classList.add("calculation__buttons__button-on");
  document.getElementById("calButtonThree").classList.remove("calculation__buttons__button-off");
  document.getElementById("calButtonFour").classList.add("calculation__buttons__button-off");
  document.getElementById("calSlideOne").classList.add("d-none");
  document.getElementById("calSlideTwo").classList.add("d-none");
  document.getElementById("calSlideThree").classList.remove("d-none");
  document.getElementById("calSlideFour").classList.add("d-none");
 }

 function filterCalFour() { 
  document.getElementById("calButtonOne").classList.add("calculation__buttons__button-off");
  document.getElementById("calButtonTwo").classList.add("calculation__buttons__button-off");
  document.getElementById("calButtonThree").classList.add("calculation__buttons__button-off");
  document.getElementById("calButtonFour").classList.add("calculation__buttons__button-on");
  document.getElementById("calButtonFour").classList.remove("calculation__buttons__button-off");
  document.getElementById("calSlideOne").classList.add("d-none");
  document.getElementById("calSlideTwo").classList.add("d-none");
  document.getElementById("calSlideThree").classList.add("d-none");
  document.getElementById("calSlideFour").classList.remove("d-none");
 }

//  Фильтр

function fillProOne() { 
  document.getElementById("fillProBtnOne").classList.add("process__filter__buttons__button-on");
  document.getElementById("fillProBtnTwo").classList.remove("process__filter__buttons__button-on");
  document.getElementById("fillProBtnThree").classList.remove("process__filter__buttons__button-on");
  document.getElementById("fillProBtnFour").classList.remove("process__filter__buttons__button-on");
  document.getElementById("fillProBtnFive").classList.remove("process__filter__buttons__button-on");
  document.getElementById("fillSlideOne").classList.remove("d-none");
  document.getElementById("fillSlideTwo").classList.add("d-none");
  document.getElementById("fillSlideThree").classList.add("d-none");
  document.getElementById("fillSlideFour").classList.add("d-none");
  document.getElementById("fillSlideFive").classList.add("d-none");
 }

 function fillProTwo() { 
  document.getElementById("fillProBtnOne").classList.remove("process__filter__buttons__button-on");
  document.getElementById("fillProBtnTwo").classList.add("process__filter__buttons__button-on");
  document.getElementById("fillProBtnThree").classList.remove("process__filter__buttons__button-on");
  document.getElementById("fillProBtnFour").classList.remove("process__filter__buttons__button-on");
  document.getElementById("fillProBtnFive").classList.remove("process__filter__buttons__button-on");
  document.getElementById("fillSlideOne").classList.add("d-none");
  document.getElementById("fillSlideTwo").classList.remove("d-none");
  document.getElementById("fillSlideThree").classList.add("d-none");
  document.getElementById("fillSlideFour").classList.add("d-none");
  document.getElementById("fillSlideFive").classList.add("d-none");
 }

 function fillProThree() { 
  document.getElementById("fillProBtnOne").classList.remove("process__filter__buttons__button-on");
  document.getElementById("fillProBtnTwo").classList.remove("process__filter__buttons__button-on");
  document.getElementById("fillProBtnThree").classList.add("process__filter__buttons__button-on");
  document.getElementById("fillProBtnFour").classList.remove("process__filter__buttons__button-on");
  document.getElementById("fillProBtnFive").classList.remove("process__filter__buttons__button-on");
  document.getElementById("fillSlideOne").classList.add("d-none");
  document.getElementById("fillSlideTwo").classList.add("d-none");
  document.getElementById("fillSlideThree").classList.remove("d-none");
  document.getElementById("fillSlideFour").classList.add("d-none");
  document.getElementById("fillSlideFive").classList.add("d-none");
 }

 function fillProFour() { 
  document.getElementById("fillProBtnOne").classList.remove("process__filter__buttons__button-on");
  document.getElementById("fillProBtnTwo").classList.remove("process__filter__buttons__button-on");
  document.getElementById("fillProBtnThree").classList.remove("process__filter__buttons__button-on");
  document.getElementById("fillProBtnFour").classList.add("process__filter__buttons__button-on");
  document.getElementById("fillProBtnFive").classList.remove("process__filter__buttons__button-on");
  document.getElementById("fillSlideOne").classList.add("d-none");
  document.getElementById("fillSlideTwo").classList.add("d-none");
  document.getElementById("fillSlideThree").classList.add("d-none");
  document.getElementById("fillSlideFour").classList.remove("d-none");
  document.getElementById("fillSlideFive").classList.add("d-none");
 }

 function fillProFive() { 
  document.getElementById("fillProBtnOne").classList.remove("process__filter__buttons__button-on");
  document.getElementById("fillProBtnTwo").classList.remove("process__filter__buttons__button-on");
  document.getElementById("fillProBtnThree").classList.remove("process__filter__buttons__button-on");
  document.getElementById("fillProBtnFour").classList.remove("process__filter__buttons__button-on");
  document.getElementById("fillProBtnFive").classList.add("process__filter__buttons__button-on");
  document.getElementById("fillSlideOne").classList.add("d-none");
  document.getElementById("fillSlideTwo").classList.add("d-none");
  document.getElementById("fillSlideThree").classList.add("d-none");
  document.getElementById("fillSlideFour").classList.add("d-none");
  document.getElementById("fillSlideFive").classList.remove("d-none");
 }

function closeInfoWin() {
  document.getElementById("infoWin").classList.add("info-close");
}