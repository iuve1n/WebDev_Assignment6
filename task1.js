$(document).ready(function () {
  $("#change-examples").on("click", function () {
    $("#id-example").text("This text was changed using an ID selector.");
    $(".class-example").html("This paragraph now has <strong>bold text</strong>.");
    $("h1").css("color", "#b8b8b8");
    $("#id-example").css("background-color", "#343434");
  });
});
