<template>
  <header-component/>
  <router-view />
  <footer-component :class=footer_theme />
</template>


<script lang="ts">
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import router from './router'
import store from './store'

export default({
  data() {
    return {
      title: 'Tomi Kuusik',
    }
  },
  computed: {
    footer_theme() {
      if (store.state.theme != 'default') {
        return store.state.theme
      }
      else {
        return ''
      }
    }
  },
  components: {
    HeaderComponent,
    FooterComponent
    }
})
</script>