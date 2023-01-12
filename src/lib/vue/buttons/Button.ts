/**
 * BSD 3-Clause License
 *
 * Copyright (c) 2022, Daniel Jonathan <daniel at cosmicverse dot org>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution.
 *
 * 3. Neither the name of the copyright holder nor the names of its
 *    contributors may be used to endorse or promote products derived from
 *    this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES LOSS OF USE, DATA, OR PROFITS OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

import {
	h,
	VNode,
	PropType,
	defineComponent,
} from 'vue'

export enum ButtonState {
  enabled = 'enabled',
  hovered = 'hovered',
  focused = 'focused',
	pressed = 'pressed',
	disabled = 'disabled',
}

export const Button = defineComponent({
	props: {
		state: {
			type: String as PropType<ButtonState>,
			default: ButtonState.enabled,
		},
	},
	emits: [ 'click' ],
	render(): VNode {
		const {
			state,
		} = this.$props
		return h('button', {
			class: {
				button: true,
				enabled: ButtonState.enabled === state,
				hovered: ButtonState.hovered === state,
				focused: ButtonState.focused === state,
				pressed: ButtonState.pressed === state,
				disabled: ButtonState.disabled === state,
			},
			onClick: (event: PointerEvent) => {
				if (ButtonState.enabled === this.$props.state) {
					this.$el.blur()
					this.$emit('click', event)
				}
			},
		}, {
			default: () => this.$slots.default?.(),
		})
	},
})

export default Button