<template>
    <div>
        <navbar></navbar>
        <div id="main-grid">
            <sidenav></sidenav>
            <grades class="content"></grades>
        </div>
    </div>
</template>

<script>
import navbar from './components/navbar.vue';
import sidenav from './components/sidenav.vue';
import grades from './components/grades.vue';

export default {
    data: function() {
        return {
        }
    },
    components: {
        navbar,
        sidenav,
        grades
    }
}
</script>

<style scoped>
    #main-grid {
        display: grid;
        grid-template-columns: 15vw 85vw;
        grid-template-areas: "sidenav content";
        height: 100%;
        position: fixed;
    }

    #side-nav {
        grid-area: sidenav;
    }

    .content {
        grid-area: content;
        background: #999;
    }
</style>
