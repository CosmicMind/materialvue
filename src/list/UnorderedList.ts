/* Copyright (C) 2022, CosmicMind, Inc. <http://cosmicmind.com>. All rights reserved. */

import {
	h,
	VNode,
	SetupContext,
} from 'vue'

export type UnorderedListProps = {}

export const UnorderedList = (_: UnorderedListProps, {
	slots,
}: SetupContext): VNode => h('ul', {
	class: 'unordered-list',
}, {
	default: () => slots.default?.(),
})

UnorderedList.props = [] as string[]

export default UnorderedList