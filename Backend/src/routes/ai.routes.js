const express = require('express');
const router = express.Router();
const aiController = require('../controllers/ai.controller');

router.get('/generate', aiController.getResponses.generate);

module.exports = router;