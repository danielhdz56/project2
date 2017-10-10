<template>
    <ul>
        <li v-for="option in options">
            <a :href="option.href" class="nav-link">{{option.name}}</a>
        </li>
    </ul>
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

<style>

</style>


