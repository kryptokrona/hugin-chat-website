<script>
    import {Moon} from "svelte-loading-spinners";

    export let data = []
    console.log('Replies', data)
    let open = false

    const getComments = async (input) => {
        let replies = []
        for (const reply of input) {
            const res = await fetch(`https://api.hugin.chat/api/v1/posts/${reply}`)
            const json = await res.json()
            replies.push(json)
        }
        console.log(replies)
        return replies
    }

</script>

<div class="comments-button" on:click={() => open = !open}>
    <h5>{data.length} comments</h5>
</div>
<div class="comments">
    {#if open}
        {#await getComments(data)}
            <Moon size="32" unit="px" color="var(--text-color"/>
        {:then comments}
            {#each comments as comment}
                <div class="comment-card">
                    <div>
                        <h4>{comment.nickname}</h4>
                    </div>
                    <p>{comment.message}</p>
                </div>
            {/each}
        {/await}
    {/if}
</div>

<style lang="scss">
  .comments-button {
    display: flex;
    max-width: 140px;
    justify-content: center;
    align-items: center;
    padding: 4px 15px;
    background-color: #5ff28120;
    border: 1px solid #5ff281;
    border-radius: 20px;
    cursor: pointer;
  }

  .comments {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  .comment-card {
    background-color: var(--card-border);
    padding: 1rem;
    border-radius: var(--card-border-radius);
    width: 100%;
  }
</style>

