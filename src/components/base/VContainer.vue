<template>
    <div class="container" :class="className">
        <slot/>
    </div>
</template>

<script>

import variables from '@/config/variables';

const { containers } = variables;

export default {
    
    props: {
        size: {
            type: String,
            validator(value) {
                return Object.keys(containers).includes(value);
            }
        }
    },

    computed: {

        className() {

            return this.size ? `container--${this.size}` : '';
        }
    }
}
</script>

<style lang="scss">

$containers: var('containers');

@debug($containers);

.container {

    margin-left: auto;
    margin-right: auto;
}

@each $size, $width in $containers {

    .container--#{$size} {

        max-width: $width;
    }
}

</style>
