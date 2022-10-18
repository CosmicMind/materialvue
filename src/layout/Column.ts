/* Copyright (C) 2022, CosmicMind, Inc. <http://cosmicmind.com>. All rights reserved. */

import {
	h,
	VNode,
	SetupContext,
} from 'vue'

export type ColumnProps = {}

export const Column = (_: ColumnProps, {
	slots,
}: SetupContext): VNode => h('div', {
	class: 'column',
}, {
	default: () => slots.default?.(),
})

Column.props = [] as string[]

export default Column