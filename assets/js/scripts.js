// papa parse
const public_spreadsheet_url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSeEGW1VxkMnHgIIl16U_78ZrP8rvWvk66_InItIv1Riq0K2d7D6fA1jqfcBl7PZHPAQXyqofWmcJTV/pub?output=csv"
console.log('<a href="' + public_spreadsheet_url + '">' + public_spreadsheet_url + '</a>');

// elements
const resourcesContainer = document.getElementById('resources');
const resTemplate = document.querySelector(".res");
resTemplate.remove();
const numResources = document.querySelector("#numResources");
const generatorForm = document.querySelector("#generator"),
  learnSelect = document.querySelector("#learn"),
  doSelect = document.querySelector("#do"),
  useSelect = document.querySelector("#use"),
  makeSelect = document.querySelector("#make"),
  randomiseButton = document.querySelector("#randomiseButton");
const selects = [learnSelect, doSelect, useSelect, makeSelect];

//empty tag sets, to be populated as data is brought in
let tags = {
  learn: new Set(),
  make: new Set(),
  use: new Set(),
  do: new Set(),
  languages: new Set(),
  collections: new Set(),
  opensource: new Set()
}

// intervals
let placeholderIntervals = {};

// initialise papa parse
window.addEventListener('DOMContentLoaded', () => {
  Papa.parse(public_spreadsheet_url, {
    download: true,
    header: true,
    dynamicTyping: true,
    complete: loadData
  })
});

function loadData(results) {
      
  let data = results.data
  console.log("Successfully processed " + data.length + " rows!", data)
  // update number
  numResources.innerText = data.length;

  //creates dom elements for each resource
  for (let r of data) {
    createResource(r);
  }

  // populate dropdowns
  // for (let tag of ["learn", "do", "use", "make", "languages", "collections"]) {
  for (let tag of ["learn", "do", "use", "make"]) {
    populateDropdowns(tags[tag], tag);
  }

  // form buttons
  generatorForm.addEventListener("submit", loadResources);
  generatorForm.addEventListener("reset", resetResources);
  randomiseButton.addEventListener("click", randomiseResources);

  let comboboxes = document.querySelectorAll(".custom-combobox-input");
  for (let input of comboboxes) {
    let select = input.parentElement.parentElement.querySelector("select");
    let id = select.id

    // randomise placeholder
    let setPlaceholder = () => {
      let options = select.querySelectorAll("option");
      input.placeholder = options[Math.floor(Math.random() * options.length)].value;
    }

    // set interval
    setPlaceholder();
    // let placeholderInterval = setInterval(setPlaceholder, 1000);
    placeholderIntervals[id] = setInterval(setPlaceholder, 1000);

    // clear and re-set intervals on events
    input.addEventListener("focus", () => {
      clearInterval(placeholderIntervals[id]);
      input.placeholder = "";
    });
    input.addEventListener("blur", () => {
      // placeholderInterval = setInterval(setPlaceholder, 1000);
      placeholderIntervals[id] = setInterval(setPlaceholder, 1000);
    });

  }
}

function clearPlaceholders() {
  // clear placeholders
  for (let input of document.querySelectorAll(".custom-combobox-input")) {
    input.placeholder = "";
  }
  // clear intervals
  for (let id in placeholderIntervals) {
    if (placeholderIntervals[id]) {
      clearInterval(placeholderIntervals[id]);
    }
  }
}

function loadResources(e) {
  e.preventDefault();
  filterResources([learnSelect.value, doSelect.value, useSelect.value, makeSelect.value])
  clearPlaceholders();
}

function resetResources(e) {
  filterResources();
  clearPlaceholders();
}

function randomiseResources(e) {
  for (let select of selects) {
    let options = select.children;
    let value = options[Math.floor(Math.random() * options.length)].value
    select.value = value;
    select.nextElementSibling.querySelector("input").value = value;
  }
  loadResources(e);
}

//FILTER ONLY SELECT RESOURCES BY KEYWORD TAGS
function filterResources(classes = []) {
  console.log(classes);

  const resources = document.querySelectorAll(".res");

  // if nothing is selected, show everything
  let showAll = classes.every(c => c === "");
  if (showAll) {
    for (let res of resources) {
      res.classList.toggle("res--visible", true);
    }
  } else {
    for (let res of resources) {
      // check if resource contains at least one of the given tags
      let match = false;
      for (let c of classes) {
        let escaped = c.replace(/\s+/g, "");
        if (res.classList.contains(escaped)) {
          match = true;
        }
      }
      res.classList.toggle("res--visible", match);
    }
  }

  // update numResources text
  numResources.innerText = document.querySelectorAll(".res--visible").length;
}


function populateDropdowns(tags, field) {
  let select = document.getElementById(field)
  let sorted = Array.from(tags).sort(); // sort alphabetically
  for (let item of sorted) {
    let option = document.createElement("option")
    option.value = item 
    option.innerText = item
    select.appendChild(option)
  }
}

function createResource(r){
  // create element
  let res = resTemplate.cloneNode(true);
  if (r.link) res.querySelector(".res-title").href = r.link;
  res.querySelector(".res-title h3").innerText = r.title;
  res.querySelector(".res-creator").innerText = r.creator;
  res.querySelector(".res-blurb").innerText = r.blurb;
  // for (let field of ["learn", "use", "do", "make", "collections", "languages"]) {
  for (let field of ["learn", "use", "do", "make"]) {
    if (r[field]) {
      let tagList = r[field].split(",").sort();
      let p = document.createElement("p");
      p.classList.add("tagList");
      for (let tag of tagList) {
        // add to class list
        let escaped = tag.trim().replace(/\s+/g, "");
        res.classList.add(escaped);
        // create element
        let span = document.createElement("span");
        span.classList.add("tag");
        span.innerText = tag.trim();
        p.appendChild(span);
      }
      res.querySelector(".res-" + field).appendChild(p);
    } else {
      res.querySelector(".res-" + field).style.display = "none";
    }
  }

  // // add tags to sets and classlist
  // // for (let tag of ["learn", "make", "use", "do", "languages", "collections"]) {
  // for (let tag of ["learn", "make", "use", "do"]) {
  //   if (r[tag]) {
  //     let tagList = r[tag].split(",")
  //     for (let t of tagList) { 
  //       tags[tag].add(t.trim())
  //       let escaped = t.trim().replace(/\s+/g, "");
  //       res.classList.add(escaped);
  //     }
  //   }
  // }

  // make visible initially
  res.classList.add("res--visible");

  // append
  resourcesContainer.appendChild(res);
}