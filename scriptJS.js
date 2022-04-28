$(function() {
  $("#toggle").click(function() {
    $(this).toggleClass("on");
    $("#resize").toggleClass("active");
  });
});

$(function() {
  $("#resize #menu a li").click(function() {
    $("#toggle").toggleClass("on");
    $("#resize").toggleClass("active");
  });
});

$(document).ready(function() {
  $("#menu a ili").on("click", function(e) {
    function toggleCheckbox() {
      let checkbox = $("#menu-checkbox")[0];
      checkbox.checked = false;
    }
    toggleCheckbox();
  });
});

$(document).on("click", 'a[href^="#"]', function(event) {
  event.preventDefault();

  $("html, body").animate(
    {
      scrollTop: $($.attr(this, "href")).offset().top
    },
    1500
  );
});

var slideIndex = 0;
var play = "play";
var pause = "pause";

slideState(play);

showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}


function slideState(iconState) {
  if (iconState == "pause") {
      // console.log(iconState);
      // console.log("going to pause");
      // pauseIcon.style.display = "none";
      // playIcon.style.display = "active";
      // turnSlides(pause)
  }

  if ((iconState == "play") || (iconState == undefined)) {
      // pauseIcon.style.display = "active";
      // playIcon.style.display = "none";
      // console.log(iconState);
      // console.log("going to play");
      turnSlides(play);
  }

}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "flex"; 
  dots[slideIndex-1].className += " active";
}

function turnSlides(playState) {
  // console.log(playState);
  // console.log("HERE");
  if (playState == "play") {
    // console.log("yes")
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "flex";  
    dots[slideIndex-1].className += " active";
    setTimeout(slideState, 7000); // Change image every 2 seconds
  }
}