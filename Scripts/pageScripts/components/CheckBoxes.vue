<template>
    <div>
        <h2>Checkboxes</h2>
        <input type="checkbox" id="item1" value="Item 1" v-model="checkedNames">
        <label for="item1">Item 1</label>
        <input type="checkbox" id="item2" value="Item 2" v-model="checkedNames">
        <label for="item2">Item 2</label>
        <input type="checkbox" id="item3" value="Item 3" v-model="checkedNames">
        <label for="item3">Item 3</label>
        <input type="checkbox" id="item4" value="Item 4" v-model="checkedNames">
        <label for="item4">Item 4</label>
    </div>
</template>

<script>
    export default {
        props: ['checkedNames'],
        name: 'Checkboxes',
    }
</script>