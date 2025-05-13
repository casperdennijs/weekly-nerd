# SQLite Setup Instructions for Weekly Nerd Blog

## Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)

## Installation Steps

1. Install the required packages:

```bash
npm install sqlite3 sqlite marked
```

2. Create the database file:

The application will automatically create a `db.sqlite` file in the root directory when it starts.

## Database Structure

The blog uses a simple SQLite database with the following structure:

```sql
CREATE TABLE blogs (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  summary TEXT,
  image_url TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## API Endpoints

- GET `/api/blogs` - Returns all blog posts
- GET `/api/blogs/:id` - Returns a specific blog post

## Running the Application

Start the development server:

```bash
npm run dev
```

The blog will be available at http://localhost:3000/blogs

## Troubleshooting

If you encounter issues with SQLite installation:

1. Make sure you have the proper build tools installed
2. Try installing the sqlite3 package with the --build-from-source flag:

```bash
npm install sqlite3 --build-from-source
```

3. If you're using Windows, you might need to install Windows Build Tools:

```bash
npm install --global --production windows-build-tools
```
