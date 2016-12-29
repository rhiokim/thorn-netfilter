const express = require('express')
const router = express.Router()
const iptables = require('netfilter').iptables
const exec = require('netfilter/lib/child_utils').exec

router.put('/:action', (req, res) => {
  const act = req.params.action
  iptables[act](req.body, err => {
    if (err) {
      res.statusCode = 400
      res.json({
        cmd: err.cmd,
        code: err.code
      })
      return
    }
    res.send('success')
  })
})

router.get('/', (req, res) => {
  const options = req.body
  exec('iptables -L', {queue: options.queue}, (err, stdout, stderr) => {
    if (err) {
      res.json(err)
      return
    }
    res.send(stdout)
  })
})

module.exports = router
