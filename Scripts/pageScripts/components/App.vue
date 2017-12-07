<template>
    <div class="theApp">
        <div class="container">
            <h2>{{ msg }} - total clicks {{ total }}</h2>
            <Counter v-on:increment="incrementTotal" v-bind:total="total"></Counter>
            <Counter v-on:increment="incrementTotal" v-bind:total="total"></Counter>
            <Counter v-on:increment="incrementTotal" v-bind:total="total"></Counter>
        </div>
        <div class="container">
            <h2>Users</h2>
            <Users v-bind:posts="posts"></Users>
        </div>
        <div class="container">
            <CheckBoxes v-bind:checkedNames="checkedNames" v-on:update-checkedarr="updateCheckedArr" />
        </div>
        <div class="container">
            <Hello v-bind:items="items"></Hello>
        </div>
    </div>
</template>

<script>
    import Hello from './Hello.vue';
    import Counter from './Counter.vue';
    import CheckBoxes from './CheckBoxes.vue';
    import Users from './Users.vue';

    export default {
        name: 'app',
        props: ['posts'],
        data() {
            return {
                total: 0,
                msg: 'The App',
                checkedNames: [],
                items: [{
                    id: 0,
                    title: 'item 1',
                    done: false
                },{
                    id: 1,
                    title: 'item 2',
                    done: true
                },{
                    id: 2,
                    title: 'item 3',
                    done: false
                },{
                    id: 3,
                    title: 'item 4',
                    done: false
                },{
                    id: 4,
                    title: 'item 5',
                    done: true
                },{
                    id: 5,
                    title: 'item 6',
                    done: true
                },{
                    id: 6,
                    title: 'item 7',
                    done: false
                }]
            }
        },
        methods: {
            incrementTotal: function() {
                this.total += 1;
            },
            updateCheckedArr(arr) {
                this.checkedNames = arr;
            }
        },
        components: {
            Hello,
            Counter,
            CheckBoxes,
            Users
        }
    }
</script>