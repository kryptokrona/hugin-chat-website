<script>

import {goto} from "$app/navigation";
</script>

<nav>
    <div class="container">
        <div style="display: flex; align-items: center; gap: 1rem; cursor:pointer;" on:click={() => goto("/")}>
            <img height="36px" width="36px" src="/hugin-icon.png" alt="">
            <h1>Hugin</h1>
        </div>
        <div class="navigation">
            <a href="/roadmap" data-sveltekit-prefetch>Roadmap</a>
            <a href="/whitepaper" data-sveltekit-prefetch>Whitepaper</a>
            <a href="https://kryptokrona.org" target="_blank">Kryptokrona</a>
        </div>
    </div>
</nav>

<style lang="scss">

  nav {
    border-bottom: 1px solid var(--border-color);
    position: fixed;
    top: 0;
    background: transparent;
    backdrop-filter: blur(10px);
    width: 100%;
    z-index: 999;
  }

  .container {
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .navigation {
    display: flex;
    gap: 1rem;
    align-items: center;

    a {
      color: var(--text-color);
      text-decoration: none;
      opacity: 70%;
      transition: 100ms ease-in-out;

    &:hover {
      opacity: 100%;
    };
    }
  }
</style>