// add class names from filled-in html
function addClasses(resources) {
  for (let res of resources) {
    let fields = res.querySelectorAll("div");
    for (let field of fields) {
      for (let d of field.querySelectorAll("dd")) {
        let text = d.textContent.replace(": ", "-").replace(" ", "_");
        let fieldname = field.classList[0].split("-")[2];
        if (fieldname === "tags") {
          res.classList.add(text);
        } else {
          res.classList.add(fieldname + "-" + text);
        }
      }
    }
  }
}

// update generator upon interactions
let updateGenerator = (event) => {
  event.stopPropagation();
  let actions = event.target.form.querySelectorAll("select");

  // deal with buttons
  if (event.target.type === "submit") { // submit
    event.preventDefault();
  } else if (event.target.type === "reset") { // reset
    event.preventDefault();
    event.target.form.reset();
    for (let action of actions) {
      for (let opt of action.options) {
        opt.removeAttribute("selected");
      }
      action.options[0].setAttributeNode(document.createAttribute("selected"));
    }
  } else if (event.target.value === "randomise") {  // randomise
    for (let action of actions) {
      for (let opt of action.options) {
        opt.removeAttribute("selected");
      }
      if (action.options.length > 1) {
        let numOpt = Math.floor(Math.random() * action.options.length);
        action.options[numOpt].setAttributeNode(document.createAttribute("selected"));
      } else {
        action.options[0].setAttributeNode(document.createAttribute("selected"));
      }
    }
  }

  // updateFilters();
  generateResources();
}

// function updateFilters() {
//   let filters = document.querySelectorAll(".filter");
//   for (let filter of filters) {
//     let options = [...filter.querySelectorAll("option")];
//     options.splice(0, 1); // remove first "all" option
//     for 
//   }
// }

// generate resources based on interests and filters
function generateResources() {
  let queries = [];

  // get actions
  let actions = document.querySelectorAll(".action select");
  for (let action of actions) {
    if (action.value) { // ignore if it's set to "anything"
      queries.push(action.value);
    }
  }

  // get filters
  let filters = document.querySelectorAll(".filter");
  for (let filter of filters) {
    if (filter.value) { // ignore if set to "all"
      queries.push(filter.value);
    }
  }

  console.log(queries);

  let resources = document.getElementsByClassName("res");
  if (queries.length == 0) {
    for (let res of resources) {
      res.style.display = "block";
    }
  } else {
    for (let res of resources) {
      let tags = [...res.classList]; // turn into an array
      tags.splice(0, 1); // remove first "res" class name
      let matches = tags.filter(tag => {
        return queries.includes(tag.replace("-", ": ").replace("_", " "))
      });
      if (matches.length > 0) {
        res.style.display = "block";
      } else {
        res.style.display = "none";
      }
    }
  }
}

let resources = document.getElementsByClassName("res");
addClasses(resources);

let generator = document.getElementById("generator");
generator.reset();
for (let button of generator.querySelectorAll("button")) {
  button.addEventListener("click", updateGenerator);
}

let filterForm = document.getElementById("filters");
filterForm.reset();
filterForm.addEventListener("input", generateResources);