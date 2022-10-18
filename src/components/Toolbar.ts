/* Copyright (C) 2022, CosmicMind, Inc. <http://cosmicmind.com>. All rights reserved. */

import {
	h,
	VNode,
	SetupContext,
} from 'vue'

export type ToolbarProps = {}

export const Toolbar = (_: ToolbarProps, {
	slots,
}: SetupContext): VNode => h('div', {
	class: 'toolbar',
}, {
	default: () => slots.default?.(),
})

Toolbar.props = [] as string[]

export default Toolbar