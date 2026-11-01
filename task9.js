$(document).ready(function () {
  $("#run-sequence").on("click", function () {
    $("#sequence-square").stop(true).css({
      left: "0px",
      top: "0px",
      width: "100px",
      height: "100px"
    });

    $("#sequence-square")
      .animate({ left: "80px" }, 400)
      .animate({ top: "60px" }, 400)
      .animate({ width: "50px", height: "50px" }, 400)
      .animate({ left: "0px", top: "0px", width: "100px", height: "100px" }, 400);
  });
});
