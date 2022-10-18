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

export type DisplayProps = {
	size: TypographySize
}

export const Display = ({
	size,
}: DisplayProps, {
	slots,
}: SetupContext): VNode => h('span', {
	class: `typography ${TypographyStyle.display} ${size}`,
}, {
	default: () => slots.default?.(),
})

Display.props = [
	'size'
]

export default Display