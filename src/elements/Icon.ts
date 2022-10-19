/* Copyright (C) 2022, CosmicMind, Inc. <http://cosmicmind.com>. All rights reserved. */

import {
	h,
	VNode,
	SetupContext,
} from 'vue'

export type IconProps = {}

export const Icon = (_: IconProps, {
	slots,
}: SetupContext): VNode => h('span', {
	class: 'icon',
}, {
	default: () => slots.default?.(),
})

Icon.props = [] as string[]

export default Icon