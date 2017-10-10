<template>
  <v-layout row wrap id="tags-page">
    <v-flex xs4>
      <span class="body-2">Snippets</span>
      <div class="text-xs-right" align-right>
        <v-btn align-right @click="create" round outline color="primary">+</v-btn>
      </div>
      <v-divider></v-divider>
      <template v-for="(s, i) in snippets">
        <snippet :snippet="s" @click="selectSnippet(i)"></snippet>
      </template>
    </v-flex>

    <v-flex xs8>
      <template v-if="currentSnippet">
        <h5>{{ currentSnippet.title }}</h5>
        <v-switch label="Edit Mode" v-model="editMode"></v-switch>
        <template v-for="t in currentSnippet.tags">
          <v-chip label small>{{ t.title }}</v-chip>
        </template>
        <v-divider></v-divider>
        <vue-markdown v-if="!editMode" :source="currentSnippet.body">{{ currentSnippet.body }}</vue-markdown>
        <textarea v-else v-model="currentSnippet.body"></textarea>
      </template>
    </v-flex>
  </v-layout>
</template>

<script>
import SnippetService from '@/services/Snippet.service'
import Snippet from '@/components/Snippet.component'
import VueMarkdown from 'vue-markdown'

export default {
  name: 'snippets-page',
  components: {Snippet, VueMarkdown},
  data () {
    return {
      editMode: false,
      currentIndex: 0,
      snippets: []
    }
  },
  computed: {
    currentSnippet () {
      if (this.snippets.length > 0) {
        return this.snippets[this.currentIndex]
      }
      return null
    }
  },
  mounted () {
    SnippetService.list().then((res) => {
      this.snippets = res.body
      this.currentIndex = 0
    })
  },
  methods: {
    selectSnippet (i) {
      this.editMode = false
      this.currentIndex = i
    },
    switchMode () {
      this.editMode = !this.editMode
    },
    create () {
      this.snippets.push({
        title: 'title',
        body: 'placeholder'
      })
      this.selectSnippet(this.snippets.length - 1)
      this.editMode = true
    }
  }
}
</script>