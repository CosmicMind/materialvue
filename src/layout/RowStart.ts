/* Copyright (C) 2022, CosmicMind, Inc. <http://cosmicmind.com>. All rights reserved. */

import {
	h,
	VNode,
	SetupContext,
} from 'vue'

export type RowStartProps = {}

export const RowStart = (_: RowStartProps, {
	slots,
}: SetupContext): VNode => h('div', {
	class: 'row-start',
}, {
	default: () => slots.default?.(),
})

RowStart.props = [] as string[]

export default RowStart