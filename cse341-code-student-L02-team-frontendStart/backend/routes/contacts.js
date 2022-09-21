const express = require('express');
const router = express.Router();
const professionalControllers = require('../controllers/contacts');

router.get('/', professionalControllers.getAll);
router.get('/:id', professionalControllers.getSingle);

module.exports = router;
