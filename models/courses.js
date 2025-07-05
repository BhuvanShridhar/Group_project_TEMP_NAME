const courseSchema = new mongoose.Schema({
  userId: { type: String, required: true }, // Firebase UID
  topic: { type: String, required: true },
  lessons: [
    {
      title: String,
      videoUrl: String,
      summary: String,
      order: Number
    }
  ],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Course', courseSchema);
