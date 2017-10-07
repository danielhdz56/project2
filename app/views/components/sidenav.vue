<template lang="html">
  <div id="sidenav"> 
    <h3 class="sidenav-heading">Menu</h3>
    <ul>
      <li v-for="link in links">
        <a :href="link.href" :class="link.classes">{{link.name}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      links: [{
        href: '#',
        classes: 'sidenav-link',
        name: 'Grades'
      }, {
        href: '#',
        classes: 'sidenav-link',
        name: 'Attendance'

      }, {
        href: '#',
        classes: 'sidenav-link',
        name: 'Homework'

      }, {
        href: '#',
        classes: 'sidenav-link',
        name: 'Messages'

      }, {
        href: '#',
        classes: 'sidenav-link',
        name: 'Roster'

      }, {
        href: '#',
        classes: 'sidenav-link',
        name: 'Settings'
      }]
    }
  }
}
</script>