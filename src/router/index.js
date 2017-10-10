import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import TagsPage from '@/pages/tags/Tags.page'
import CreateTagPage from '@/pages/tags/CreateTag.page'
import SnippetsPage from '@/pages/snippets/Snippets.page'
import CreateSnippetPage from '@/pages/snippets/CreateSnippet.page'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/tags',
      name: 'tags',
      component: TagsPage
    },
    {
      path: '/tags/create',
      name: 'create-tag',
      component: CreateTagPage
    },
    {
      path: '/snippets',
      name: 'snippets',
      component: SnippetsPage
    },
    {
      path: '/snippets/create',
      name: 'create-snippet',
      component: CreateSnippetPage
    }
  ]
})
