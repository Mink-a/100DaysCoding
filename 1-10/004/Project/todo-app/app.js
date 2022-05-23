// ****** SELECT ITEMS **********
const alert = document.querySelector(".alert");
const form = document.querySelector(".grocery-form");
const grocery = document.querySelector("#grocery");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btn");

// edit option

let editElement;
let editFlag = false;
let editID = "";

// ****** EVENT LISTENERS **********
// Submit form
form.addEventListener("submit", addItem);
// clear items
clearBtn.addEventListener("click", clearItems);

// load items
window.addEventListener("DOMContentLoaded", setupItems);

// ****** FUNCTIONS **********
function addItem(e) {
  e.preventDefault();
  const value = grocery.value;

  const id = new Date().getTime().toString();
  if (value !== "" && editFlag === false) {
    createListItems(id, value);
    // display alert
    displayAlert("item added to the list", "success");

    // show container
    container.classList.add("show-container");

    // add to local storage
    addToLocalStorage(id, value);

    // set back to default
    setBackToDefault();
  } else if (value !== "" && editFlag === true) {
    editElement.innerHTML = value;
    displayAlert("value changed", "success");
    // edit in local storgae
    editLoaclStorage(editID, value);
    setBackToDefault();
  } else {
    displayAlert("please enter value", "danger");
  }
}

// display alert
function displayAlert(text, action) {
  alert.textContent = text;
  alert.classList.add(`alert-${action}`);

  // remove alert
  setTimeout(function () {
    alert.textContent = "";
    alert.classList.remove(`alert-${action}`);
  }, 1000);
}

// clear items
function clearItems() {
  const items = document.querySelectorAll(".grocery-item");

  if (items.length > 0) {
    items.forEach((item) => {
      list.removeChild(item);
    });
  }
  container.classList.remove("show-container");
  displayAlert("empty list", "danger");
  setBackToDefault();
  localStorage.removeItem("list");
}

// delete item funciton
function deleteItem(e) {
  const element = e.currentTarget.parentElement.parentElement;
  const id = element.dataset.id;
  console.log(e.currentTarget);

  list.removeChild(element);
  if (list.children.length === 0) {
    container.classList.remove("show-container");
    displayAlert("item removed", "danger");
    setBackToDefault();
    // remove from local storage
    removeFromLocalStorage(id);
  }
}
// edit item function
function editItem(e) {
  const element = e.currentTarget.parentElement.parentElement;
  // set edit item
  editElement = e.currentTarget.parentElement.previousElementSibling;
  // set form values
  grocery.value = editElement.innerHTML;
  editFlag = true;
  editID = element.dataset.id;
  submitBtn.textContent = "edit";
}
// set back to default
function setBackToDefault() {
  grocery.value = "";
  editFlag = false;
  editID = "";
  submitBtn.textContent = "submit";
}

// ****** LOCAL STORAGE **********
// add to local storage
function addToLocalStorage(id, value) {
  // console.log("added to local storage");
  const grocery = { id, value };
  let items = getLocalStorage();
  items.push(grocery);
  localStorage.setItem("list", JSON.stringify(items));
}
// remove from local storage
function removeFromLocalStorage(id) {
  let items = getLocalStorage();
  items = items.filter(function (item) {
    if (item.id !== id) {
      return item;
    }
  });
  localStorage.setItem("list", JSON.stringify(items));
}

// edit local storage
function editLoaclStorage(id, value) {
  let items = getLocalStorage();
  items = items.map(function (item) {
    if (item.id === id) {
      item.value = value;
    }
    return item;
  });
  localStorage.setItem("list", JSON.stringify(items));
}

function getLocalStorage() {
  return localStorage.getItem("list")
    ? JSON.parse(localStorage.getItem("list"))
    : [];
}

// local storage api
// set items
// get items
// remove items
// save as strings
/*
localStorage.setItem("orange", JSON.stringify(["item", "item2"]));
let oranges = JSON.parse(localStorage.getItem("orange"));
console.log(oranges);*/

localStorage.removeItem("orange");

// ****** SETUP ITEMS **********
function setupItems() {
  let items = getLocalStorage();
  if (items.length > 0) {
    items.forEach((item) => {
      createListItems(item.id, item.value);
    });
    container.classList.add("show-container");
  }
}

function createListItems(id, value) {
  const element = document.createElement("article");
  // add class
  element.classList.add("grocery-item");
  // add id
  const attr = document.createAttribute("data-id");
  attr.value = id;

  element.setAttributeNode(attr);
  element.innerHTML = `<p class="title">${value}</p>
  <div class="btn-container">
    <button type="button" class="edit-btn">
      <i class="fas fa-edit"></i>
    </button>
    <button type="button" class="delete-btn">
      <i class="fas fa-trash"></i>
    </button>
    </div>`;

  // append child
  list.appendChild(element);

  // delete btn edit btn
  const deleteBtn = document.querySelector(".delete-btn");
  const editBtn = document.querySelector(".edit-btn");
  deleteBtn.addEventListener("click", deleteItem);
  editBtn.addEventListener("click", editItem);
}
