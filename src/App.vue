<template>
  <!--<div id="app">-->
    <!--<router-link :to="{path: '/tags'}">Tags</router-link>
    <router-link :to="{path: '/snippets'}">Snippets</router-link>
    <router-view></router-view>-->
    <v-app id="app">
  
      <v-navigation-drawer width="200" id="drawer" persistent clipepd v-model="drawer" app>
        <h4 class="mt-4">Ignoshi</h4>
        <b class="mt-4">Tags</b>
        <v-list dense>
          <v-list-tile row @click="" style="cursor: pointer">
               <v-list-tile-content>
                <v-list-tile-title>
                  All
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          <template v-for="t in $store.state.tags">
            <v-list-tile row @click="" style="cursor: pointer">
               <v-list-tile-content>
                <v-list-tile-title>
                  {{ t.title }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
        </v-list>
      </v-navigation-drawer>

      <!-- <v-toolbar class="blue darken-3" fixed clipped-left app>
          <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
          <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
          Ignoshi
        </v-toolbar-title>
      </v-toolbar> -->

      <main>
        <v-content>
          <v-container fluid fill-height>
            <router-view></router-view>
          </v-container>
        </v-content>
      </main>

      <v-footer app></v-footer>
    </v-app>
  <!--</div>-->
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      drawer: true
    }
  }
}
</script>

<style>
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
#drawer {
  padding-left: 24px;
}
</style>
