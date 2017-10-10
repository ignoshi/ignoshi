import Vue from 'vue'
import Vuex from 'vuex'
import TagService from '@/services/Tag.service'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    tags: []
  },
  mutations: {
    setTags (state, tags) {
      state.tags = tags
    },
    addTag (state, tag) {
      state.tags.push(tag)
    }
  },
  actions: {
    fetchTags (context) {
      TagService.list().then((res) => {
        context.commit('setTags', res.body)
      })
    }
  }
})

export default store
