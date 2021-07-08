// "use strict"

// add data attributes from filled-in html
// function addDataAttrs(resources) {
//   for (let res of resources) {
//     let fields = res.querySelectorAll("div");
//     for (let field of fields) {
//       let fieldname = field.classList[0].split("-")[2];
//       let fieldlist = [];
//       for (let d of field.querySelectorAll("dd")) {
//         fieldlist.push(d.textContent);
//       }
//       res.dataset[fieldname] = fieldlist.join("|");
//     }
//   }
// }

// update generator upon interactions
let updateGenerator = (event) => {
  console.log('reached updateGenerator()')
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

  let resources = generateResources();
  // updateFilters(resources);
}

// function updateFilters(resources) {
//   let filters = document.querySelectorAll(".filter select");
//   for (let filter of filters) {
//     let filterid = filter.id;
//     let
//     let options = filter.querySelectorAll("option:not([value=''])");
//     options.forEach((val, i, arr) => {
//       console.log()
//     });
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
  let filters = document.querySelectorAll("#filter");
  for (let filter of filters) {
    if (filter.value) { // ignore if set to "all"
      queries.push(filter.value);
    }
  }

  console.log(queries);
  console.log("here?")

  let resources = document.getElementsByClassName("res");
  if (queries.length == 0) {
    for (let res of resources) {
      res.style.display = "block";
    }
  } else {
    for (let res of resources) {
      let tags = [...res.classList]; // turn into an array
      console.log(tags)
      //RIGHT NOW IT's not working here??
      console.log("this is where tag is empty")
      tags.splice(0, 1); // remove first "res" class name
      let matches = tags.filter(tag => {
        //RIGHT NOW IT's not working here??
        console.log("tag filtering happening??")
        // console.log(queries.includes(tag.replace("-", ":").replace("_", " ")))
        return queries.includes(tag.replace("-", ":").replace("_", " "))
      });
      if (matches.length > 0) {
        res.style.display = "block";
      } else {
        res.style.display = "none";
      }
    }
  }

  return resources;
}



//issue is with how to set up the form I think
let resources = document.getElementsByClassName("res");
var generator = document.getElementById('generator');

 for (let button of generator.querySelectorAll("button")) {
   button.addEventListener("click", updateGenerator);
 }

let filterForm = document.getElementById("filters");
// filterForm.reset();
document.addEventListener("input", generateResources);
