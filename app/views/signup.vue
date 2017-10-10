<template>
    <div>
         <navbar></navbar>
         <signup-form></signup-form>
    </div>
</template>

<script>
import navbar from "./components/navbar.vue";
import signupForm from "./components/signupForm.vue";

export default {
    data() {
        return {
        }
    },
    components: {
        navbar: navbar,
        signupForm: signupForm
    }
}
</script>