import dotenv from 'dotenv';

// Load environment variables based on the NODE_ENV
const envFile = process.env.NODE_ENV === 'test' ? '.env.test' : '.env';
dotenv.config({ path: envFile });

