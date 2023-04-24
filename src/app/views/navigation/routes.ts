/**
 * BSD 3-Clause License
 *
 * Copyright © 2023, Daniel Jonathan <daniel at cosmicmind dot com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution.
 *
 * 3. Neither the name of the copyright holder nor the names of its
 *    contributors may be used to endorse or promote products derived from
 *    this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES LOSS OF USE, DATA, OR PROFITS OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

import {
	RouteRecordRaw,
} from 'vue-router'

import AppNavigationRail from '@/app/views/app/components/AppNavigationRail.vue'
import AppNavigationDrawer from '@/app/views/app/components/AppNavigationDrawer.vue'
import AppTopAppBar from '@/app/views/app/components/AppTopAppBar.vue'
import AppFinder from '@/app/views/app/components/AppFinder.vue'
import AppModal from '@/app/views/app/components/AppModal.vue'

import NavigationMain from '@/app/views/navigation/components/NavigationMain.vue'

const routes: RouteRecordRaw[] = [
	{
		name: 'navigation',
		path: '/navigation',
		components: {
			'navigation-rail': AppNavigationRail,
			'navigation-drawer': AppNavigationDrawer,
			'top-app-bar': AppTopAppBar,
			main: NavigationMain,
			finder: AppFinder,
			modal: AppModal,
		},
		props: {
			'navigation-rail': true,
			'navigation-drawer': true,
			'top-app-bar': true,
			main: true,
			finder: true,
			modal: true,
		},
	}
]

export default routes