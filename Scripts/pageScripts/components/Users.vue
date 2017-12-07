<template>
    <div class="users-container">
        <p>{{ posts.length }}</p>
        <div class="users">
            <UserItem v-for="post in posts" :post.sync="post" :key="post.id"></UserItem>
        </div>
    </div>
</template>

<script>
    import UserItem from './UserItem.vue';

    export default {
        props: ['posts'],
        components: { UserItem }
    }
</script>
