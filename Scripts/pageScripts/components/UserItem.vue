<template>
    <div class="user">
        {{ post.name }}({{ post.username }})
        <address>
            <div v-for="(value, key) in post.address">
                {{key}}: {{ value }}
            </div>
        </address>
    </div>
</template>

<script>
    export default {
        props: ['post']
    }
</script>