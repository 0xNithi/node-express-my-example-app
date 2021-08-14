const mongoose = require('mongoose');
const { toJSON } = require('./plugins');

const articleSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

// add plugin that converts mongoose to json
articleSchema.plugin(toJSON);

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;
