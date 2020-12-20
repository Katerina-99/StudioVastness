var menuButton = document.querySelector(".menu-button");
menuButton.addEventListener("click", function() {
  document
    .querySelector(".header-navbar")
    .classList.toggle("header-navbar--visible");
});
var closeButton = $(".header-navbar__close");
closeButton.on("click", function() {
  $(".header-navbar").removeClass("header-navbar--visible");
});

$(document).keyup(function(event) {
  if (event.which == "27") {
    $(".header-navbar").removeClass("header-navbar--visible");
  }
});
