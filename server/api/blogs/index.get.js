// Import database connection
import { getDbConnection } from '../../database/db';

export default defineEventHandler(async (event) => {
  try {
    const db = await getDbConnection();
    // Get all blogs from the database
    const blogs = await db.all('SELECT id, title, summary, created_at FROM blogs ORDER BY created_at DESC');
    await db.close();
    
    return blogs;
  } catch (error) {
    console.error('Error fetching blogs:', error);
    throw createError({
      statusCode: 500,
      statusMessage: 'Internal Server Error',
      message: 'Failed to fetch blog posts'
    });
  }
});
