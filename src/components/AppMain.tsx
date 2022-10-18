/* Copyright (C) 2022, CosmicMind, Inc. <http://cosmicmind.com>. All rights reserved. */

import {
	VNode,
	Suspense,
} from 'vue'

import Content from './Content'

export const AppMain = (): VNode =>
	<div class="app">
		<div class="frame">
			<Suspense
				v-slots={{
					default: () =>
						<>
							<router-view name="sidebar" />
							<router-view name="navigation-drawer" />
							<Content>
								<router-view name="navigation-bar" />
								<router-view name="toolbar" />
								<router-view name="main" />
							</Content>
							<router-view name="finder" />
							<router-view name="modal" />
						</>
					,
					fallback: () => <p>Loading...</p>,
				}}
			/>
		</div>
	</div>

export default AppMain
