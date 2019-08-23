const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

router.post('/sprint-future/exporter/apply/location-uk', function (req, res) {

    let locationUK = req.session.data['location']

    if (locationUK == 'true') {
        res.redirect('/sprint-future/exporter/apply/location-uk')
    } else {
        res.redirect('/sprint-future/exporter/apply/location-outside-uk')
    }
})

module.exports = router
