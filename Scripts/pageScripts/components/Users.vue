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
                Axios.post('//localhost:3000/users/', {
                    name: 'Freddy',
                    username: 'Flintstone',
                    email: 'kdkdkd@rffe.com'
                })
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
            },
            deleteUser: function(id) {
                console.log("delete ", id);
            },
            changeUser: function() {
                
            }
        }
    }
</script>
