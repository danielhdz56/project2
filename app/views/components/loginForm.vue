<template>
  <div id="login-container">

    <div id="login-form">
      <h2 id="header">Sign in</h2>

      <div id="username-container">
        <label for="username">Username</label><br>
        <input type="text" id="username">
      </div>

      <div id="password-container">
        <label for="password">Password</label><br>
        <input type="password" id="password">
      </div>

      <input type="button" value="Go">
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
body {
  background: url("../assets/pictures/backdrop.jpeg");
}

label,
button,
#header {
  font-family: Arial, Helvetica, sans-serif;
  color: white;
}

input {
  border: none;
  margin: 5px 0;
  border-radius: 2px;
  padding: 5px 2px;
  width: 100%;
}

input[type=button] {
  grid-area: btn;
  background: #bfb;
  color: darkslategray;
  font-size: x-large;
}

#login-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: fixed;
}

#login-form {
  background: rgba(41,45,50, 0.25);
  border-radius: 3px;
  padding: 30px;
  width: 50%;
  min-width: 600px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-template-areas: "head head user user" "head head pass pass" "head head btn btn";
}

#header {
  display: flex;
  align-items: center;
  justify-content: center;
  grid-area: head;
  font-size: x-large;
  border-right: 2px solid white;
  margin-right: 30px;
  font-weight: 600;
  height: 240px;
}

#username-container {
  grid-area: user;
  width: 100%
}

#password-container {
  grid-area: pass;
  width: 100%;
}
</style>