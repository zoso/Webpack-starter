<template>
    <div>
        <p>{{ item.title }} status: {{ item.done }}</p>
        <button type="button" v-on:click="changeItem(item)" v-bind:disabled="(item.done)">
            Change status
        </button>
    </div>
</template>

<script>
    export default {
        props: ['item'],
        computed: {
            isDisabled() {
                return this.item.done ? "" : "";
            }
        },
        methods: {
            changeItem(item) {
                this.$emit('set-item', item);
            }
        }
    }
</script>