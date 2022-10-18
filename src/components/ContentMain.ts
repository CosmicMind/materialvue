/* Copyright (C) 2022, CosmicMind, Inc. <http://cosmicmind.com>. All rights reserved. */

import {
	h,
	VNode,
	SetupContext,
} from 'vue'

export type ContentMainProps = {}

export const ContentMain = (_: ContentMainProps, {
	slots,
}: SetupContext): VNode => h('main', {
	class: 'main',
}, {
	default: () => slots.default?.(),
})

ContentMain.props = [] as string[]

export default ContentMain