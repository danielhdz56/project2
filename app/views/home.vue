<template>
    <div>
        <navbar></navbar>
        <h1>{{text}}</h1>
        <sidenav></sidenav>
    </div>
</template>

<script>
import navbar from './components/navbar.vue';
import sidenav from './components/sidenav.vue';

export default {
    data: function() {
        return {
        }
    },
    components: {
        navbar,
        sidenav
    }
}
</script>