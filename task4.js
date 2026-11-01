$(document).ready(function () {
  $("#slide-up").on("click", function () {
    $("#slide-panel").stop(true, true).slideUp(400);
  });

  $("#slide-down").on("click", function () {
    $("#slide-panel").stop(true, true).slideDown(400);
  });

  $("#slide-toggle").on("click", function () {
    $("#slide-panel").stop(true, true).slideToggle(400);
  });
});
