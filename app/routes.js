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

// UK/Non-UK location - Product 1
router.post('/sprint-future/exporter/apply/products/location-uk-1', function (req, res) {

    let locationUK1 = req.session.data['location-1']

    if (locationUK1 === "In the UK") {
        res.redirect('/sprint-future/exporter/apply/products/location-uk-1')
    } else {
        res.redirect('/sprint-future/exporter/apply/products/location-outside-uk-1')
    }
})

// UK/Non-UK location - Product 2
router.post('/sprint-future/exporter/apply/products/location-uk-2', function (req, res) {

    let locationUK2 = req.session.data['location-2']

    if (locationUK2 === "In the UK") {
        res.redirect('/sprint-future/exporter/apply/products/location-uk-2')
    } else {
        res.redirect('/sprint-future/exporter/apply/products/location-outside-uk-2')
    }
})

// Remove products 
router.post('/sprint-future/exporter/apply/products/index', function (req, res) {

    let itemAdd = req.session.data['item-add']

    if (itemAdd === "Yes") {
        res.redirect('/sprint-future/exporter/apply/products/index')
    } else {
        res.redirect('/sprint-future/exporter/apply/task-list?products=completed')
    }
})

router.post('/sprint-future/exporter/apply/products/remove-product', function (req, res) {

    let itemRemove = req.session.data['remove-product']

    if (itemRemove === "Yes") {
        res.redirect('/sprint-future/exporter/apply/products/remove-product')
    } else {
        res.redirect('/sprint-future/exporter/apply/products/product-added')
    }
})

// Remove products - Product 1
router.post('/sprint-future/exporter/apply/products/index-2', function (req, res) {

    let itemAdd1 = req.session.data['item-add-1']

    if (itemAdd1 === "Yes") {
        res.redirect('/sprint-future/exporter/apply/products/index-2')
    } else {
        res.redirect('/sprint-future/exporter/apply/task-list?products=completed')
    }
})

router.post('/sprint-future/exporter/apply/products/product-removed', function (req, res) {

    let itemRemove1 = req.session.data['remove-product']

    if (itemRemove1 === "Yes") {
        res.redirect('/sprint-future/exporter/apply/products/product-removed')
    } else {
        res.redirect('/sprint-future/exporter/apply/products/product-added')
    }
})

// Remove products - Product 2
router.post('/sprint-future/exporter/apply/products/index', function (req, res) {

    let itemAdd2 = req.session.data['item-add-2']

    if (itemAdd2 === "Yes") {
        res.redirect('/sprint-future/exporter/apply/products/index')
    } else {
        res.redirect('/sprint-future/exporter/apply/task-list?products=completed')
    }
})

router.post('/sprint-future/exporter/apply/products/product-removed', function (req, res) {

    let itemRemove2 = req.session.data['remove-product']

    if (itemRemove2 === "Yes") {
        res.redirect('/sprint-future/exporter/apply/products/product-removed')
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
