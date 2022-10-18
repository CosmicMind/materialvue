/* Copyright (C) 2022, CosmicMind, Inc. <http://cosmicmind.com>. All rights reserved. */

import {
	h,
	VNode,
	SetupContext,
} from 'vue'

export type ListItemProps = {}

export const ListItem = (_: ListItemProps, {
	slots,
}: SetupContext): VNode => h('li', {
	class: 'list-item',
}, {
	default: () => slots.default?.(),
})

ListItem.props = [] as string[]

export default ListItem