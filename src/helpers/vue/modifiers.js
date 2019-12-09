
export function getModifierProps(defaultValue) {

    return {

        modifier: {
            type: [String, Array],
            default: defaultValue
        }
    };
}

export function getModifierComputed() {

    return {

        modifierClass() {

            if (Array.isArray(this.modifier)) {

                return this.modifier.join(' ');
            }

            return this.modifier;
        }
    };
}
