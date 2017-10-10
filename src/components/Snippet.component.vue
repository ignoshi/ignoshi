<template>
  <div class="snippet">
    <p class="body-2" @click="select" style="cursor: pointer">{{ snippet.title }}</p>
    <small class="text-muted">{{ snippet.updated_at }}</small>
    <template v-for="t in snippet.tags">
      <v-chip label small>{{ t.title }}</v-chip>
    </template>
    <v-divider></v-divider>
  </div>
</template>

<script>
export default {
  name: 'snippet',
  props: ['snippet'],
  methods: {
    select () {
      this.$emit('click')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.snippet {
  padding-top: 12px;
  padding-bottom: 8px;
}
.snippet h6 {
  padding-left: 3px;
}
.chip {
  margin-top: -6px;
  font-size: 11px;
  padding-left: 6px;
  padding-right: 6px;
  margin-left: 6px;
}
</style>
