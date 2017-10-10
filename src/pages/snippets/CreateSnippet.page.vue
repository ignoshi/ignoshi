<template>
  <div id="create-snippet-page">
    <div class="container">
      <form id="create-snippet-form" v-on:submit.prevent>
        <input name="title" placeholder="title" v-model="snippet.title" />
        <input name="body" placeholder="body" v-model="snippet.body" />
        <multiselect v-model="snippet.tags" :options="$store.state.tags" label="title" trackBy="id" :multiple="true"></multiselect>
        <button v-on:click="submit">Create</button>
      </form>
    </div>
  </div>
</template>

<script>
import SnippetService from '@/services/Snippet.service'

export default {
  name: 'create-snippet-page',
  data () {
    return {
      snippet: {}
    }
  },
  created () {
    this.tags = this.$store.state.tags
  },
  methods: {
    submit () {
      SnippetService.create(this.snippet).then(() => {
        this.$router.push('/snippets')
      }, (err) => {
        console.log(err)
      })
    }
  }
}
</script>