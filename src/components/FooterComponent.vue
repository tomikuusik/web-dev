<template>
    <footer>
        <a v-for="link in links" :key='link.name' :href=link.href >
            <i :class=link.icon></i>
            {{ link.name }}
        </a>
        <router-link to="/contact">contact</router-link>
    </footer>
</template>
<script lang='ts'>
import '../assets/styles/footer.scss'
export default {
    data() {
        return {
            links: [
                {name: 'tomikuusik@gmail.com', href: 'mailto:tomikuusik@gmail.com', icon:'fas fa-paper-plane'},
                {name: 'github', href: 'tomikuusik', icon:'fab fa-github'}
            ]
        }
    }
}
</script>