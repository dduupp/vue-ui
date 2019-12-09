<template>
    <div class="form-item" :class="modifierClasses">
        <label :for="id" class="form-item__label" v-if="!isCheckboxOrRadio">{{ label }}</label>
        <div class="form-item__element" v-if="isSelect">
            <v-icon icon="arrow-down" class="form-item__icon"/>
            <select class="form-item__field" :name="name" :id="id" :required="isRequired" v-model="myValue" v-bind="$attrs" v-on="$listeners"></select>
        </div>
        <div class="form-item__element" v-else-if="isTextarea">
            <textarea class="form-item__field" :name="name" :id="id" :required="isRequired" v-model="myValue" v-bind="$attrs" v-on="$listeners"></textarea>
        </div>
        <div class="form-item__element" v-else>
            <input class="form-item__field" :type="inputType" :name="name" :id="id" :required="isRequired" v-model="myValue" v-bind="$attrs" v-on="$listeners">
            <label :for="id" class="form-item__label" v-if="isCheckboxOrRadio">{{ label }}</label>
        </div>
        <div class="form-item__error" v-if="showValidation && validationError">
            {{ validationError }}
        </div>
    </div>
</template>

<script>

import Validator from '@/config/validator';

export default {

    props: {

        label: {
            type: String
        },

        name: {
            type: String
        },

        type: {
            type: String,
            default: 'text'
        },

        validationRules: {
            type: String
        }
    },

    data() {

        return {
            myValue: this.value,
            validationError: null,
            isValid: null,
            showValidation: true
        }
    },

    computed: {

        modifierClasses() {

            let classes = [
                `form-item--${this.type}`
            ];

            if (!this.isValid) {

                classes.push('form-item--invalid');
            }

            return classes.join(' ');
        },

        inputType() {

            return this.type;
        },

        isSelect() {

            return this.type === 'select';
        },

        isTextarea() {

            return this.type === 'textarea';
        },

        isCheckboxOrRadio() {

            return ['checkbox', 'radio'].includes(this.type);
        },

        isRequired() {

            return this.required || this.validationProps.includes('required');
        },

        id() {

            return `form-${this.name}-${this._uid}`;
        },

        validationProps() {

            return this.validationRules.split('|');
        }
    },

    watch: {

        myValue: function () {

            this.validate();
        }
    },

    methods: {
        
        validate() {

            const { name, myValue, validationRules } = this;

            const validator = new Validator({ [name]: myValue }, { [name] : validationRules });

            this.validationError = '';
            this.isValid = validator.passes();

            if (!this.isValid && validator.errors.has(name)) {

                this.validationError = validator.errors.first(name);
            }

            // this.showValidation = true;
        }
    }
}
</script>
