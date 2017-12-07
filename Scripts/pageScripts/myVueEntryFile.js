import Vue from 'vue'
import App from './components/App.vue'
import Axios from 'axios'

const vm = new Vue({
    el: '#vueApp',
    template: '<App v-bind:posts="posts"></App>',
    data: {
        posts: []
    },
    components: { App },
    created() {
        this.fetchData();
    },
    methods: {
        fetchData() {
            Axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
                this.posts = res.data;
            });
        }
    }
});