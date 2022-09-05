<script>
    import {onMount} from "svelte";

    onMount(() => {
        let latest_mac;
        let latest_win;
        let latest_lin;
        fetch("https://api.github.com/repos/kryptokrona/hugin-messenger/releases/latest")
            .then((response) => response.json())
            .then((data) => {
                let files = data.assets;
                for (file in files) {
                    if (files[file].name.slice(files[file].name.length - 7) === "mac.zip") {
                        latest_mac = files[file].browser_download_url;
                    } else if (files[file].name.slice(files[file].name.length - 3) === "exe") {
                        latest_win = files[file].browser_download_url;
                    } else if (files[file].name.slice(files[file].name.length - 8) === "AppImage") {
                        latest_lin = files[file].browser_download_url;
                    }
                    document.getElementById('latest_mac').href = latest_mac;
                    document.getElementById('latest_win').href = latest_win;
                    document.getElementById('latest_lin').href = latest_lin;
                }
                console.log(latest_mac, latest_lin, latest_win)
            });
    })
</script>

<div>

</div>

<style lang="scss">

</style>