const router = require('express').Router()
const { authenticate } = require('../middleware')

// Import Controller
const { store, update, getDetail, getAll } = require('../controllers/formController')


router.get('/', getAll)
router.get('/:id', getDetail)
router.post('/', authenticate, store)
router.put('/:id', authenticate, update)



module.exports = router