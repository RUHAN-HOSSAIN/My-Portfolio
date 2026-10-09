import { cors } from 'hono/cors'

const ALLOWED_ORIGINS = [
  'http://localhost:5173',
  'https://ruhanhossain.pages.dev',
]

export const corsMiddleware = cors({
  origin: (origin) => (ALLOWED_ORIGINS.includes(origin) ? origin : null),
  allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowHeaders: ['Content-Type', 'Authorization'],
})