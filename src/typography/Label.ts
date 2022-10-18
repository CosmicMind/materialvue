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

export type LabelProps = {
	size: TypographySize
}

export const Label = ({
	size,
}: LabelProps, {
	slots,
}: SetupContext): VNode => h('span', {
	class: `typography ${TypographyStyle.label} ${size}`,
}, {
	default: () => slots.default?.(),
})

Label.props = [
	'size'
]

export default Label