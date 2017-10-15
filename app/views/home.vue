<template>
    <div>
        <navbar></navbar>
        <div id="main-grid">
            <sidenav v-on:selection="changeContent"></sidenav>
            <component :is="content" class="content"></component>
        </div>
    </div>
</template>

<script>
import navbar from './components/navbar.vue';
import sidenav from './components/sidenav.vue';
import grades from "./components/grades.vue"
import attendance from './components/attendance.vue';

export default {
    data() {
        return {
            content: "",
            students: "studet"
        }
    },
    components: {
        navbar,
        sidenav,
        grades,
        attendance
    },
    mounted() {
        this.$nextTick(function() {
            axios.get("/api/users")
                .then(function(res) {
                    this.students = res.data;
                    console.log(res.data);
                });
        });
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
#main-grid {
    display: grid;
    grid-template-columns: minmax(100px, 8vw) 92vw;
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
