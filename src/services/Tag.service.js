import Vue from 'vue'

export default {
  list: () => Vue.http.get('http://localhost:9010/api/tags/'),
  create: data => Vue.http.post('http://localhost:9010/api/tags/', data)
}
