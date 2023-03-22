let mainHTML = document.querySelector("main");

let homeScreenButton = document.getElementById("nav-home-screen");
let gameScreenButton = document.getElementById("nav-game-screen");
let aboutScreenButton = document.getElementById("nav-about-screen");

window.addEventListener("load", () => {
  mainHTML.insertAdjacentHTML("afterbegin", screenStates.homeScreen);
  mainHTML.insertAdjacentHTML("afterbegin", screenStates.gameScreen);
  mainHTML.insertAdjacentHTML("afterbegin", screenStates.aboutScreen);
  let homeScreen = document.getElementById("home-page");
  console.log(homeScreen);
  let gameScreen = document.getElementById("game-page");
  let aboutScreen = document.getElementById("about-page");

  homeScreenButton.addEventListener("click", () => {
    homeScreen.classList.remove("hidden");
    gameScreen.classList.add("hidden");
    aboutScreen.classList.add("hidden");
  });

  gameScreenButton.addEventListener("click", () => {
    gameScreen.classList.remove("hidden");
    homeScreen.classList.add("hidden");
    aboutScreen.classList.add("hidden");
  });

  aboutScreenButton.addEventListener("click", () => {
    aboutScreen.classList.remove("hidden");
    homeScreen.classList.add("hidden");
    gameScreen.classList.add("hidden");
  });
});
