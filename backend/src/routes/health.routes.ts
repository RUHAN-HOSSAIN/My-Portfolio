import { Hono } from 'hono';
import type { AppEnv } from '../types/env';

const health = new Hono<AppEnv>();

health.get('/', (c) => c.json({ status: 'ok', time: new Date().toISOString() }));

export default health;
