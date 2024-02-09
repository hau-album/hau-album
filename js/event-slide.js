$(function () {
  $("#title-debut, #title-banner, #title-animate, #title-illustgift").click(function () {
    $(this).next().slideToggle(1000,'swing');
  });
});