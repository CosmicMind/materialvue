/* Copyright (C) 2022, CosmicMind, Inc. <http://cosmicmind.com>. All rights reserved. */

import {
	h,
	VNode,
	SetupContext,
} from 'vue'

export type ModalProps = {}

export const Modal = (_: ModalProps, {
	slots,
}: SetupContext): VNode => h('div', {
	class: 'modal',
}, {
	default: () => slots.default?.(),
})

Modal.props = [] as string[]

export default Modal