<template>
    <div id="grid">
        <ul class="main-nav">
            <li v-for="option in options">
                <a :href="option.href" class="nav-link">{{option.name}}</a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            options: [
                {
                    href: '#',
                    name: 'Home'
                },
                {
                    href: '#',
                    name: 'Login'
                },
                {
                    href: '#',
                    name: 'Signup'
                }]
        }
    }
}
</script>

<style scoped>
#grid {
    display: grid;
    grid-template-columns: 70vw 30vw;
    grid-template-areas: ". nav";
    background: #eee;
    padding: 5px 0;
}

.main-nav {
    grid-area: nav;
    display: flex;
    justify-content: space-around;
}

.main-nav li a {
    text-decoration: none;
    color: black;
}

.main-nav li a:hover {
    text-decoration: underline;
    color: red;
}
</style>