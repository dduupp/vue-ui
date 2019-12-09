<template>
    <div id="app">
        <v-section title="Zie ne keer iere" container-size="lrg">
            <v-icon name="plus"/>
            <v-form-item name="first_name" validation-rules="required"/>
        </v-section>
    </div>
</template>

<script>

import components from '@/components/index.js';

export default {
    name: 'app',
    components: components
};
</script>
