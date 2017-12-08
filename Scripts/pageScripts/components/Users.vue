<template>
    <div class="users-container">
        <p>{{ posts.length }}</p>
        <div class="users">
            <UserItem v-on:delete-user="deleteUser" v-for="post in posts" :post.sync="post" :key="post.id"></UserItem>
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
                this.$emit('update-users');
            },
            changeUser: function() {

            }
        }
    }
</script>
