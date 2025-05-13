# Weekly Nerd Blog

A simple blog application built with Nuxt.js and SQLite.

## Features

- Blog listing and post viewing
- Markdown content support
- SQLite database for content storage
- Admin page for creating new posts

## Setup

Make sure to install dependencies:

```bash
# npm
npm install
```

### Database Setup

The application uses SQLite for data storage. The database will be automatically initialized when you first run the application. 

To manually initialize or reset the database, run:

```bash
# Using PowerShell to initialize
.\reset-db.ps1

# Using PowerShell to reset (delete and recreate)
.\reset-db.ps1 reset
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev
```

## Adding New Blog Posts

1. Navigate to `/admin/new-blog` or click the "Create New Blog" button on the blogs page
2. Fill out the form with your blog title, summary, and content (in Markdown format)
3. Click "Save Blog Post"

## SQLite Database

The blog data is stored in an SQLite database (`db.sqlite`) in the root directory. The schema includes:

- `blogs` table with the following columns:
  - `id`: Primary key
  - `title`: Blog post title
  - `content`: Blog post content (in Markdown format)
  - `summary`: Short summary of the blog post
  - `image_url`: Optional URL for a blog post image
  - `created_at`: Timestamp when the blog post was created
  - `updated_at`: Timestamp when the blog post was last updated

For more details on SQLite setup, see [SQLITE_SETUP.md](./SQLITE_SETUP.md).

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
