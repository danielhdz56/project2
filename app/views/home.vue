<template>
    <div>
        <navbar></navbar>
        <div id="main-grid">
            <sidenav v-on:selection="changeContent"></sidenav>
            <component :is="content" :grades="test" class="content"></component>
        </div>
    </div>
</template>

<script>
import navbar from './components/navbar.vue';
import sidenav from './components/sidenav.vue';
import grades from "./components/grades.vue"
import attendance from './components/attendance.vue';
import roster from "./components/roster.vue"

export default {
    data() {
        return {
            content: "",
            students: "student",
            test: "123"
        }
    },
    components: {
        navbar,
        sidenav,
        grades,
        attendance,
        roster
    },
    methods: {
        changeContent(contentName) {
            console.log(`content changed to ${contentName}`);
            this.content = contentName;
            console.log(this.students);
        }
    },
}
</script>

<style scoped>
body {
    background: url("https://www.toptal.com/designers/subtlepatterns/patterns/zwartevilt.png");
}

#main-grid {
    display: grid;
    grid-template-columns: minmax(100px, 8vw) minmax(auto, 92vw);
    grid-template-areas: "sidenav content";
    height: 100%;
    position: fixed;
}

#side-nav {
    grid-area: sidenav;
}

.content {
    grid-area: content;
    margin: 0.5% auto;
    width: 99%;
}



/* Table stuff*/

table,
th,
td {
    border-collapse: collapse;
    border: 1px solid #24292e;
    background: #fff;
    font-family: sans-serif;
}

th {
    text-align: center;
    vertical-align: middle;
    padding: 5px;
    background: #606d7a;
    color: white;
}

td {
    text-align: left;
    vertical-align: middle;
    padding: 15px;
}
</style>
