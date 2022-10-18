/* Copyright (C) 2022, CosmicMind, Inc. <http://cosmicmind.com>. All rights reserved. */

import {
	h,
	VNode,
	SetupContext,
} from 'vue'

export type RowProps = {}

export const Row = (_: RowProps, {
	slots,
}: SetupContext): VNode => h('div', {
	class: 'row',
}, {
	default: () => slots.default?.(),
})

Row.props = [] as string[]

export default Row