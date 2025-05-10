<div class="section">
    <div class="container">
        <div class="hero">
            <h1>The new standard for communicating privately.</h1>
            <h2>Encrypted. Decentralized. Open-sourced.</h2>
            <div class="links">
              <a class="button" href="https://github.com/kryptokrona/hugin-desktop/releases/latest" target="_blank">Download</a>
              <a class="store" href="https://play.google.com/store/apps/details?id=com.hugin" target="_blank"><img src="/google.svg" /></a>
              <a class="store" href="https://apps.apple.com/en/app/hugin-messenger/id6741133299" target="_blank"><img src="/apple.svg" /></a>
            </div>
        </div>
    </div>
</div>

<style lang="scss">

/* styles */

  .hero {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    flex-direction: column;
    width: 100%;
    max-width: 800px;
    height: 600px;
    margin: 0 auto;
    padding: 0 10px;

    a.store img {
      width: 200px;
      &:hover {
        filter: brightness(150%);
        transition: 200ms ease-in-out;
      }
    }

    .links {
      display: flex;
      flex-direction: row;
      gap: 1rem; // adds spacing between items
      flex-wrap: wrap; // optional: allows wrapping on smaller screens
      justify-content: center; // optional: center-aligns the row
      align-items: center;
    }

    a.button {
      display: flex;
      justify-content: center;
      padding: 15px 15px;
      min-width: 200px;
      height: 59.26px;
      border-radius: 6px;
      font-family: Montserrat, sans-serif;
      font-weight: 600;
      font-size: 1.25rem;
      background-color: rgba(84, 71, 69, 0.10);
      border: 1px solid rgba(255,255,255,0.7);
      color: #fff;
      cursor: pointer;
      transition: 200ms ease-in-out;
      text-decoration: none;
      margin-top: -3px;

      &:hover {
        background-color: rgba(84, 71, 69, 0.30);
      }
    }

    h1 {
      font-size: 60px;
      font-weight: 600;
      text-align: center;
      background-color: #f3ec78;
      background-image: linear-gradient(45deg, #FF9384, #ffffff);
      background-size: 100%;
      -webkit-background-clip: text;
      -moz-background-clip: text;
      -webkit-text-fill-color: transparent;
      -moz-text-fill-color: transparent;
    }

    h2 {
      font-weight: 600;
      opacity: 90%;
      font-size: 1.75rem;
      text-align: center;
    }


    @media screen and (max-width: 768px) {
      height: 550px;
      h1 {
        font-size: 3rem;
      }
      h2 {
        font-size: 1.5;
      }
    }

    @media screen and (max-width: 568px) {
      height: 500px;
      h1 {
        font-size: 2rem;
      }

      h2 {
        font-size: 1rem;
      }
    }
  }
</style>
