// Import database connection
import { getDbConnection } from '../../database/db';

export default defineEventHandler(async (event) => {
  try {
    // Read the request body
    const body = await readBody(event);
    
    // Validate the required fields
    if (!body.title || !body.content) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Bad Request',
        message: 'Title and content are required'
      });
    }
    
    // Connect to the database
    const db = await getDbConnection();
    
    // Insert the new blog post
    const result = await db.run(
      'INSERT INTO blogs (title, content, summary) VALUES (?, ?, ?)',
      body.title,
      body.content,
      body.summary || null
    );
    
    // Get the ID of the new blog post
    const id = result.lastID;
    
    // Get the newly created blog post
    const blog = await db.get('SELECT * FROM blogs WHERE id = ?', id);
    
    await db.close();
    
    // Return the newly created blog post
    return blog;
  } catch (error) {
    console.error('Error creating blog post:', error);
    if (error.statusCode) {
      // Pass through our custom errors
      throw error;
    }
    throw createError({
      statusCode: 500,
      statusMessage: 'Internal Server Error',
      message: 'Failed to create blog post'
    });
  }
});
