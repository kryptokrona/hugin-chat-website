<script>
    import Comments from "./Comments.svelte";

    export let posts
</script>


<div class="container">
    <div class="wrapper">
        {#each posts ?? [] as post, i}
            <div class="card">
                <div class="content">
                    <h2>{post.nickname}</h2>
                    <p>{post.message}</p>
                </div>
                <Comments data={post.replies}/>
            </div>
        {/each}
    </div>
</div>

<style lang="scss">

  .wrapper {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .card {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    background-color: var(--card-background);
    border: 1px solid var(--card-border);
    border-radius: var(--card-border-radius);
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    word-break: break-word;
  }
</style>