const httpStatus = require('http-status');
const { Article } = require('../models');
const ApiError = require('../utils/ApiError');

const createArticle = async (articleBody) => {
  return Article.create(articleBody);
};

const queryArticle = async (filter, options) => {
  const articles = await Article.paginate(filter, options);
  return articles;
};

const getArticleById = async (id) => {
  return Article.findById(id);
};

const updateArticleById = async (articleId, updateBody) => {
  const article = await getArticleById(articleId);
  if (!article) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Article not found');
  }
  Object.assign(article, updateBody);
  await article.save();
  return article;
};

const deleteArticleById = async (articleId) => {
  const article = await getArticleById(articleId);
  if (!article) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Article not found');
  }
  await article.remove();
  return article;
};

module.exports = {
  createArticle,
  queryArticle,
  getArticleById,
  updateArticleById,
  deleteArticleById,
};
