import Vue from 'vue'
import App from './calculator/App.vue'
import Axios from 'axios'

const vm = new Vue({
    el: '#calcApp',
    name: 'CalculatorApp',
    template: '<App v-bind:posts="posts"></App>',
    data: {
        posts: {},
        selectedData: {}
    },
    components: { App },
    created() {
        this.fetchData();
    },
    methods: {
        fetchData: function() {
            console.log("fetch data");
            this.posts.calculator = {};
            // http://internalservicestest.optimera.no/api/calculatortransform/garage?type=HEIMDAL
            Axios.get('http://internalservicestest.optimera.no/api/calculatortransform/garage?type=').then(res => {
                console.log("fetching ", res.data);
                this.posts = res.data;
            });
        }
    }
});
