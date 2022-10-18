/* Copyright (C) 2022, CosmicMind, Inc. <http://cosmicmind.com>. All rights reserved. */

import {
	h,
	VNode,
	SetupContext,
} from 'vue'

export type OrderedListProps = {}

export const OrderedList = (_: OrderedListProps, {
	slots,
}: SetupContext): VNode => h('ol', {
	class: 'ordered-list',
}, {
	default: () => slots.default?.(),
})

OrderedList.props = [] as string[]

export default OrderedList