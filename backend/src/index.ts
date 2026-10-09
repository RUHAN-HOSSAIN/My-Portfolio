import { Hono } from 'hono'
import type { AppEnv } from './types/env'
import { corsMiddleware } from './middleware/cors'
import health from './routes/health.routes'

const app = new Hono<AppEnv>()

app.use('*', corsMiddleware)
app.route('/health', health)

app.notFound((c) => c.json({ error: 'Not found' }, 404))
app.onError((err, c) => {
  console.error(err)
  return c.json({ error: 'Internal server error' }, 500)
})

export default app