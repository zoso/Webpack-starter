<template>
    <div class="user">
        <span v-show="!edit">{{ post.name }}</span><span v-show="!edit">({{ post.username }})</span>
        <input type="text" v-show="edit" v-model="post.name" />
        <input type="text" v-show="edit" v-model="post.username" />
        <address>
            <div v-for="(value, key) in post.address">
                {{key}}: <span v-show="!edit">{{ value }}</span><input type="text" v-show="edit" v-model="post.address[key][value]" />
            </div>
        </address>
        <button v-on:click="doDelete(post.id)" type="button">
            Slett bruker
        </button>
        <button v-on:click="editUser" type="button">
            Edit bruker
        </button>
        <button v-on:click="saveUser(post.id)" type="button">
            Save bruker
        </button>
    </div>
</template>

<script>
    export default {
        props: ['post'],
        data() {
            return {
                edit: false
            }
        },
        methods: {
            doDelete: function(id) {
                this.$emit('delete-user', id);
            },
            editUser: function() {
                this.edit = !this.edit;
            },
            saveUser: function(id) {
                const updated = {
                    name: this.post.name,
                    username: this.post.username
                }
                this.$emit('change-user', id, updated)
            }
        }
    }
</script>