<script>
    import Roadmap from "../components/Roadmap.svelte";
    import Features from "../components/Features.svelte";
    import Hero from "../components/Hero.svelte";

    export let data

</script>

<svelte:head>
    <title>Hugin Messenger</title>
</svelte:head>

<Hero/>
<Features/>
<!--
<Roadmap data={data}/>
-->

<style lang="scss">

</style>
