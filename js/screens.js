let screenStates = {
  homeScreen: `<div id="home-page" class="hidden">
  <section class="hero">
    <section id="hero-text" class="row page-description">
      <h1>Welcome to...</h1>
      <p>Nostalgic Game Library!</p>
    </section>
  </section>
  <section class="info-block">
    <h2>What is it?</h2>
    <p>
      Nostalgia Game Library is home to a fun collection of games that you
      can play with your friends and family!
      We hope by bringing back old classic games, we can bring people closer together through playing
      games - no matter the distance!
    </p>
  </section>
  <section class="info-block">
    <h2>Who are we?</h2>
    <p>
    We are a group of third year students from Bath Spa University who all have a passion for games! 
    We beleive that the simplest games can often be the most fun, especially when playing with friends 
    and family. By working in partnership with AgeUK, we aim to share our love for games with everyone and 
    help create some new (and hopefully fun) memories!
    </p>
  </section>
  <section class="info-block">
    <h2>Ready to play?</h2>
    <p>
      When you're ready, click the button below to get started!
    </p>
    <button class="button-primary" id="browse-button">Browse games</button>
  </section>
</div>`,
  libraryScreen: `<div id="library-page"  class="hidden">
  <section class=" page-description row">
    <h2>Game Library</h2>
    <p>
      Browse through our collection of games:
    </p>
  </section>



  <section class="row">
    <div class="twelve columns game-container">
      <div class="row">
        <div class="two columns">&nbsp;</div>
        <!--Empty Div-->

        <article class="four columns game-card">
          <h3>Drawmagination</h3>
          <img class="game-thumbnail" src="images/draw-thumbnail.png" />
          <p>Take turns to draw whilst the other player guesses!</p>
          <button id="draw-game" class=" button-primary game-page-button">Play now!</button>
        </article>

        <article class="four columns game-card">
          <h3>Pong</h3>
          <img class="game-thumbnail" src="images/pong-thumbnail.png" />
          <p> Take control of a paddle and hit the ball past the other player to score a point!</p>
          <button id="pong-game" class=" button-primary game-page-button">Play now!</button>
        </article>

        <div class="two columns">&nbsp;</div>
        <!--Empty Div-->
      </div>

        <div class="two columns">&nbsp;</div>
        <!--Empty Div-->
      </div>      
      <div class="row">
        <div class="two columns">&nbsp;</div>
        <!--Empty Div-->

        <article class="four columns game-card">
          <div class="locked"><i class="fa-solid fa-lock fa-10x"></i></div>
          <h3>Drawmagination</h3>
          <img class="game-thumbnail" src="images/draw-thumbnail.png" />

          <button id="draw-game" class="game-page-button">Play now!</button>
        </article>

        <article class="four columns game-card">
          <div class="locked"><i class="fa-solid fa-lock fa-10x"></i></div>
          <h3>Pong</h3>
          <img class="game-thumbnail" src="images/pong-thumbnail.png" />
          <button id="pong-game" class="game-page-button">Play now!</button>
        </article>

        <div class="two columns">&nbsp;</div>
        <!--Empty Div-->
      </div>

        <div class="two columns">&nbsp;</div>
        <!--Empty Div-->
      </div>

    </div>
  </section>`,
  gameScreen: ` <div id="game-page" class="hidden">
  <section class="row page-description">
    <h2>Get ready to play!</h2>
  </section>
  <div class="row">
    <div class="three columns video-placeholder">Player 1 video</div>
    <div class="six columns" id="game-container">
      <iframe
        src=""
        width="600"
        height="400"
        scrolling="no"
        noresize="noresize"
        id="game-iframe"
      ></iframe>
    </div>
    <div class="three columns video-placeholder">Player 2 video</div>
  </div>
  <div id="chat-box-container">
    <label for="chat-box">Chat box</label>
    <input id="chat-box" type="text" />
  </div>
</div>`,
  loginScreen: ` <div id="login-page" class="hidden"> 
    <section class="row page-description">
    <h2>Login</h2>
    <p>
    Please enter your details below
  </p>
    </section>
    <section class="row">    
    <form id="login-form">
      <label for="login-username">Username</label>
      <input type="text" id="login-username" name="username" />
      <label for="login-password">Password</label>
      <input type="password" id="login-password" name="password" />
      <button class="button-primary" type="button" id="submit-button">Login</button>
      </form>
      </section>
</div>`,
};
