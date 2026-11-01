$(document).ready(function () {
  $(".accordion-button").on("click", function () {
    const panel = $("#" + $(this).attr("aria-controls"));
    const isOpen = $(this).attr("aria-expanded") === "true";

    $(".accordion-button").attr("aria-expanded", "false");
    $(".accordion-panel").stop(true, true).slideUp(200);

    if (!isOpen) {
      $(this).attr("aria-expanded", "true");
      panel.stop(true, true).slideDown(200);
    }
  });
});
