import 'dotenv/config';
import mongoose from 'mongoose';

export async function connectToMongoDB() {
  try {
    const mongoUri = process.env.MONGODB_URI;
    if (!mongoUri) {
      throw new Error('MONGODB_URI environment variable is required.');
    }

    await mongoose.connect(mongoUri);
    console.log('You successfully connected to MongoDB!');
    return mongoose;
  } catch (err) {
    console.error('MongoDB connection failed:', err);
    throw err;
  }
}

// Call this only when your application terminates
export async function disconnectFromMongoDB() {
  await mongoose.connection.close();
}

connectToMongoDB();
