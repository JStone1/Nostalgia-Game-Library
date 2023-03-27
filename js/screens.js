let screenStates = {
  homeScreen: `<div id="home-page"  class="hidden">
  <section class="row page-description">
      <h2>Home Screen</h2>
      <p>More coming soon...</p>
    </section>
  </div>`,
  libraryScreen: `<div id="library-page"  class="hidden">
  <section class="row page-description">
    <h2>Game Library</h2>
    <p>
      Browse through our collection of games or search for one yourself!
    </p>
    <input type="search" placeholder="&#x1F50E;" />
  </section>



  <section class="row">
    <div class="twelve columns game-container">
      <div class="row">
        <div class="two columns">&nbsp;</div>
        <!--Empty Div-->

        <article class="four columns game-card">
          <h3>Drawmagination</h3>
          <img class="game-thumbnail" src="/images/draw-thumbnail.png" />

          <button id="draw-game" class="game-page-button">Play now!</button>
        </article>

        <article class="four columns game-card">
          <h3>Pong</h3>
          <img class="game-thumbnail" src="/images/pong-thumbnail.png" />
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
  aboutScreen: `<div id="about-page" class="hidden">
  <section class="row page-description">
      <h2>About Us</h2>
      <p>More coming soon...</p>
    </section>
  </div>`,
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
      ></iframe>
    </div>
    <div class="three columns video-placeholder">Player 2 video</div>
  </div>
  <div id="chat-box-container">
    <label for="chat-box">Chat box</label>
    <input id="chat-box" type="text" />
  </div>
</div>`,
};
