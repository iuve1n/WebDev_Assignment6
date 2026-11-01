$(document).ready(function () {
  $("#change-image").on("click", function () {
    if ($("#attribute-image").attr("src") === "images/flowers.png") {
      $("#attribute-image").attr("src", "images/like.png");
      $("#attribute-image").attr("alt", "A thumbs-up symbol among pink roses and white daisies");
    } else {
      $("#attribute-image").attr("src", "images/flowers.png");
      $("#attribute-image").attr("alt", "Pink roses and white daisies around the text: Жоғары баға қоясыз ба?)");
    }
  });

  $("#change-link").on("click", function () {
    if ($("#resource-link").attr("href") === "https://api.jquery.com/") {
      $("#resource-link").attr("href", "https://learn.jquery.com/");
      $("#resource-link").text("jQuery Learning Center");
    } else {
      $("#resource-link").attr("href", "https://api.jquery.com/");
      $("#resource-link").text("jQuery API documentation");
    }
  });
});
