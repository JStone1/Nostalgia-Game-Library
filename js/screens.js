let screenStates = {
  homeScreen: `<div id="home-page"  class="hidden">
  <section class="row page-description">
      <h2>Home Screen</h2>
      <p>This is the first screen</p>
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

  <aside>
    <div id="left-ad" class="ad">AD</div>
  </aside>

  <section class="row">
    <div class="twelve columns game-container">
      <div class="row">
        <div class="two columns">&nbsp;</div>
        <!--Empty Div-->

        <article class="four columns game-card">
          <h3>Monster Munch</h3>
          <img class="game-thumbnail" src="/images/monster munch.png" />
          <p>
            Information about the game Monster Munch. Information about
            the game Monster Munch. Information about the game Monster
            Munch.
          </p>
          <button id="game-page-button">Play now!</button>
        </article>

        <article class="four columns game-card">
          <h3>Monster Munch</h3>
          <img class="game-thumbnail" src="/images/monster munch.png" />
          <p>
            Information about the game Monster Munch. Information about
            the game Monster Munch. Information about the game Monster
            Munch.
          </p>
          <button>Play now!</button>
        </article>

        <div class="two columns">&nbsp;</div>
        <!--Empty Div-->
      </div>

      <div class="row">
        <div class="two columns">&nbsp;</div>
        <!--Empty Div-->
        <article class="four columns game-card">
          <h3>Monster Munch</h3>
          <img class="game-thumbnail" src="/images/monster munch.png" />
          <p>
            Information about the game Monster Munch. Information about
            the game Monster Munch. Information about the game Monster
            Munch.
          </p>
          <button>Play now!</button>
        </article>

        <article class="four columns game-card">
          <h3>Monster Munch</h3>
          <img class="game-thumbnail" src="/images/monster munch.png" />
          <p>
            Information about the game Monster Munch. Information about
            the game Monster Munch. Information about the game Monster
            Munch.
          </p>
          <button>Play now!</button>
        </article>

        <div class="two columns">&nbsp;</div>
        <!--Empty Div-->
      </div>
    </div>
  </section>

  <aside>
    <div id="right-ad" class="ad">AD</div>
  </aside>

  </div>`,
  aboutScreen: `<div id="about-page" class="hidden">
  <section class="row page-description">
      <h2>About Us</h2>
      <p>This is the about screen</p>
    </section>
  </div>`,
  gameScreen: `<div id="game-page" class="hidden">
  <div id="game-container">
    <iframe
      src="https://preview.construct.net/#iq4jgdm2"
      width="600"
      height="400"
      scrolling="no"
      noresize="noresize"
    ></iframe>
  </div>
</div>`,
};
