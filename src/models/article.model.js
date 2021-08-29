const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

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
    user: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

// add plugin that converts mongoose to json
articleSchema.plugin(toJSON);
articleSchema.plugin(paginate);

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;
