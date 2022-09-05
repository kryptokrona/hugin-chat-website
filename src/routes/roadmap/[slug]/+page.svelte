<script>
    import Footer from "../../../components/Footer.svelte";

    export let data
</script>

<div class="container wrapper">
    <div class="header">
        <div style="display: flex; flex-direction: column; gap: 1rem">
            <h1>{data.title}</h1>
            <h4>{data.description}</h4>
        </div>
        <div>
            <p style="opacity: 60%">{data.state}</p>
            <div class="progress">
                <div class:rgb={data.state === 'Released'}
                     class:planned={data.state === 'Planned'}
                     class:planning={data.state === 'Planning'}
                     class:building={data.state ===  'Building'}
                     class:beta={data.state === 'Beta'}
                     class:testing={data.state === 'Testing'}
                     class:progress-animation={data.state !== 'Released'}
                     style="width: {data.progress}%"></div>
            </div>
        </div>
    </div>
    {@html data.body}
</div>
<aFooter/>

<style lang="scss">

  .wrapper {
    margin-top: 100px;
  }

  .header {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    min-height: 200px;
    justify-content: space-between;
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