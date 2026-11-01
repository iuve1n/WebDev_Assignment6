$(document).ready(function () {
  $("#name, #email").on("input", function () {
    $("#name-output").text($("#name").val() || "Nothing entered yet.");
    $("#email-output").text($("#email").val() || "Nothing entered yet.");
  });

  $("#preview-form").on("submit", function (event) {
    event.preventDefault();
  });
});
