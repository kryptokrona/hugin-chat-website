<script>
    import Features from "../components/Features.svelte";
    import Hero from "../components/Hero.svelte";
    import TopPosts from "../components/TopPosts.svelte";

    export let data

</script>

<svelte:head>
    <title>Hugin Messenger</title>
</svelte:head>

<Hero/>
<Features/>
<TopPosts posts={data.topPosts} />
<!--
<Roadmap data={data.cms} />
-->

<style lang="scss">

</style>
