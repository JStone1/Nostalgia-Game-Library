let mainHTML = document.querySelector("main"); // where HTML screens get injected

let gameLinks = {
  drawing: " https://preview.construct.net/#s5zwqdgf",
  pong: "https://preview.construct.net/#6tpd3swx",
};

// handlers for nav buttons
let homeScreenButton = document.getElementById("nav-home-screen");
let libraryScreenButton = document.getElementById("nav-library-screen");
let loginScreenButton = document.getElementById("nav-login-screen");

// inserts all html screens when window loads
window.addEventListener("load", () => {
  mainHTML.insertAdjacentHTML("afterbegin", screenStates.homeScreen);
  mainHTML.insertAdjacentHTML("afterbegin", screenStates.libraryScreen);
  mainHTML.insertAdjacentHTML("afterbegin", screenStates.loginScreen);
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
  let gameScreen = document.getElementById("game-page");
  let loginScreen = document.getElementById("login-page");
  let gameScreenButtons = document.getElementsByClassName("game-page-button");
  let gameIframe = document.querySelector("iframe");
  let gameContainer = document.getElementById("game-container");
  let browseButton = document.getElementById("browse-button");

  loginScreen.classList.remove("hidden"); // shows home page on load
  gameIframe.src = gameLinks.drawing;

  // event listeners that hide and reveal different pages
  homeScreenButton.addEventListener("click", () => {
    homeScreen.classList.remove("hidden");
    gameScreen.classList.add("hidden");
    libraryScreen.classList.add("hidden");
    loginScreen.classList.add("hidden");
    window.scrollTo(0, 0);
    gameContainer.removeChild(gameIframe);
  });

  browseButton.addEventListener("click", () => {
    libraryScreen.classList.remove("hidden");
    gameScreen.classList.add("hidden");
    homeScreen.classList.add("hidden");
    loginScreen.classList.add("hidden");
    window.scrollTo(0, 0);
    gameContainer.removeChild(gameIframe);
  });

  libraryScreenButton.addEventListener("click", () => {
    libraryScreen.classList.remove("hidden");
    gameScreen.classList.add("hidden");
    homeScreen.classList.add("hidden");
    loginScreen.classList.add("hidden");
    gameContainer.removeChild(gameIframe);
    window.scrollTo(0, 0);
    console.log(currentGame);
  });

  loginScreenButton.addEventListener("click", () => {
    loginScreen.classList.remove("hidden");
    gameScreen.classList.add("hidden");
    homeScreen.classList.add("hidden");
    libraryScreen.classList.add("hidden");
    window.scrollTo(0, 0);
    gameContainer.removeChild(gameIframe);
  });

  for (let i = 0; i < gameScreenButtons.length; i++) {
    gameScreenButtons[i].addEventListener("click", () => {
      gameScreen.classList.remove("hidden");
      homeScreen.classList.add("hidden");
      libraryScreen.classList.add("hidden");
      loginScreen.classList.add("hidden");
      window.scrollTo(0, 0);
      gameContainer.appendChild(gameIframe);
    });
  }

  let loginUsername = document.getElementById("login-username");
  let loginPassword = document.getElementById("login-password");
  let submitBTN = document.getElementById("submit-button");
  let currentText = "";

  function checkText(event) {
    currentText = event.target.value;
    console.log(currentText);
  }

  loginUsername.addEventListener("input", checkText);
  loginPassword.addEventListener("input", checkText);

  submitBTN.addEventListener("click", () => {
    if (currentText == "") {
      console.log("Please enter some words");
    }
  });
});
