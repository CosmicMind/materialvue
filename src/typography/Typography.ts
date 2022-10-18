/* Copyright (C) 2022, CosmicMind, Inc. <http://cosmicmind.com>. All rights reserved. */

import {
	h,
	VNode,
	SetupContext,
} from 'vue'

export enum TypographyStyle {
  display = 'display',
  headline = 'headline',
  title = 'title',
	label = 'label',
	body = 'body',
}

export enum TypographySize {
  large = 'large',
  medium = 'medium',
  small = 'small',
}

export type TypographyProps = {
	style: TypographyStyle,
	size: TypographySize
}

export const Typography = ({
	style,
	size,
}: TypographyProps, {
	slots,
}: SetupContext): VNode => h('span', {
	class: `typography ${style} ${size}`,
}, {
	default: () => slots.default?.(),
})

Typography.props = [
	'style',
	'size'
]

export default Typography
