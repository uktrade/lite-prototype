const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

// UK/Non-UK location routing
router.post('/sprint-future/exporter/apply/products/location-uk', function (req, res) {

    let locationUK = req.session.data['location']

    if (locationUK === "In the UK") {
        res.redirect('/sprint-future/exporter/apply/products/location-uk')
    } else {
        res.redirect('/sprint-future/exporter/apply/products/location-outside-uk')
    }
})

// Remove products routing
router.post('/sprint-future/exporter/apply/products/index', function (req, res) {

    let itemAdd = req.session.data['item-add']

    if (itemAdd === "Yes") {
        res.redirect('/sprint-future/exporter/apply/products/index')
    } else {
        res.redirect('/sprint-future/exporter/apply/task-list?products=completed')
    }
})

router.post('/sprint-future/exporter/apply/products/remove-productd', function (req, res) {

    let itemRemove = req.session.data['remove-product']

    if (itemRemove === "Yes") {
        res.redirect('/sprint-future/exporter/apply/products/remove-productd')
    } else {
        res.redirect('/sprint-future/exporter/apply/products/product-added')
    }
})

// Task list 
router.get('/sprint-future/exporter/apply/task-list', (req, res, next) => {

    if (!req.session.sectionStatus){
    	req.session.sectionStatus = {
        	check: undefined,
        	name: undefined,
            products: undefined,
            people: undefined,
            enduser: undefined,
            information: undefined,
      	}
    }
  
    if (req.query.check) {
    	req.session.sectionStatus.check = req.query.check
    };
    if (req.query.name) {
    	req.session.sectionStatus.name = req.query.name
    };
    if (req.query.products) {
    	req.session.sectionStatus.products = req.query.products
    };
    if (req.query.people) {
    	req.session.sectionStatus.people = req.query.people
    };
    if (req.query.endUser) {
    	req.session.sectionStatus.endUser = req.query.endUser
    };
    if (req.query.information) {
    	req.session.sectionStatus.information = req.query.information
    };
  
    res.render('sprint-future/exporter/apply/task-list.html', {sectionStatus: req.session.sectionStatus});
});
  
// Clear data on the 'Application cancelled' page
router.get('/*/application-cancelled', function (req, res) {
	req.session.destroy()
    res.render('sprint-future/exporter/apply/confirm-cancel')
})

module.exports = router
