<script>
import Roadmap from "../../components/Roadmap.svelte";

export let data
</script>

<div class="section">
    <div class="container xl">
        <div class="header">
            <h1>Roadmap</h1>
            <h2>This project is open source and maintained by the Community. You can
                for example make changes to this site, suggest awesome new features,
                or help us squash bugs.</h2>
            <h2>Not a developer? No worries, there's tons of
                things to do!</h2>
        </div>
        <Roadmap data={data}/>
    </div>
</div>

<style lang="scss">

  .section {
    margin-bottom: 100px;
  }

  .xl {
    max-width: 1400px;
  }

    .header {
      height: 600px;
      display: flex;
      gap: 1rem;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      h1 {
        font-size: 60px;
        font-weight: 600;
        text-align: center;
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
        max-width: 850px;
        font-size: 1.75rem;
        text-align: center;
      }


      @media screen and (max-width: 768px){
        h1 {
          font-size: 3rem;
        }
        h2 {
          font-size: 1.5;
        }
      }

      @media screen and (max-width: 568px){
        h1 {
          font-size: 2rem;
        }

        h2 {
          font-size: 1rem;
        }
      }
    }
</style>