import { vModelCheckbox, VueElement } from "@vue/runtime-dom";
import { createStore } from "vuex";
import posts from "../assets/json/posts.json"

export default createStore({
  state: {
    theme: 'default',
    posts: posts
  },
  mutations: {
    setTheme(state, theme) {
      state.theme = theme;
    },
    like(state, postId) {
      const objIndex = state.posts.findIndex((x) => {return x.id == postId})
      const objLikes = Number(state.posts[objIndex].likes)
      const newObj = state.posts[objIndex]
      newObj.likes += 1
      state.posts.splice(objIndex, 1, newObj)
    },
    clearLikes(state) {
      for (let i = 0; i < posts.length; i++) {
        const newObj = state.posts[i]
        newObj.likes = 0
        state.posts.splice(i, 1, newObj)
      }
    }
  },
  actions: {},
  modules: {},
});
