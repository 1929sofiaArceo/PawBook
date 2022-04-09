const router = require('express').Router();
const applicationController = require('./application.controller');

router.get('/', applicationController.getAll);
router.get('/:id', applicationController.getById);
router.post('/', applicationController.create);
router.put('/:id', applicationController.update);
router.delete('/:id', applicationController.delete);

module.exports = router;