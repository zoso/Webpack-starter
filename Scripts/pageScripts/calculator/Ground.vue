<template>
    <div>
        <select v-model="value">
            <option v-for="zip in zips" :zip.sync="zip" :key="zip.id" :value="zip.foundation">{{ zip.zip }}</option>
        </select>
        <p>value: {{ value }} </p>
  </div>
</template>

<script>
import Axios from 'axios'
import zipfile from './zip.json'

export default {
    name: 'Ground',
    data() {
        return {
            zips: [],
            value: ''
        }
    },
    created() {
        this.getData();
    },
    methods: {
        getData: function() {
            this.zips = zipfile;
            /* console.log("----- ZIPS ");
            Axios.get('https://localhost:44341/api/calculatorxml/getgaragezipcodelist')
            .then(res => {
                console.log("ZIP", res);
            })  */
        }
    }
}
</script>
