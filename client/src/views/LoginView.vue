<template>
    <main>
        <section class="content login">
            <h1>login</h1>
            <input type="text" placeholder="username" />
            <input type="password" placeholder="password" />
        </section>
    </main>
</template>

<script lang="ts">
import store from '@/store'
import '../assets/styles/login.scss'
export default({
    mounted() {
        store.commit('setTheme','dark')
    },
    unmounted() {
        store.commit('setTheme','default')
    }
})
</script>