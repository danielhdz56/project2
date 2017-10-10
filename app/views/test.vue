<template>
    <div>
        <h1>{{text}}</h1>
        <sidenav></sidenav>
    </div>
</template>

<script>
import sidenav from './components/sidenav.vue';

export default {
    data: function() {
        return {
        }
    },
    components: {
        sidenav: sidenav
    }
}
</script>