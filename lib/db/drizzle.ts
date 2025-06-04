import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './schema';
import dotenv from 'dotenv';

dotenv.config();

if (!process.env.POSTGRES_URL) {
  throw new Error('POSTGRES_URL environment variable is not set');
}

// Configure the PostgreSQL client for Supabase with serverless optimizations
const client = postgres(process.env.POSTGRES_URL, {
  ssl: 'require',
  max: 1, // Limit connections for serverless
  idle_timeout: 20,
  connect_timeout: 10,
  prepare: false, // Disable prepared statements for better compatibility
});

export const db = drizzle(client, { schema });
