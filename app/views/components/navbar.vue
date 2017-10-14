<template>
    <div id="main-nav">
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
                    href: '/',
                    name: 'Home'
                },
                {
                    href: 'login',
                    name: 'Login'
                },
                {
                    href: 'signup',
                    name: 'Signup'
                }]
        }
    }
}
</script>

<style scoped>
#main-nav {
    display: grid;
    grid-template-columns: auto 200px;
    grid-template-areas: ". nav";
    background:#24292e;
    padding: 5px 0;
    margin-bottom: 5px;
}

.main-nav {
    grid-area: nav;
    display: flex;
    justify-content: space-around;
}

.main-nav li a {
    text-decoration: none;
    color: #c0cbcd;
    font-weight: 600;
    font-family: sans-serif;
}

.main-nav li a:hover {
    color: #fff;
}
</style>