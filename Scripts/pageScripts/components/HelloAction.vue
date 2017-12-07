<template>
    <div>
        <p>{{ item.title }} status: {{ item.done }}</p>
        <button type="button" v-on:click="changeItem(item)" v-if="item.done === false">
            Change status
        </button>
    </div>
</template>

<script>
    export default {
        props: ['item'],
        methods: {
            changeItem(item) {
                this.$emit('set-item', item);
            }
        }
    }
</script>