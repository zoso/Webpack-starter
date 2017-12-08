import Vue from 'vue'
import App from './components/App.vue'
import Axios from 'axios'

const vm = new Vue({
    el: '#vueApp',
    template: '<App v-bind:posts="posts" v-on:update-user="fetchData"></App>',
    data: {
        posts: []
    },
    components: { App },
    created() {
        this.fetchData();
    },
    methods: {
        fetchData: function() {
            console.log("fetch data");
            this.posts = [];
            Axios.get('//localhost:3000/users').then(res => {
                console.log("fetching ", res.data.length);
                this.posts = res.data;
            });
        }
    }
});
