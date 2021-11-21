<template>
    <main class="page">
      <section class="content home">
        <h1>Hi!</h1>
      </section>
      <section class="content aboutme">
        <article class='snippet'>
            <h2>
                <img src="../../public/assets/img/gear.svg" alt="gear">
                Settings
            </h2>
            <div class='content settingsSnippet'>
              <input v-on:click="clearLikes()" type="submit" value="Clear all like counters">
            </div>
        </article>
       <snippet-component v-for="post in posts" v-bind:key="post.id" v-bind="post" />
      </section>
    </main>
</template>

<script>
import '../assets/styles/home.scss'
import { defineComponent, onMounted } from "vue";
import SnippetComponent from '@/components/SnippetComponent.vue';

export default defineComponent({
  components: { SnippetComponent },
  name: "HomeView",
  computed: {
    posts() {
      return this.$store.state.posts
    }
  },
  methods: {
      clearLikes() {
          this.$store.commit('clearLikes')
      }
  }
});
</script>
<style scoped>
.settingsSnippet {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>