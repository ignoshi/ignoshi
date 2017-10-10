<template>
  <div id="tags-page">
    <div class="container">
      <router-link class="btn btn-outline-primary" :to="{path: '/tags/create'}">Create</router-link>
      <div v-for="t in $store.state.tags">
        <h4>{{ t.title }}</h4>
        <p class="text-muted">{{ t.body }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tags-page',
  data () {
    return {
    }
  }
}
</script>