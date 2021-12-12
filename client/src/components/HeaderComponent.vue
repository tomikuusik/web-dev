<template>
  <header>
    <router-link to="/" id='title'>{{ title }}</router-link>
    <div id='nav-links-container'>
    <router-link id='nav-link' v-for="link in this.links" :key="link.name" :to=link.target>{{ link.name }}</router-link>
    </div>
  </header>
</template>

<script lang="ts">
import '../assets/styles/header.scss'
export default({
  data(){
    return {
      title: "Tomi Kuusik",
      links: [{
        name : 'About Me',
        target : '/about'
      },
      {
        name : 'Contact',
        target : '/contact'
      },
      {
        name : 'Login',
        target : '/login'

      }]
    }
  }
})
</script>