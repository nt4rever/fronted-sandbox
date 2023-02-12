$(document).ready(function () {
  setTimeout(function () {
    $(".preloader").hide();
  }, 300);

  $(".nav-item").on("click", function () {
    $(".nav-item").removeClass("active");
    $(this).addClass("active");
  });
});
