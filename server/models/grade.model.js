const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GradeSchema = new Schema ({
  date: { type: Object },
  grade: { type: Date },
  score: { type: Number }
}, {
  _id: false
});

module.exports = mongoose.model('Grade', GradeSchema);
