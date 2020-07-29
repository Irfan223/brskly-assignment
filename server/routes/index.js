const express = require("express");
const router = express.Router();

const Article = require('../controllers/article');

router.route('/article').post(Article.AddArticle);
router.route('/article/:id').post(Article.AddArticle);
router.route('/article').get(Article.getArticle);
router.route('/article').patch(Article.UpdateArticle);

module.exports = router;