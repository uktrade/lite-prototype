const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

// #######################################################
// ###### Apply for an export licence: Licence type ######
// #######################################################

// http://localhost:3000/exporter/apply/licence-type/export-licence
router.post('/exporter/apply/licence-type/application-reference', function (req, res) {

    let licenceTypeApply = req.session.data['export-licence-type']

    if (licenceTypeApply === "Standard Licence") {
        res.redirect('/exporter/apply/licence-type/application-reference')
    } else {
        res.redirect('/exporter/apply/licence-type/export-licence-official')
    }
})


// #######################################################
// ###### Apply for an export licence: Add products ######
// #######################################################

// http://localhost:3000/exporter/apply/products/index
router.post('/exporter/apply/products/add-product', function (req, res) {

    let selectProductApply = req.session.data['select-product']

    if (selectProductApply === "Add a new product") {
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
        res.redirect('/exporter/apply/task-list-2')
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


// ####################################################################
// ###### Apply for an export licence: Add destination countries ######
// ####################################################################

// http://localhost:3000/exporter/apply/destinations/index
router.post('/exporter/apply/destinations/all-sites', function (req, res) {

    let selectSiteApply = req.session.data['select-location']

    if (selectSiteApply === "Choose a site you have added before") {
        res.redirect('/exporter/apply/destinations/all-sites')
    } else {
        res.redirect('/exporter/apply/destinations/add-site')
    }
})

// http://localhost:3000/exporter/apply/destinations/add-site
router.post('/exporter/apply/destinations/uk', function (req, res) {

    let siteUKApply = req.session.data['site-where']

    if (siteUKApply === 'true') {
        res.redirect('/exporter/apply/destinations/uk')
    } else {
        res.redirect('/exporter/apply/destinations/country')
    }
})

// http://localhost:3000/exporter/apply/destinations/site-added
router.post('/exporter/apply/destinations/add-site', function (req, res) {

    let siteAddApply = req.session.data['site-add']

    if (siteAddApply === 'true') {
        res.redirect('/exporter/apply/destinations/add-site')
    } else {
        res.redirect('/exporter/apply/task-list-3')
    }
})


// ##########################################################
// ###### Apply for an export licence: Add a consignee ######
// ##########################################################

// http://localhost:3000/exporter/apply/consignee/location
router.post('/exporter/apply/consignee/uk', function (req, res) {

    let consigneeUKApply = req.session.data['consignee-based']

    if (consigneeUKApply === 'true') {
        res.redirect('/exporter/apply/consignee/uk')
    } else {
        res.redirect('/exporter/apply/consignee/country')
    }
})

// http://localhost:3000/exporter/apply/consignee/consignee-end-user
router.post('/exporter/apply/task-list-5-not-req', function (req, res) {

    let consigneeEndUser = req.session.data['consignee-end-user']

    if (consigneeEndUser === 'Yes') {
        res.redirect('/exporter/apply/task-list-5-not-req')
    } else {
        res.redirect('/exporter/apply/task-list-4')
    }
})


// ########################################################
// ###### Apply for an export licence: Add end users ######
// ########################################################

// http://localhost:3000/exporter/apply/end-users/index
router.post('/exporter/apply/task-list-5', function (req, res) {

    let endUserSameApply = req.session.data['same-organistion']

    if (endUserSameApply === 'Yes') {
        res.redirect('/exporter/apply/task-list-5')
    } else {
        res.redirect('/exporter/apply/end-users/who-end-user')
    }
})

// http://localhost:3000/exporter/apply/end-users/location
router.post('/exporter/apply/end-users/uk', function (req, res) {

    let endUserUKApply = req.session.data['end-user-based']

    if (endUserUKApply === 'true') {
        res.redirect('/exporter/apply/end-users/uk')
    } else {
        res.redirect('/exporter/apply/end-users/country')
    }
})

// http://localhost:3000/exporter/apply/end-users/sensitive-information
router.post('/exporter/apply/end-users/upload-document', function (req, res) {

    let endUserSensitiveApply = req.session.data['sensitive-information']

    if (endUserSensitiveApply === 'No') {
        res.redirect('/exporter/apply/end-users/upload-document')
    } else {
        res.redirect('/exporter/apply/task-list-5')
    }
})


// ####################################################
// ###### Apply for an export licence: Task List ######
// ####################################################

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
        res.redirect('/exporter/sites/site-country')
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

// Add item routing
 router.post('/exporter/products/product-added', function (req, res) {

     if (req.session.data['products'] == undefined) {
         req.session.data['products'] = []
     }

   var products = []
   var existing_products = req.session.data['products']


    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!

    var yyyy = today.getFullYear();

    if (mm == 1) {
      mm = 'January';
    }
    else if (mm == 2) {
      mm = 'February';
    }
    else if (mm == 3) {
      mm = 'March';
    }
    else if (mm == 4) {
      mm = 'April';
    }
    else if (mm == 5) {
      mm = 'May';
    }
    else if (mm == 6) {
      mm = 'June';
    }
    else if (mm == 7) {
      mm = 'July';
    }
    else if (mm == 8) {
      mm = 'August';
    }
    else if (mm == 9) {
      mm = 'September';
    }
    else if (mm == 10) {
      mm = 'October';
    }
    else if (mm == 11) {
      mm = 'November';
    }
    else if (mm == 12) {
      mm = 'December';
    }

    var today = dd + ' ' + mm + ' ' + yyyy;

if(req.session.data['edit']=='true') {
     for (i = 0; i < existing_products.length; i++) {
            if(existing_products[i]['product-name']==req.session.data['product-name']) {
                //don't add
            }
            else {
                products.push(existing_products[i])
            }
        }

}
  else {
        products = req.session.data['products']
    }
      products.unshift({
         'product-name': req.session.data['product-name'],
         'control-rating': req.session.data['control-rating'],
         'product-description': req.session.data['product-description'],
         'product-controlled': req.session.data['product-controlled'],
         'file-upload': req.session.data['file-upload'],
         'document-description': req.session.data['document-description'],
         'part-number': req.session.data['part-number'],
         'product-date':  today
     })


      var clear = 'false'
      var redirect= '/exporter/products/product-added'

if(req.session.data['edit-from-add']=='true') {
 clear='true'
}
else if(req.session.data['edit']=='true') {
 redirect= '/exporter/products/product'
}
else {
 clear = 'true'
     }
     if(clear=='true') {
     req.session.data['control-rating'] = undefined
     req.session.data['product-description'] = undefined
     req.session.data['product-name'] = undefined
     req.session.data['document-description'] = undefined
     req.session.data['file-upload'] = undefined
     req.session.data['part-number'] = undefined
     req.session.data['product-controlled'] = undefined
     }
     req.session.data['removed'] = undefined
     req.session.data['edit'] = undefined
     req.session.data['edit-from-add'] = undefined
     req.session.data['products'] = products
     products = undefined
      res.redirect(redirect)
 })

router.post('/exporter/products/all-products', function (req, res) {
     req.session.data['control-rating'] = undefined
     req.session.data['product-description'] = undefined
     req.session.data['product-name'] = undefined
     req.session.data['document-description'] = undefined
     req.session.data['file-upload'] = undefined
     req.session.data['part-number'] = undefined
     req.session.data['product-controlled'] = undefined
     req.session.data['removed'] = undefined
     req.session.data['edit'] = undefined
     req.session.data['edit-from-add'] = undefined
})

router.post('/exporter/products/product-removed', function (req, res) {

     if (req.session.data['products'] == undefined) {
         req.session.data['products'] = []
     }


     var products = []
     var existing_products = req.session.data['products']


        for (i = 0; i < existing_products.length; i++) {
            if(existing_products[i]['product-name']==req.session.data['product-name']) {
                //don't add
            }
            else {
                products.push(existing_products[i])
            }
        }

     req.session.data['control-rating'] = undefined
     req.session.data['product-description'] = undefined
     req.session.data['product-name'] = undefined
     req.session.data['document-description'] = undefined
     req.session.data['file-upload'] = undefined
     req.session.data['part-number'] = undefined
     req.session.data['product-controlled'] = undefined

    req.session.data['products'] = products
    req.session.data['removed'] = true
     products = undefined
     if(req.session.data['products'].length == 0) {
         res.redirect('/exporter/products/product-added-none')
     }
     else {
         res.redirect('/exporter/products/all-products')
     }

 })

router.post('/exporter/products/product-removed-application', function (req, res) {

     if (req.session.data['app-products'] == undefined) {
         req.session.data['app-products'] = []
     }

     var app_products = []
     var existing_products = req.session.data['app-products']


        for (i = 0; i < existing_products.length; i++) {
            if(existing_products[i]['product-name']==req.session.data['product-name']) {
                //don't add
            }
            else {
                app_products.push(existing_products[i])
            }
        }

     req.session.data['good'] = undefined
     req.session.data['value-products'] = undefined
     req.session.data['quantity'] = undefined
     req.session.data['measurement'] = undefined
     req.session.data['end-product'] = undefined
     req.session.data['other-measurement'] = undefined

    req.session.data['app-products'] = app_products
     app_products = undefined
      res.redirect('/exporter/products/product-removed-application')
 })

 router.post('/exporter/products/product-added-application', function (req, res) {

     if (req.session.data['app-products'] == undefined) {
         req.session.data['app-products'] = []
     }

     var app_products = []
     var existing_products = req.session.data['app-products']

     if(req.session.data['edit']=='true') {
        for (i = 0; i < existing_products.length; i++) {
            if(existing_products[i]['product-name']==req.session.data['good']) {
                //don't add
            }
            else {
                app_products.push(existing_products[i])
            }
        }
    }
    else {
        app_products = req.session.data['app-products']
    }


        app_products.unshift({
         'product-name': req.session.data['good'],
         'value-products': req.session.data['value-products'],
         'quantity': req.session.data['quantity'],
         'measurement': req.session.data['measurement'],
         'end-product': req.session.data['end-product'],
         'other-measurement': req.session.data['other-measurement']
     })

     req.session.data['good'] = undefined
     req.session.data['edit'] = undefined
     req.session.data['value-products'] = undefined
     req.session.data['quantity'] = undefined
     req.session.data['measurement'] = undefined
     req.session.data['end-product'] = undefined
     req.session.data['other-measurement'] = undefined

    req.session.data['app-products'] = app_products
     app_products = undefined
      res.redirect('/exporter/products/product-added-application')
 })

module.exports = router
