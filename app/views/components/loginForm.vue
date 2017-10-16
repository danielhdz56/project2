<template>
  <div id="login-container">

    <div id="login-form">
      
      <div id="usernamecontainer">
        <label for="username"></label><br>
        <input type="text" id="username">
      </div>

      <div id="password-container">
        <label for="password"></label>
        <input type="password" id="password">
      </div>

      <button id="sumbit">Submit</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  }
}
</script>

<style>
#login-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: fixed;
}

#login-form {
  background: #24292e;
  border-radius: 3px;
  width: 70%;
  display: grid
}
</style>