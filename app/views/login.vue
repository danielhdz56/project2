<template>
    <div>
        Hello
        <nav-component></nav-component>
    </div>
</template>

<script>
// const path = require("path");
// import nav from path.join(__dirname, "components/navbar");

import nav from "./components/navbar";

export default {
    data() {
        return {
        }
    },
    components: {
        navComponent: nav
    }
}
</script>

<style>

</style>
