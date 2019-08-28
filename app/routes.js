const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

router.post('/sprint-future/exporter/apply/tbc/location-uk', function (req, res) {

    let locationUK = req.session.data['location']

    if (locationUK == 'true') {
        res.redirect('/sprint-future/exporter/apply/tbc/location-uk')
    } else {
        res.redirect('/sprint-future/exporter/apply/tbc/location-outside-uk')
    }
})

// Task list 
router.get('/sprint-future/exporter/apply/list', (req, res, next) => {

    if (!req.session.sectionStatus){
    	req.session.sectionStatus = {
        	check: undefined,
        	tbc: undefined,
        	items: undefined,
      	}
    }
  
    if (req.query.check) {
    	req.session.sectionStatus.check = req.query.check
    };
    if (req.query.tbc) {
    	req.session.sectionStatus.tbc = req.query.tbc
    };
    if (req.query.items) {
    	req.session.sectionStatus.items = req.query.items
    };
  
    res.render('sprint-future/exporter/apply/list.html', {sectionStatus: req.session.sectionStatus});
  });
  
// Clear data on the 'application cancelled' screen
router.get('/*/clear-apply', function (req, res) {
	req.session.destroy()
    res.render('sprint-future/exporter/apply/application-cancelled')
})



module.exports = router
