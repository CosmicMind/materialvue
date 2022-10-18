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

export type TitleProps = {
	size: TypographySize
}

export const Title = ({
	size,
}: TitleProps, {
	slots,
}: SetupContext): VNode => h('span', {
	class: `typography ${TypographyStyle.title} ${size}`,
}, {
	default: () => slots.default?.(),
})

Title.props = [
	'size'
]

export default Title