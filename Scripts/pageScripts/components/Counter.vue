<template>
    <div>
        <p>Total: {{ total }}</p>
        <button type="button" v-on:click="incrementCounter">{{ counter }}</button>
    </div>
</template>

<script>
    export default {
        name: 'counter',
        props: ['total'],
        data: function() {
            return {
                counter: 0
            }
        },
        methods: {
            incrementCounter: function() {
                this.counter += 1;
                this.$emit('increment');
            }
        }
    } 
</script>