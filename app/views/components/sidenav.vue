<template lang="html">
  <div id="side-nav"> 
    <h3 id="header">Menu</h3>
    <ul>
<<<<<<< HEAD
      <li v-for="link in links" class="menu-link" @click="changeState(link.name)">
        {{link.name}}
=======
      <li v-for="link in links" class="menu-link" @click="changeState(link)">
        {{link}}
>>>>>>> master
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        "Grades",
        "Attendance",
        "Homework",
        "Messages",
        "Roster",
        "Settings"
      ]
    }
  },
  methods: {
    changeState(name) {
      this.currentState = name;
      this.$emit("selection", this.currentState.toLowerCase());

      var menuLinks = document.getElementsByClassName("menu-link");

      for (let i = 0; i < menuLinks.length; i++) {
        var link = menuLinks[i];

        if (link.innerHTML === this.currentState)
          link.classList.add("selected");
        else
          link.classList.remove("selected")
      }
    }
  },
  mounted() {
    this.$nextTick(function() {
      document.getElementsByClassName("menu-link")[0].classList.add("selected");
    });
  }
}

</script>

<style scoped>
.menu-link,
#header {
  font-family: sans-serif;
}

#header {
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

#side-nav {
  background: #24292e;
  display: grid;
  grid-template-rows: 5% 95%;
}

#side-nav ul {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.menu-link:hover {
  cursor: pointer;
}

.menu-link {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 0;
  background: #24292E;
  color: white;
  font-size: 80%;
}

.selected {
  background: #606D7A !important;
}

#side-nav ul li:hover {
  cursor: pointer;
  text-decoration: underline;
}

.selected {
  background: red;
}
</style>
