// Import database connection
import { getDbConnection } from '../../database/db';

export default defineEventHandler(async (event) => {
  try {
    // Get the blog ID from the URL parameter
    const id = getRouterParam(event, 'id');
    
    // Validate the ID
    if (!id || isNaN(parseInt(id))) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Bad Request',
        message: 'Invalid blog ID'
      });
    }
    
    const db = await getDbConnection();
    
    // Get the blog post by ID
    const blog = await db.get('SELECT * FROM blogs WHERE id = ?', id);
    await db.close();
    
    // If blog post not found
    if (!blog) {
      throw createError({
        statusCode: 404,
        statusMessage: 'Not Found',
        message: `Blog post with ID ${id} not found`
      });
    }
    
    return blog;
  } catch (error) {
    if (error.statusCode) {
      // Pass through our custom errors
      throw error;
    }
    console.error('Error fetching blog:', error);
    throw createError({
      statusCode: 500,
      statusMessage: 'Internal Server Error',
      message: 'Failed to fetch blog post'
    });
  }
});
