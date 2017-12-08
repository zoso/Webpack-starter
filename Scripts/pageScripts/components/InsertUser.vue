<template>
    <div>
        <button v-on:click="createUser" type="button">
            Lag ny bruker
        </button>
    </div>
</template>

<script>
    export default {
        methods: {
            createUser: function() {
                console.log("inser user");
                this.$emit('create-user');
            }
        }
    }
</script>
