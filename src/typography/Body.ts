/* Copyright (C) 2022, CosmicMind, Inc. <http://cosmicmind.com>. All rights reserved. */

import {
	h,
	VNode,
	SetupContext,
} from 'vue'

import {
	TypographyStyle,
	TypographySize,
} from '@/typography/Typography'

export type BodyProps = {
	size: TypographySize
}

export const Body = ({
	size,
}: BodyProps, {
	slots,
}: SetupContext): VNode => h('span', {
	class: `typography ${TypographyStyle.body} ${size}`,
}, {
	default: () => slots.default?.(),
})

Body.props = [
	'size'
]

export default Body