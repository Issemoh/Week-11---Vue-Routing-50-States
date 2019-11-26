<template>
    <div class="Footer">
        
    <div class="m-2">
        <span class="p-3">
            <router-link to="/">Home</router-link>
        </span>

        <span class="p-3">
            <router-Link to="/about">About this site</router-Link>
        </span>
    </div>

    <p class="text-right p-2">Header image by
        <a href="https://unplash.com/photos/KpBXAOs80YI">@chrislawton via Unplash.</a>
        <br>
        <a href="https://icons8.com/icon/43632/map">Map icon by icons8</a>
    </p>

    </div>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style>
.credit {
    font-size: 0.1em;
    font-style: italic;
}
</style>