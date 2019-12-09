<template>
    <a :href="href" class="link" :target="target" :rel="rel">
        <v-icon :name="icon" class="link__icon" v-if="hasIconBefore"/>
        <span class="link__label">
            <slot>{{ label }}</slot>
        </span>
        <v-icon :name="icon" class="link__icon" v-if="hasIconAfter"/>
    </a>
</template>

<script>

// import '@/styles/sass/base/_link.scss';

import VIcon from '@/components/base/VIcon';

export default {
    components: {
        VIcon
    },
    props: {
        href: {
            type: String,
            default: 'javascript:void(0)'
        },
        label: {
            type: String
        },
        icon: {
            type: String
        },
        iconPos: {
            type: String,
            default: 'before'
        },
        isExternal: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        target() {
            return this.isExternal ? '_blank' : '_self';
        },
        rel() {
            return this.isExternal ? 'noopener noreferrer' : '';
        },
        hasIconBefore() {
            return this.icon && this.iconPos == 'before';
        },
        hasIconAfter() {
            return this.icon && this.iconPos == 'after';
        }
    }
};
</script>
