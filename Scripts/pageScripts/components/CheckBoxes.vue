<template>
    <div>
        <h2>Checkboxes</h2>
        <input type="checkbox" id="item1" value="Item 1" v-model="checkedArr" v-on:change="arrChanged">
        <label for="item1">Item 1</label>
        <input type="checkbox" id="item2" value="Item 2" v-model="checkedArr" v-on:change="arrChanged">
        <label for="item2">Item 2</label>
        <input type="checkbox" id="item3" value="Item 3" v-model="checkedArr" v-on:change="arrChanged">
        <label for="item3">Item 3</label>
        <input type="checkbox" id="item4" value="Item 4" v-model="checkedArr" v-on:change="arrChanged">
        <label for="item4">Item 4</label>
        <div v-if="checkedArr.length > 0">Checked names: {{ checkedArr }} {{ checkedNames.length }}</div>
    </div>
</template>

<script>
    export default {
        props: ['checkedNames'],
        name: 'Checkboxes',
        data() {
            return {
                checkedArr: this.checkedNames
            }
        },
        methods: {
            arrChanged() {
                //this.checkedNames = this.checkedArr;
                this.$emit('update-checkedarr', this.checkedArr);
            }
        }
    }
</script>