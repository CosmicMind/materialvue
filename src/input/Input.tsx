/* Copyright (C) 2022, CosmicMind, Inc. <http://cosmicmind.com>. All rights reserved. */

import {
	h,
	VNode,
	defineComponent,
} from 'vue'

export const Input = defineComponent({
	props: {
		modelValue: {
			type: [ String, Number ],
			required: true,
		},
	},
	emits: [ 'update:modelValue' ],
	render(): VNode {
		return h('input', {
			modelValue: this.modelValue,
			'onUpdate:modelValue': (value: string | number) => this.$emit('update:modelValue', value),
		})
	},
})

export default Input