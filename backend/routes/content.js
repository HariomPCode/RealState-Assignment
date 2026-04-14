const express = require('express');
const router = express.Router();
const { getAllContent, updateSection } = require('../controllers/contentController');
const { isAuthenticated } = require('../middleware/auth');

router.get('/', getAllContent);
router.put('/:section', isAuthenticated, updateSection);

module.exports = router;
