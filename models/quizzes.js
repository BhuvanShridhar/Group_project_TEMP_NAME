const quizSchema = new mongoose.Schema({
  userId: { type: String, required: true }, // Firebase UID
  courseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },
  questions: [
    {
      questionText: String,
      options: [String],
      correctAnswer: String,
      explanation: String
    }
  ],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Quiz', quizSchema);
