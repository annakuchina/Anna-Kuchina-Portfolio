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
  console.log("ready!");
  $("#menu a ili").on("click", function(e) {
    function toggleCheckbox() {
      let checkbox = $("#menu-checkbox")[0];
      console.log("toggleCheckbox", checkbox);
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
