/* Copyright (C) 2022, CosmicMind, Inc. <http://cosmicmind.com>. All rights reserved. */

import {
	h,
	VNode,
	SetupContext,
} from 'vue'

export type RowEndProps = {}

export const RowEnd = (_: RowEndProps, {
	slots,
}: SetupContext): VNode => h('div', {
	class: 'row-end',
}, {
	default: () => slots.default?.(),
})

RowEnd.props = [] as string[]

export default RowEnd