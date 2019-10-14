const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

// http://localhost:3000/exporter/apply/type/licence-type
router.post('/exporter/apply/type/application-reference', function (req, res) {

    let licenceType = req.session.data['licence-type']

    if (licenceType === "Standard Licence") {
        res.redirect('/exporter/apply/type/application-reference')
    } else {
        res.redirect('/exporter/apply/type/export-length')
    }
})

// http://localhost:3000/exporter/apply/products/index
router.post('/exporter/apply/products/add-product', function (req, res) {

    let selectProduct = req.session.data['select-product']

    if (selectProduct === "Add a new product") {
        res.redirect('/exporter/apply/products/add-product')
    } else {
        res.redirect('/exporter/apply/products/all-products-application')
    }
})

// http://localhost:3000/exporter/apply/products/product-added-application
router.post('/exporter/apply/products/all-products-application', function (req, res) {

    let allProductsAddApplicationApply = req.session.data['product-add-application-apply']

    if (allProductsAddApplicationApply === 'true') {
        res.redirect('/exporter/apply/products/all-products-application')
    } else {
        res.redirect('/exporter/apply/task-list?products=completed')
    }
})

// http://localhost:3000/exporter/apply/products/product-added
router.post('/exporter/apply/task-list', function (req, res) {

    let allProductsApply = req.session.data['product-add-apply']

    if (allProductsApply === 'false') {
        res.redirect('/exporter/apply/products/add-to-application')
    } else {
        res.redirect('/exporter/apply/products/add-product')
    }
})

// Task list
router.get('/exporter/apply/task-list', (req, res, next) => {

    if (!req.session.sectionStatus){
    	req.session.sectionStatus = {
            type: undefined,
            products: undefined,
            destinations: undefined,
      	}
    }

    if (req.query.type) {
    	req.session.sectionStatus.type = req.query.type
    };
    if (req.query.products) {
    	req.session.sectionStatus.products = req.query.products
    };
    if (req.query.destinations) {
    	req.session.sectionStatus.destinations = req.query.destinations
    };

    res.render('exporter/apply/task-list.html', {sectionStatus: req.session.sectionStatus});
});
// Clear data on the 'Application cancelled' page
router.get('/*/application-cancelled', function (req, res) {
	req.session.destroy()
    res.render('exporter/apply/confirm-cancel')
})




// <------- ###### TO BE ARCHIVED ###### ------->
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
//router.get('/exporter/apply/task-list', (req, res, next) => {

//    if (!req.session.sectionStatus){
//    	req.session.sectionStatus = {
//        	check: undefined,
//        	name: undefined,
//            products: undefined,
//            people: undefined,
//            information: undefined,
//      	}
//    }

//    if (req.query.check) {
//    	req.session.sectionStatus.check = req.query.check
//    };
//    if (req.query.name) {
//    	req.session.sectionStatus.name = req.query.name
//    };
//    if (req.query.products) {
//    	req.session.sectionStatus.products = req.query.products
//    };
//    if (req.query.people) {
//    	req.session.sectionStatus.people = req.query.people
//    };
//    if (req.query.information) {
//    	req.session.sectionStatus.information = req.query.information
//    };

//    res.render('exporter/apply/task-list.html', {sectionStatus: req.session.sectionStatus});
//});
// Clear data on the 'Application cancelled' page
//router.get('/*/application-cancelled', function (req, res) {
//	req.session.destroy()
//    res.render('exporter/apply/confirm-cancel')
//})
// <------- ###### TO BE ARCHIVED ###### ------->



// **** PROTOTYPE BASED ON BUILD **** //
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

    let allProductsAddApplication = req.session.data['product-add-application']

    if (allProductsAddApplication === 'true') {
        res.redirect('/exporter/products/all-products-application')
    } else {
        // res.redirect('/exporter/products/list-of-products-application')
        res.redirect('/exporter/apply/task-list')
    }
})

// Add a new site - UK or Non-UK
router.post('/exporter/sites/site-uk', function (req, res) {

    let siteUK = req.session.data['site-where']

    if (siteUK === 'true') {
        res.redirect('/exporter/sites/site-uk')
    } else {
        res.redirect('/exporter/sites/site-outside-uk')
    }
})

// Add a new site
router.post('/exporter/sites/all-sites', function (req, res) {

    let allSites = req.session.data['site-add']

    if (allSites === 'false') {
        res.redirect('/exporter/sites/all-sites')
    } else {
        res.redirect('/exporter/sites/add-site')
    }
})

// Select product path
//router.post('/exporter/products/all-products-application', function (req, res) {

//    let allProductsApplication = req.session.data['products']

//    if (allProductsApplication === "Searching for a product") {
//        res.redirect('/exporter/products/all-products-application')
//    } else {
//        res.redirect('/exporter/products/add-product')
//    }
// })

module.exports = router
