/* Copyright (C) 2022, CosmicMind, Inc. <http://cosmicmind.com>. All rights reserved. */

import {
	h,
	VNode,
	SetupContext,
} from 'vue'

export type ContentProps = {}

export const Content = (_: ContentProps, {
	slots,
}: SetupContext): VNode => h('div', {
	class: 'content',
}, {
	default: () => slots.default?.(),
})

Content.props = [] as string[]

export default Content