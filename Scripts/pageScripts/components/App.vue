<template>
    <div class="container">
        <p>{{ msg }}</p>
        <Hello />
        <Hello />
        <Hello />
        <Hello />
        <Hello />
    </div>
</template>

<script>
    import Hello from './Hello.vue'

    export default {
        name: 'app',
        data() {
            return {
                msg: 'Hello, I am the vue...'
            }
        },
        components: {
            Hello
        }
    }
</script>