<template>
    <div>
        Hello
        <navbar></navbar>
    </div>
</template>

<script>
// const path = require("path");
// import nav from path.join(__dirname, "components/navbar");

import navbar from "./components/navbar.vue";

export default {
    data() {
        return {
        }
    },
    components: {
        navbar: navbar
    }
}
</script>

<style>

</style>
