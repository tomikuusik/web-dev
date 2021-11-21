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
      const objIndex = posts.findIndex((x) => {return x.id == postId})
      const objLikes = Number(posts[objIndex].likes)
      const newObj = posts[objIndex]
      newObj.likes += 1
      posts.splice(objIndex, 1, newObj)
     console.log(posts)
     console.log('incemented')
    }
  },
  actions: {},
  modules: {},
});
