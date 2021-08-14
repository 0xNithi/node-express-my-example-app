const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const articleValidation = require('../../validations/article.validation');
const articleController = require('../../controllers/article.controller');

const router = express.Router();

router
  .route('/')
  .post(auth, validate(articleValidation.createArticle), articleController.createArticle)
  .get(validate(articleValidation.getArticles), articleController.getArticles);

router
  .route('/:articleId')
  .get(validate(articleValidation.getArticle), articleController.getArticle)
  .patch(auth, validate(articleValidation.updateArticle), articleController.updateArticle)
  .delete(auth, validate(articleValidation.deleteArticle), articleController.deleteArticle);

module.exports = router;
