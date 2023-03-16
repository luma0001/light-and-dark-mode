"use strict";

window.addEventListener("load", initApp);

function initApp() {
  //event listener for select on HTML
  document
    .querySelector("#select-color-mode")
    .addEventListener("change", modeSelected);

  detectUserPreference();
  readUserColorMode();
}

// Detect and set previous selected color mode from localStorage
function detectUserPreference() {
  const modeFromLocalStorage = readUserColorMode();
  changeMode(modeFromLocalStorage);

  // if (modeFromLocalStorage !== null) {
  //   changeMode(modeFromLocalStorage);
  //   //Changes the selector to the saved-color
  //   document.querySelector("#select-color-mode").value = modeFromLocalStorage;
  // }

  if (modeFromLocalStorage) {
    changeMode(modeFromLocalStorage);
    //Changes the selector to the saved-color
    document.querySelector("#select-color-mode").value = modeFromLocalStorage;
  }
}

//Read and return userColorMorde from localStorage
function readUserColorMode() {
  const userColorMode = localStorage.getItem("userColorMode");
  return userColorMode;
}

//Save color mode to to localstorage
function saveUserColorMode(mode) {
  console.log(mode + " saved");
  localStorage.setItem("userColorMode", mode);
}

// modeSelected called when #select-color-mode changes value (the user select color mode)
function modeSelected() {
  console.log("New color mode selected");
  const selectedColorMode = this.value;

  //Changes the selected color on screen
  changeMode(selectedColorMode);

  //Saves the selected color
  saveUserColorMode(selectedColorMode);
}

function changeMode(mode) {
  resetColorMode();
  if (mode == "dark") {
    console.log(mode);
    document.querySelector("body").classList.add("dark-mode");
  } else if (mode == "blue") {
    console.log(mode);
    document.querySelector("body").classList.add("blue-mode");
  } else if (mode == "burgundy") {
    console.log(mode);
    document.querySelector("body").classList.add("burgundy-mode");
  }
}

function resetColorMode() {
  const body = document.querySelector("body");
  body.classList.remove("dark-mode");
  body.classList.remove("blue-mode");
  body.classList.remove("burgundy-mode");
}
