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
  let gameIframe = document.getElementById("game-iframe");
  let gameContainer = document.getElementById("game-container");
  let browseButton = document.getElementById("browse-button");

  homeScreen.classList.remove("hidden"); // shows home page on load
  gameIframe.src = gameLinks.drawing;

  // event listeners that hide and reveal different pages
  homeScreenButton.addEventListener("click", () => {
    homeScreen.classList.remove("hidden");
    gameScreen.classList.add("hidden");
    libraryScreen.classList.add("hidden");
    loginScreen.classList.add("hidden");
    window.scrollTo(0, 0);
    if (gameContainer.contains(gameIframe)) {
      gameContainer.removeChild(gameIframe);
    }
    document.querySelector("ul").classList.remove("small-ul");
    document.getElementsByClassName("logo")[0].classList.remove("small-logo");
  });

  browseButton.addEventListener("click", () => {
    libraryScreen.classList.remove("hidden");
    gameScreen.classList.add("hidden");
    homeScreen.classList.add("hidden");
    loginScreen.classList.add("hidden");
    window.scrollTo(0, 0);
    if (gameContainer.contains(gameIframe)) {
      gameContainer.removeChild(gameIframe);
    }
    checkHeaderStyling();
  });

  libraryScreenButton.addEventListener("click", () => {
    libraryScreen.classList.remove("hidden");
    gameScreen.classList.add("hidden");
    homeScreen.classList.add("hidden");
    loginScreen.classList.add("hidden");
    if (gameContainer.contains(gameIframe)) {
      gameContainer.removeChild(gameIframe);
    }
    window.scrollTo(0, 0);
    checkHeaderStyling();
  });

  loginScreenButton.addEventListener("click", () => {
    loginScreen.classList.remove("hidden");
    gameScreen.classList.add("hidden");
    homeScreen.classList.add("hidden");
    libraryScreen.classList.add("hidden");
    window.scrollTo(0, 0);
    if (gameContainer.contains(gameIframe)) {
      gameContainer.removeChild(gameIframe);
    }
    checkHeaderStyling();
  });

  for (let i = 0; i < gameScreenButtons.length; i++) {
    gameScreenButtons[i].addEventListener("click", () => {
      gameScreen.classList.remove("hidden");
      homeScreen.classList.add("hidden");
      libraryScreen.classList.add("hidden");
      loginScreen.classList.add("hidden");
      checkHeaderStyling();
      window.scrollTo(0, 0);
      gameContainer.appendChild(gameIframe);
    });
    console.log(homeScreen.classList);
  }

  let avatar = document.getElementById("avatar");

  // code for login form //
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

  loginUsername.addEventListener("click", () => {
    loginUsername.style.removeProperty("border");
  });

  loginPassword.addEventListener("click", () => {
    loginPassword.style.removeProperty("border");
  });

  submitBTN.addEventListener("click", () => {
    if (currentText == "") {
      // user hasn't enetered words
      loginUsername.style.border = "1px solid red";
      loginPassword.style.border = "1px solid red";
    } else {
      // user successful log in
      loginScreen.classList.add("hidden");
      libraryScreen.classList.remove("hidden");
      avatar.classList.remove("hidden");
      document.getElementById("nav-login-screen").classList.add("hidden");
    }
  });

  // code for changing header on scroll
  window.addEventListener("scroll", () => {
    if (!homeScreen.classList.contains("hidden")) {
      console.log("Home screen hidden");
      scrollFunction();
    }
  });
});

function scrollFunction() {
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    document.querySelector("ul").classList.add("small-ul");
    document.getElementsByClassName("logo")[0].classList.add("small-logo");
    document.querySelectorAll("h1")[0].classList.remove("hidden");
  } else {
    document.querySelector("ul").classList.remove("small-ul");
    document.getElementsByClassName("logo")[0].classList.remove("small-logo");
    document.querySelectorAll("h1")[0].classList.add("hidden");
  }
}

function checkHeaderStyling() {
  if (!document.querySelector("ul").classList.contains("small-ul")) {
    document.querySelector("ul").classList.add("small-ul");
    document.getElementsByClassName("logo")[0].classList.add("small-logo");
    document.querySelectorAll("h1")[0].classList.add("hidden");
  }
}
