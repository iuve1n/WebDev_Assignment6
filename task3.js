$(document).ready(function () {
  $("#fade-in").on("click", function () {
    $("#fade-image").stop(true, true).fadeIn(400);
  });

  $("#fade-out").on("click", function () {
    $("#fade-image").stop(true, true).fadeOut(400);
  });

  $("#fade-toggle").on("click", function () {
    $("#fade-image").stop(true, true).fadeToggle(400);
  });
});
