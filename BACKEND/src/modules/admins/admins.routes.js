const router = require('express').Router();
const adminController = require('./admin.controller');

router.get('/', adminController.getAll);
router.get('/:id', adminController.getById);
router.post('/', adminController.create);
router.put('/:id', adminController.update);
router.delete('/:id', adminController.delete);

module.exports = router;