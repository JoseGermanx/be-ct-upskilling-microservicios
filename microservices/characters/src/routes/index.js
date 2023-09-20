const { Router } = require('express');

const controller = require('../controllers');

const router = Router();

router.get('/', controller.getCharacters);
router.post('/', controller.createCharacter);


module.exports = router;