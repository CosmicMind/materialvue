/* Copyright (C) 2022, CosmicMind, Inc. <http://cosmicmind.com>. All rights reserved. */

import {
	h,
	VNode,
	SetupContext,
} from 'vue'

export type RowCenterProps = {}

export const RowCenter = (_: RowCenterProps, {
	slots,
}: SetupContext): VNode => h('div', {
	class: 'row-center',
}, {
	default: () => slots.default?.(),
})

RowCenter.props = [] as string[]

export default RowCenter