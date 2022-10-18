/* Copyright (C) 2022, CosmicMind, Inc. <http://cosmicmind.com>. All rights reserved. */

import {
	h,
	VNode,
	SetupContext,
} from 'vue'

export type NavigationDrawerProps = {}

export const NavigationDrawer = (_: NavigationDrawerProps, {
	slots,
}: SetupContext): VNode => h('div', {
	class: 'navigation-drawer',
}, {
	default: () => slots.default?.(),
})

NavigationDrawer.props = [] as string[]

export default NavigationDrawer