<template>
    <div class="users-container">
        <p>{{ posts.length }}</p>
        <div class="users">
            <UserItem v-on:delete-user="deleteUser" v-on:change-user="changeUser" v-for="post in posts" :post.sync="post" :key="post.id"></UserItem>
        </div>
        <div class="test">
            <InsertUser v-on:create-user="createUser"></InsertUser>
        </div>
    </div>
</template>

<script>
    import UserItem from './UserItem.vue';
    import InsertUser from './InsertUser.vue';
    import Axios from 'axios'
    export default {
        props: ['posts'],
        components: { UserItem, InsertUser },
        methods: {
            createUser: function() {
                const that = this;
                Axios.post('//localhost:3000/users/', {
                    name: 'Freddy Fingerx',
                    username: 'Flintstonez',
                    email: 'kdfeffekdkd@rffe.com'
                })
                .then(function (response) {
                    console.log(response);
                    that.$emit('update-users');
                })
                .catch(function (error) {
                    console.log(error);
                });
                
            },
            deleteUser: function(id) {
                console.log("delete ", id);
                const that = this;
                Axios.delete(`//localhost:3000/users/${id}`, {
                    
                }).then(function(res) {
                    console.log("deleted", res);
                    that.$emit('update-users');
                })
                
            },
            changeUser: function(id, data) {
                console.log("change ", id);
                const that = this;
                Axios.put(`//localhost:3000/users/${id}`, {
                    name: data.name,
                    username: data.username
                }).then(function(res) {
                    console.log("changed", res);
                    that.$emit('update-users');
                })
            }
        }
    }
</script>
