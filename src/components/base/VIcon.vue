<template>
    <div class="icon" v-html="svg"></div>
</template>

<script>
export default {

    data() {
        return {
            svg: ''
        };
    },

    props: {
        name: {
            type: String,
            required: true
        }
    },

    created() {
        this.svg = require(`@/assets/icons/${this.name}.svg`);
    }
}
</script>

<style lang="scss">

    .icon {

        display: inline-block;
        width: 1em;

        svg {
            display: block;
        }
    }
</style>
