import mongoose, { Schema } from 'mongoose';

const ArticleSchema: Schema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  description: { type: String, required: true },
  content: { type: String, required: true },
  updatedAt: { type: Date, default: Date.now }
});

export default mongoose.model('Article', ArticleSchema);
