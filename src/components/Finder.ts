/* Copyright (C) 2022, CosmicMind, Inc. <http://cosmicmind.com>. All rights reserved. */

import {
	h,
	VNode,
	SetupContext,
} from 'vue'

export type FinderProps = {}

export const Finder = (_: FinderProps, {
	slots,
}: SetupContext): VNode => h('div', {
	class: 'finder',
}, {
	default: () => slots.default?.(),
})

Finder.props = [] as string[]

export default Finder