<script>
    import {onMount} from "svelte";
    import ArrowLink from "./icons/ArrowLink.svelte";

    export let data

    let roadmapItems = data.data
    let filterNav;

    const filter = state => {
        roadmapItems = data.data.filter(item => {
            return item.state === state
        })
    }

    onMount(() => {
        filterNav = data.data.map(item => {
            return item.state
        })
        filterNav = filterNav.reduce((a, b) => {
            if (a.indexOf(b) < 0) a.push(b);
            return a;
        }, []);
        console.log(filterNav)
    })

</script>

<div class="container roadmap">
    <div class="filter-menu">
        <button on:click={() => roadmapItems = data.data}>All</button>
        {#each filterNav ?? [] as button}
            <button on:click={() => filter(button)}>{button}</button>
        {/each}
    </div>
    <div class="grid">
        {#each roadmapItems ?? [] as item, i}
            <a href="/roadmap/{item.slug}" data-sveltekit-prefetch class="card layered-shadow">
                <div class="content">
                    <h2>{item.title}</h2>
                    <ArrowLink/>
                </div>
                <div>
                    <p style="opacity: 60%">{item.state}</p>
                    <div class="progress">
                        <div class:rgb={item.state === 'Released'}
                             class:planned={item.state === 'Planned'}
                             class:planning={item.state === 'Planning'}
                             class:building={item.state ===  'Building'}
                             class:beta={item.state === 'Beta'}
                             class:testing={item.state === 'Testing'}
                             class:progress-animation={item.state !== 'Released'}
                             style="width: {item.progress}%"></div>
                    </div>
                </div>
            </a>
        {/each}
    </div>
</div>

<style lang="scss">

  .roadmap {
    max-width: 1400px;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .grid {
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(12, minmax(0, 1fr));
  }

  .filter-menu {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;

    button {
      border: 1px solid var(--card-border);
      background-color: var(--card-background);
      color: var(--text-color);
      padding: 10px 20px;
      border-radius: 5px;
      cursor: pointer;
      min-width: 100px;

      &:hover {
        background-color: #fcfcfc50;
      }
    }
  }

  .card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1.5rem;
    grid-column: span 4/ span 4;
    min-height: 200px;
    background-color: var(--card-background);
    border: 1px solid var(--card-border);
    border-radius: var(--card-border-radius);
    text-decoration: none;
    transition: 100ms ease-in-out;

    &:hover {
      background-color: var(--card-border);
    }

    @media screen and (max-width: 1200px) {
      grid-column: span 6 / span 6;
    }

    @media screen and (max-width: 568px) {
      grid-column: span 12 / span 12;
    }
  }

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .progress {
    margin-top: 1rem;
    width: 100%;
    height: 10px;
    background-color: #353535;
    border-radius: 20px;

    div {
      background-color: #5ff281;
      height: inherit;
      border-radius: inherit;
    }

    .planned, .planning  {
      background-color: #f25f5f;;
    }

    .building {
      background-color: #f2a65f;;
    }

    .testing {
      background-color: #f2dc5f;;
    }

    .beta {
      background-color: #5ff281;;
    }
  }

</style>