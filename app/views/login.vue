<template>
    <div>
        <navbar></navbar>
        <login-form></login-form>
    </div>
</template>

<script>
import navbar from "./components/navbar.vue";
import loginForm from "./components/loginForm.vue";

export default {
    data() {
        return {
        }
    },
    components: {
        navbar: navbar,
        loginForm: loginForm
    }
}
</script>

<style>

</style>

