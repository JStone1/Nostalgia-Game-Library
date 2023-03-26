let mainHTML = document.querySelector("main"); // where HTML screens get injected

let gameLinks = {
  drawing: " https://preview.construct.net/#hfez28d4 ",
  pong: "https://preview.construct.net/#f7sjntxc",
};

// handlers for nav buttons
let homeScreenButton = document.getElementById("nav-home-screen");
let libraryScreenButton = document.getElementById("nav-library-screen");
let aboutScreenButton = document.getElementById("nav-about-screen");

// inserts all html screens when window loads
window.addEventListener("load", () => {
  mainHTML.insertAdjacentHTML("afterbegin", screenStates.homeScreen);
  mainHTML.insertAdjacentHTML("afterbegin", screenStates.libraryScreen);
  mainHTML.insertAdjacentHTML("afterbegin", screenStates.aboutScreen);
  mainHTML.insertAdjacentHTML("afterbegin", screenStates.gameScreen);

  let drawBtn = document.getElementById("draw-game");
  drawBtn.addEventListener("click", () => {
    gameIframe.src = gameLinks.drawing;
    console.log("GAME 1", currentGame);
  });

  let pongBtn = document.getElementById("pong-game");
  pongBtn.addEventListener("click", () => {
    gameIframe.src = gameLinks.pong;
    console.log("GAME 2", currentGame);
  });

  // handlers for different screens/elements
  let homeScreen = document.getElementById("home-page");
  let libraryScreen = document.getElementById("library-page");
  let aboutScreen = document.getElementById("about-page");
  let gameScreen = document.getElementById("game-page");
  let gameScreenButtons = document.getElementsByClassName("game-page-button");
  let gameIframe = document.querySelector("iframe");
  let gameContainer = document.getElementById("game-container");

  libraryScreen.classList.remove("hidden"); // shows home page on load

  // event listeners that hide and reveal different pages
  homeScreenButton.addEventListener("click", () => {
    homeScreen.classList.remove("hidden");
    gameScreen.classList.add("hidden");
    libraryScreen.classList.add("hidden");
    aboutScreen.classList.add("hidden");
    gameContainer.removeChild(gameIframe);
  });

  libraryScreenButton.addEventListener("click", () => {
    libraryScreen.classList.remove("hidden");
    gameScreen.classList.add("hidden");
    homeScreen.classList.add("hidden");
    aboutScreen.classList.add("hidden");
    gameContainer.removeChild(gameIframe);
    console.log(currentGame);
  });

  aboutScreenButton.addEventListener("click", () => {
    aboutScreen.classList.remove("hidden");
    gameScreen.classList.add("hidden");
    homeScreen.classList.add("hidden");
    libraryScreen.classList.add("hidden");
    gameContainer.removeChild(gameIframe);
  });

  for (let i = 0; i < gameScreenButtons.length; i++) {
    gameScreenButtons[i].addEventListener("click", () => {
      gameScreen.classList.remove("hidden");
      homeScreen.classList.add("hidden");
      libraryScreen.classList.add("hidden");
      aboutScreen.classList.add("hidden");
      gameContainer.appendChild(gameIframe);
    });
  }
});
