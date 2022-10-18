/* Copyright (C) 2022, CosmicMind, Inc. <http://cosmicmind.com>. All rights reserved. */

import {
	h,
	VNode,
	SetupContext,
} from 'vue'

export type SidebarProps = {}

export const Sidebar = (_: SidebarProps, {
	slots,
}: SetupContext): VNode => h('div', {
	class: 'sidebar',
}, {
	default: () => slots.default?.(),
})

Sidebar.props = [] as string[]

export default Sidebar