<template>
    <div class="section" :class="modifierClass">
        <v-container class="section__container" :size="containerSize">
            <h2 class="section__title" v-if="title">{{ title }}</h2>
            <slot></slot>
        </v-container>
    </div>
</template>

<script>

import VContainer from '@/components/base/VContainer';

import { getModifierProps, getModifierComputed } from '@/helpers/vue/modifiers';

export default {

    components: {
        VContainer
    },

    props: {

        title: {
            type: String
        },

        containerSize: {
            type: String,
            default: 'med'
        },

        ...getModifierProps('section--default')
    },

    computed: {

        ...getModifierComputed()
    }
};
</script>
