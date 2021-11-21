<template>
    <main class="page">
      <section class="content home">
        <h1>Hi!</h1>
      </section>
      <section class="content aboutme">
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
  }
});
</script>
