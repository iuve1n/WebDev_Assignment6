$(document).ready(function () {
  $("#run-combined").on("click", function () {
    $("#combined-square").stop(true).css({
      left: "0px",
      width: "100px",
      height: "100px",
      opacity: 1
    }).animate({
      left: "50px",
      width: "140px",
      height: "140px",
      opacity: 0.4
    }, 700);
  });
});
