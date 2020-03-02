var filters = {};
var suggests;
var resources;

$(function() {
  suggests = $(".custom-combobox-input");
  resources = $("#resources").children();

  for (suggest of suggests) {
    filters[suggest.parentNode.parentNode.id] = suggest.value.replace(" ", "");
    suggest.addEventListener("keydown", updateResources);
  }

  updateResources();

});

function updateResources(event) {
  for (suggest of suggests) {
    filters[suggest.parentNode.parentNode.id] = suggest.value.replace(" ", "");
  }

  for (resource of resources) {
    for (className of resource.classList) {
      if (Object.values(filters).includes(className)) {
        resource.style.display = "block";
      } else {
        resource.style.display = "none";
      }
    }
  }
}