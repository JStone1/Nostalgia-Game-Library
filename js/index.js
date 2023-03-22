let mainHTML = document.querySelector("main");

let homeScreenButton = document.getElementById("nav-home-screen");
let libraryScreenButton = document.getElementById("nav-library-screen");
let aboutScreenButton = document.getElementById("nav-about-screen");

// inserts all html screens when window loads
window.addEventListener("load", () => {
  mainHTML.insertAdjacentHTML("afterbegin", screenStates.homeScreen);
  mainHTML.insertAdjacentHTML("afterbegin", screenStates.libraryScreen);
  mainHTML.insertAdjacentHTML("afterbegin", screenStates.aboutScreen);
  mainHTML.insertAdjacentHTML("afterbegin", screenStates.gameScreen);

  // handlers for different screens
  let homeScreen = document.getElementById("home-page");
  let libraryScreen = document.getElementById("library-page");
  let aboutScreen = document.getElementById("about-page");
  let gameScreen = document.getElementById("game-page");
  let gameScreenButton = document.getElementById("game-page-button");

  // event listeners that hide and reveal different pages
  gameScreenButton.addEventListener("click", () => {
    gameScreen.classList.remove("hidden");
    homeScreen.classList.add("hidden");
    libraryScreen.classList.add("hidden");
    aboutScreen.classList.add("hidden");
  });

  homeScreenButton.addEventListener("click", () => {
    homeScreen.classList.remove("hidden");
    gameScreen.classList.add("hidden");
    libraryScreen.classList.add("hidden");
    aboutScreen.classList.add("hidden");
  });

  libraryScreenButton.addEventListener("click", () => {
    libraryScreen.classList.remove("hidden");
    gameScreen.classList.add("hidden");
    homeScreen.classList.add("hidden");
    aboutScreen.classList.add("hidden");
  });

  aboutScreenButton.addEventListener("click", () => {
    aboutScreen.classList.remove("hidden");
    gameScreen.classList.add("hidden");
    homeScreen.classList.add("hidden");
    libraryScreen.classList.add("hidden");
  });
});
