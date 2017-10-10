<template>
  <div id="create-tag-page">
    <div class="container">
      <form id="create-tag-form" v-on:submit.prevent>
        <input name="title" placeholder="title" v-model="tag.title" />
        <input name="body" placeholder="body" v-model="tag.body" />
        <button v-on:click="submit">Create</button>
      </form>
    </div>
  </div>
</template>

<script>
import TagService from '@/services/Tag.service'

export default {
  name: 'create-tag-page',
  data () {
    return {
      tag: {}
    }
  },
  methods: {
    submit () {
      TagService.create(this.tag).then(() => {
        this.$store.commit('addTag', this.stag)
        this.$router.push('/tags')
      }, (err) => {
        console.log(err)
      })
    }
  }
}
</script>