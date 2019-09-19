const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

// UK/non-UK location
router.post('/exporter/apply/products/location-uk', function (req, res) {

    let locationUK = req.session.data['location']

    if (locationUK === "In the UK") {
        res.redirect('/exporter/apply/products/location-uk')
    } else {
        res.redirect('/exporter/apply/products/location-outside-uk')
    }
})

// UK/non-UK location [Product 1]
router.post('/exporter/apply/products/location-uk-1', function (req, res) {

    let locationUK1 = req.session.data['location-1']

    if (locationUK1 === "In the UK") {
        res.redirect('/exporter/apply/products/location-uk-1')
    } else {
        res.redirect('/exporter/apply/products/location-outside-uk-1')
    }
})

// UK/non-UK location [Product 2]
router.post('/exporter/apply/products/location-uk-2', function (req, res) {

    let locationUK2 = req.session.data['location-2']

    if (locationUK2 === "In the UK") {
        res.redirect('/exporter/apply/products/location-uk-2')
    } else {
        res.redirect('/exporter/apply/products/location-outside-uk-2')
    }
})

// Remove product [Product 1]
router.post('/exporter/apply/products/product-removed', function (req, res) {
    console.log('posted to remove product 1')
    let itemRemove1 = req.body['remove-product-1']
    console.log(itemRemove1);
    if (itemRemove1 === "Yes") {
        res.redirect('/exporter/apply/products/product-removed')
    } else {
        res.redirect('/exporter/apply/products/product-added')
    }
})

// Add another product [Product 1]
router.post('/exporter/apply/products/index-2', function (req, res) {

    let itemAdd1 = req.session.data['item-add-1']

    if (itemAdd1 === "Yes") {
        res.redirect('/exporter/apply/products/index-2')
    } else {
        res.redirect('/exporter/apply/task-list?products=completed')
    }
})

// Remove product [Product 2]
router.post('/exporter/apply/products/remove-product-2', function (req, res) {
    console.log('posted to remove product 2')
    let itemRemove2 = req.body['remove-product-2']
    console.log(itemRemove2);
    if (itemRemove2 === "Yes") {
        res.redirect('/exporter/apply/products/product-removed')
    } else {
        res.redirect('/exporter/apply/products/product-added')
    }
})

// Add another product [Product 2]
router.post('/exporter/apply/products/index', function (req, res) {

    let itemAdd2 = req.session.data['item-add-2']

    if (itemAdd2 === "Yes") {
        res.redirect('/exporter/apply/products/index')
    } else {
        res.redirect('/exporter/apply/task-list?products=completed')
    }
})

// Remove people [Person 1]
router.post('/exporter/apply/people/people-removed', function (req, res) {

    let peopleRemove1 = req.session.data['remove-people-1']

    if (peopleRemove1 === "Yes") {
        res.redirect('/exporter/apply/people/people-removed')
    } else {
        res.redirect('/exporter/apply/people/people-added')
    }
})

// Add another person [Person 1]
router.post('/exporter/apply/people/index-2', function (req, res) {

    let peopleAdd1 = req.session.data['person-add-1']

    if (peopleAdd1 === "Yes") {
        res.redirect('/exporter/apply/people/index-2')
    } else {
        res.redirect('/exporter/apply/task-list?people=completed')
    }
})

// Remove people [Person 2]
router.post('/exporter/apply/people/people-removed', function (req, res) {

    let peopleRemove2 = req.session.data['remove-people-2']

    if (peopleRemove2 === "Yes") {
        res.redirect('/exporter/apply/people/people-removed')
    } else {
        res.redirect('/exporter/apply/people/people-added')
    }
})

// Add another person [Person 2]
router.post('/exporter/apply/people/index', function (req, res) {

    let peopleAdd2 = req.session.data['person-add-2']

    if (peopleAdd2 === "Yes") {
        res.redirect('/exporter/apply/people/index')
    } else {
        res.redirect('/exporter/apply/task-list?people=completed')
    }
})





// User type
//router.post('/exporter/apply/people/organisation', function (req, res) {

//    let userType = req.session.data['user-type']

//    if (userType === "Organisation") {
//        res.redirect('/exporter/apply/people/organisation')
//    } else {
//        res.redirect('/exporter/apply/people/individual')
//    }
//})

// End user undertaking
//router.post('/exporter/apply/end-user/upload-document', function (req, res) {

//    let euuType = req.session.data['euu-document']

//    if (euuType === "Uploaded") {
//        res.redirect('/exporter/apply/end-user/upload-document')
//    } else {
//        res.redirect('/exporter/apply/end-user/cya')
//    }
//})

// Task list
router.get('/exporter/apply/task-list', (req, res, next) => {

    if (!req.session.sectionStatus){
    	req.session.sectionStatus = {
        	check: undefined,
        	name: undefined,
            products: undefined,
            people: undefined,
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
    if (req.query.information) {
    	req.session.sectionStatus.information = req.query.information
    };

    res.render('exporter/apply/task-list.html', {sectionStatus: req.session.sectionStatus});
});

// Clear data on the 'Application cancelled' page
router.get('/*/application-cancelled', function (req, res) {
	req.session.destroy()
    res.render('exporter/apply/confirm-cancel')
})



// Add a product 
router.post('/exporter/products/all-products', function (req, res) {

    let allProducts = req.session.data['product-add']

    if (allProducts === 'false') {
        res.redirect('/exporter/products/all-products')
    } else {
        res.redirect('/exporter/products/add-product')
    }
})

// Add a product to application
router.post('/exporter/products/all-products-application', function (req, res) {

    let allProductsApplication = req.session.data['products']

    if (allProductsApplication === "Search for products") {
        res.redirect('/exporter/products/all-products-application')
    } else {
        res.redirect('/exporter/products/add-product')
    }
})


module.exports = router
