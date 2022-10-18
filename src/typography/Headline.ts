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

export type HeadlineProps = {
	size: TypographySize
}

export const Headline = ({
	size,
}: HeadlineProps, {
	slots,
}: SetupContext): VNode => h('span', {
	class: `typography ${TypographyStyle.headline} ${size}`,
}, {
	default: () => slots.default?.(),
})

Headline.props = [
	'size'
]

export default Headline