// Seed the database with initial blog posts
import { getDbConnection } from './db.js';
import { fileURLToPath } from 'url';

export async function seedDatabase() {
  const db = await getDbConnection();
  
  // Check if we already have blog posts
  const count = await db.get('SELECT COUNT(*) as count FROM blogs');
  
  // Only seed if no blogs exist
  if (count.count === 0) {
    // Sample blog posts
    const blogs = [
      {
        title: 'Getting Started with Nuxt 3',
        content: `
# Getting Started with Nuxt 3

Nuxt 3 is a powerful framework for building Vue.js applications with server-side rendering capabilities.

## Features

- Server-side rendering
- Auto-imports
- File-based routing
- API routes

## Getting Started

\`\`\`bash
npx nuxi init my-app
cd my-app
npm install
npm run dev
\`\`\`
        `,
        summary: 'Learn the basics of Nuxt 3 and how to get started with your first project.'
      },
      {
        title: 'Working with SQLite in Nuxt',
        content: `
# Working with SQLite in Nuxt

SQLite is a lightweight, file-based database that's perfect for small to medium-sized applications.

## Why SQLite?

- Zero configuration
- No separate database server
- Great for prototyping and small applications
- ACID-compliant

## Setting Up SQLite in Nuxt

Here's how to integrate SQLite with your Nuxt application...
        `,
        summary: 'A guide to integrating SQLite with your Nuxt.js application for simple data persistence.'
      },
      {
        title: 'Building a Blog with Nuxt and SQLite',
        content: `
# Building a Blog with Nuxt and SQLite

This tutorial walks through creating a complete blog application using Nuxt.js and SQLite for data storage.

## Features We'll Build

- Blog listing page
- Individual blog post pages
- Admin interface for creating posts
- SQLite database for storing posts

## Project Structure

Our project will have the following structure...
        `,
        summary: 'Follow along to build a complete blog system using Nuxt.js and SQLite.'
      }
    ];
    
    // Insert the sample blogs
    const stmt = await db.prepare(`
      INSERT INTO blogs (title, content, summary)
      VALUES (?, ?, ?)
    `);
    
    for (const blog of blogs) {
      await stmt.run(blog.title, blog.content, blog.summary);
    }
    
    await stmt.finalize();
    console.log('Database seeded with sample blog posts');
  } else {
    console.log('Database already has blog posts, skipping seed');
  }
  
  await db.close();
}

// Run the seed function if this file is executed directly
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  seedDatabase().catch(console.error);
}
