$(document).ready(function () {
  let nextItemNumber = 3;

  $("#add-item").on("click", function () {
    const newItem = $("<li>").text("List item " + nextItemNumber);
    $("#item-list").append(newItem);
    nextItemNumber += 1;
  });

  $("#prepend-item").on("click", function () {
    const newItem = $("<li>").text("List item " + nextItemNumber);
    $("#item-list").prepend(newItem);
    nextItemNumber += 1;
  });

  $("#remove-item").on("click", function () {
    $("#item-list li").last().remove();
  });
});
