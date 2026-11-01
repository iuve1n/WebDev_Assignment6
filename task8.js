$(document).ready(function () {
  $("#animate-square").on("click", function () {
    $("#moving-square").stop(true).css({
      width: "100px",
      height: "100px",
      left: "0px"
    }).animate({
      width: "140px",
      height: "140px",
      left: "50px"
    }, 700);
  });
});
