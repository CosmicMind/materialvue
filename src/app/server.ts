/**
 * BSD 3-Clause License
 *
 * Copyright (c) 2022, Daniel Jonathan <daniel at cosmicmind dot com>
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

import http from 'http'
import Koa from 'koa'
import koaBodyParser from 'koa-bodyparser'
import Router from '@koa/router'
import serve from 'koa-static'

import { logger } from '@cosmicmind/foundationjs'

import routes from '@/app/routes'

const app = new Koa()
app.proxy = true

app.use(koaBodyParser())

app.use(serve('dist/public'))

const router = new Router()
app.use(router.routes()).use(router.allowedMethods())
routes(router)

try {
	const server = http.createServer(app.callback())
	server.listen(SERVER_PORT)

	const shutdown = (): void => {
		server.close((error?: Error) => {
			if (error) {
				logger.error(error)
				process.exitCode = 1
			}
			process.exit()
		})
	}

	if ('test' === import.meta.env.MODE) {
		setTimeout(shutdown, 1000)
	}

	process.on('SIGINT', () => {
		logger.info('Got SIGINT (aka ctrl-c in docker). Graceful shutdown ', new Date().toISOString())
		shutdown()
	})

	process.on('SIGTERM', () => {
		logger.info('Got SIGTERM (docker container stop). Graceful shutdown ', new Date().toISOString())
		shutdown()
	})
}
catch (error) {
	process.exit(1)
}
