<template>
<article class='snippet'>
    <h2>
        <img :src="img_src" :alt="img_alt">
        {{ title }}
    </h2>
    <div class='content'>{{ content }}</div>
    <div class='info'>
        <p class='date'>{{ date }}</p>
        <p>{{ likes }}</p>
        <button v-on:click="like()" ><img src="assets/img/heart.svg" alt="heart"/></button>
    </div>
</article>
</template>

<script>
import '../assets/styles/snippet.scss'
export default({
    props: {
        id: Number,
        title: String,
        img_src: String,
        img_alt: String,
        date: String,
        likes: Number,
        content: String
    },
    methods: {
        like() {
            this.$store.commit('like',this.id)
        }
    }
})
</script>