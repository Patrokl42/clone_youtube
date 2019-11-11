const mongoose = require('mongoose')

const VideoSchema = new mongoose.Schema({
  fileUrl: {
    type: String,
    require: 'File Url is Require'
  },
  title: {
    type: String,
    require: 'Title is Require'
  },
  description: String,
  views: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  comments: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Comment'
  }]
})

const model = mongoose.model('Video', VideoSchema)
module.exports = model