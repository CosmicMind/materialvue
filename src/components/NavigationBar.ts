/* Copyright (C) 2022, CosmicMind, Inc. <http://cosmicmind.com>. All rights reserved. */

import {
	h,
	VNode,
	SetupContext,
} from 'vue'

export type NavigationBarProps = {}

export const NavigationBar = (_: NavigationBarProps, {
	slots,
}: SetupContext): VNode => h('div', {
	class: 'navigation-bar',
}, {
	default: () => slots.default?.(),
})

NavigationBar.props = [] as string[]

export default NavigationBar