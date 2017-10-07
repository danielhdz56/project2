<template>
    <ul>
        <li :key="option" v-for="option in options">{{option}}</li>
    </ul>
</template>

<script>
export default {
    data() {
        return {
            options: [
                "Home",
                "Login",
                "Sign up"
            ]
        }
    }
}
</script>

