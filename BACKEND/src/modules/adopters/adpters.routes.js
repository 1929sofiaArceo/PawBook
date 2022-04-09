const router = require('express').Router();
const adopterController = require('./adopter.controller');

router.get('/', adopterController.getAll);
router.get('/:id', adopterController.getById);
router.post('/', adopterController.create);
router.put('/:id', adopterController.update);
router.delete('/:id', adopterController.delete);

module.exports = router;