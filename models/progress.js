const progressSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  courseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },
  completedLessons: [Number], // lesson `order` numbers
  quizScores: [
    {
      quizId: { type: mongoose.Schema.Types.ObjectId, ref: 'Quiz' },
      score: Number
    }
  ]
});

module.exports = mongoose.model('Progress', progressSchema);
