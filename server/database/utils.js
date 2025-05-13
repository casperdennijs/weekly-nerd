// Database utility functions
import { getDbConnection } from './db.js';
import { seedDatabase } from './seed.js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DB_PATH = path.join(__dirname, '../..', 'db.sqlite');

// Reset the database (delete and recreate)
export async function resetDatabase() {
  console.log('Resetting database...');
  
  // Delete the database file if it exists
  if (fs.existsSync(DB_PATH)) {
    fs.unlinkSync(DB_PATH);
    console.log('Deleted existing database file');
  }
  
  // Initialize the database
  await initDatabase();
}

// Initialize the database
export async function initDatabase() {
  try {
    // Get a database connection (creates the file if it doesn't exist)
    const db = await getDbConnection();
    
    // Create the tables
    await db.exec(`
      CREATE TABLE IF NOT EXISTS blogs (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        content TEXT NOT NULL,
        summary TEXT,
        image_url TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
    
    console.log('Database tables created');
    
    // Close the connection
    await db.close();
    
    // Seed the database with sample data
    await seedDatabase();
    
    console.log('Database initialized successfully');
  } catch (error) {
    console.error('Error initializing database:', error);
    throw error;
  }
}

// Run the init function if this file is executed directly
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const action = process.argv[2];
  
  if (action === 'reset') {
    resetDatabase().catch(console.error);
  } else {
    initDatabase().catch(console.error);
  }
}
