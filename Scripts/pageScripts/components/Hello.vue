<template>
    <div>
        <h2>Hello</h2>
        <p>Items done: {{ items.filter(item => { return item.done === true}).length}}</p>
        <p>Items pending: {{ items.filter(item => { return item.done === false}).length}}</p>
        <div class="users">
            <HelloAction class="user" v-on:set-item="setItem" v-for="item in items" :item.sync="item" :key="item.id"></HelloAction>
        </div>
    </div>
</template>

<script>
    import HelloAction from './HelloAction.vue';

    export default {
        props: ['items'],
        components: { HelloAction },
        methods: {
            setItem(item) {
                item.done = !item.done;
            }
        }
    }
</script>