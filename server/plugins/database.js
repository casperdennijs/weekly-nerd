// Initialize database on server startup
import { initializeDb } from '../database/db';
import { seedDatabase } from '../database/seed';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DB_PATH = path.join(__dirname, '../..', 'db.sqlite');

export default defineNitroPlugin(async () => {
  console.log('Checking SQLite database...');
  try {
    // Initialize the database (create tables)
    const db = await initializeDb();
    await db.close();
    console.log('Database initialized successfully');
    
    // Seed the database with sample data if it doesn't already have data
    await seedDatabase();
  } catch (error) {
    console.error('Error initializing database:', error);
  }
});
