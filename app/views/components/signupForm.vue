<template>
  <div id="signup-container">

    <div id="signup-form">
      <h2 id="header">Sign up</h2>

      <div id="firstname-container">
        <label for="firstname">First Name</label><br>
        <input type="text" id="firstname">
      </div>

      <div id="lastname-container">
        <label for="lastname">Last Name</label><br>
        <input type="text" id="lastname">
      </div>

      <div id="pass-container">
        <label for="pass">Password</label><br>
        <input type="password" id="pass">
      </div>

      <div id="cpass-container">
        <label for="cpass">Confirm Password</label><br>
        <input type="password" id="cpass">
      </div>

      <div id="addr-container">
        <label for="addr">Address</label><br>
        <input type="text" id="addr">
      </div>

      <div id="zip-container">
        <label for="zip">Zip</label><br>
        <input type="text" id="zip">
      </div>

      <div id="phone-container">
        <label for="phone">Phone Number</label><br>
        <input type="text" id="phone">
      </div>

      <div id="email-container">
        <label for="email">Email</label><br>
        <input type="text" id="email">
      </div>

      <input type="button" value="Submit">
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
  background: url("../assets/pictures/backdrop.jpeg")
}

label,
button,
#header {
  font-family: Arial, Helvetica, sans-serif;
  color: white;
  margin-bottom: 10px;
  padding: 0 3px;
}

input {
  border: none;
  margin: 5px 1px;
  border-radius: 2px;
  padding: 5px 2px;
  width: 100%;
}

input[type=button] {
  grid-area: btn;
  background: #bfb;
  color: darkslategray;
  font-size: x-large;
  grid-row: 7;
  grid-column: 8/16;
}

#header {
  text-align: center;
  font-size: x-large;
  font-weight: 600;
  border-bottom: 2px solid white;
  padding-bottom: 10px;
  grid-row: 1;
  grid-column: span 21;
}

#signup-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: fixed;
}

#signup-form {
  background: rgba(41, 45, 50, 0.25);
  border-radius: 3px;
  padding: 30px;
  width: 50%;
  min-width: 600px;
  display: grid;
  grid-template-columns: repeat(21, 1fr);
  grid-template-rows: repeat(7, 1fr);
}

#firstname-container {
  grid-column: 1/11;
  grid-row: 2;
}

#lastname-container {
  grid-column: 12/22;
  grid-row: 2;
}

#pass-container {
  grid-column: 1/11;
  grid-row: 3;
}

#cpass-container {
  grid-column: 12/22;
  grid-row: 3;
}

#addr-container {
  grid-column: 1/16;
  grid-row: 4;
}

#zip-container {
  grid-column: 17/22;
  grid-row: 4;
}

#phone-container {
  grid-column: span 21;
  grid-row: 5;
}


#email-container {
  grid-column: span 21;
  grid-row: 6;
}
</style>