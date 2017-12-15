<template>
    <div class="step bigRadio">
        <div class="item img">
            <img v-bind:src="imgSrc()" />
        </div>
        <div class="item">
            <h4>{{ item.name }}</h4>
            {{ item.description }}
        </div>
    </div>
</template>

<script>
// https://localhost:44341/sysglobalassets/kalkulatorer2/ny-garasje/bilder/garage/
export default {
    name: 'BigRadio',
    props: [ 'item' ],
    /* data() {
        return {
            imgStr: '<p>hello</p>',
        };
    } */
    methods: {
        /* imgSrc: function(img) {
            var str = `<img src="https://localhost:44341/sysglobalassets/kalkulatorer2/ny-garasje/bilder/garage/${img} />`;
            return str;
        } */
        imgSrc: function() {
            var str = `https://localhost:44341/sysglobalassets/kalkulatorer2/ny-garasje/bilder/${this.item.image}`;
            return str;
        }
    }
}
</script>
