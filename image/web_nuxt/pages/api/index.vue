<template>
    <p>
        {{ data.value }}
    </p>
</template>

<script>
export default {
    async asyncData({app}) {
        const data = await app.$axios.$get('http://api')
        return {
            data
        }
    }
}
</script>
