<script>
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
<Roadmap data={data.cms} />
-->

<style lang="scss">

</style>
