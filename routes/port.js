const express = require('express')
const router = express.Router()

router.put('/', (req, res) => {
  res.send('success')
})

module.exports = router
