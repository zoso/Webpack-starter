<template>
    <div class="step">
        <h3>{{ steps.name }}</h3>
        {{ steps.description }}
        <ul class="calc-list">
            <li v-for="item in steps.options.values" :item.sync="item" :key="item.index">
                <BigRadio v-bind:item="item" />
            </li>
        </ul>
    </div>
</template>

<script>
import BigRadio from './BigRadio.vue'

export default {
    name: 'calcStep',
    props: ['steps'],
    components: { BigRadio }

}
</script>
