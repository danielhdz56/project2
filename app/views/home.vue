<template>
    <div>
        <navbar></navbar>
        <div id="main-grid">
            <sidenav v-on:selection="changeContent"></sidenav>
            <grades v-show="content === 'Grades'" class="content"></grades>
            <attendance v-show="content === 'Attendance'" class="content"></attendance>
        </div>
    </div>
</template>

<script>
import navbar from './components/navbar.vue';
import sidenav from './components/sidenav.vue';
import grades from "./components/grades.vue"
import attendance from './components/attendance.vue';

export default {
    data: function() {
        return {
            content: ""
        }
    },
    components: {
        navbar,
        sidenav,
        grades,
        attendance
    },
    methods: {
        changeContent(contentName) {
            console.log(`content changed to ${contentName}`);
            this.content = contentName
        }
    },
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
