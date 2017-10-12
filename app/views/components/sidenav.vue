<template lang="html">
  <div id="side-nav"> 
    <h3 id="header">Menu</h3>
    <ul>
      <li v-for="link in links" class="menu-link" @click="menuItemSelected(link.name)">
        <a :href="link.href">{{link.name}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [{
        href: '#',
        name: 'Grades'
      }, {
        href: '#',
        name: 'Attendance'

      }, {
        href: '#',
        name: 'Homework'

      }, {
        href: '#',
        name: 'Messages'

      }, {
        href: '#',
        name: 'Roster'

      }, {
        href: '#',
        name: 'Settings'
      }]
    }
  },
  methods: {
    menuItemSelected(linkName) {
      console.log(this.$el);
      this.$emit("menuItemSelected", this.$el); //pass the selected item
    }
  }
}
</script>

<style scoped>
#header {
  display: flex;
  align-items: center;
  justify-content: center;
}

#side-nav {
  background: #ccc;
  display: grid;
  grid-template-rows: 5% 95%;
}

#side-nav ul {
  display: flex;
  flex-direction: column;
  height: 100%;
}

#side-nav ul li {
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

#side-nav ul li:nth-child(even) {
  background: mediumslateblue;
}

#side-nav ul li:nth-child(odd) {
  background: cornflowerblue;
}

#side-nav ul li a {
  text-decoration: none;
  color: black;
}

#side-nav ul li a:hover {
  color: purple;
  text-decoration: underline;
}

.selected {
  background: red;
}
</style>
