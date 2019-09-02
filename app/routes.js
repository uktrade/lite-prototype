const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

// UK/Non-UK location routing
router.post('/sprint-future/exporter/apply/tbc/location-uk', function (req, res) {

    let locationUK = req.session.data['location']

    if (locationUK === "In the UK") {
        res.redirect('/sprint-future/exporter/apply/tbc/location-uk')
    } else {
        res.redirect('/sprint-future/exporter/apply/tbc/location-outside-uk')
    }
})

// Add item routing
router.post('/sprint-future/exporter/apply/items/upload-document', function (req, res) {
	if (req.session.data['items-new'] == undefined) {
		req.session.data['items-new'] = []
	}

	req.session.data['items-new'].push({
		'control-list': req.session.data['control-list'],
		'description': req.session.data['description'],
		'file-upload': req.session.data['file-upload'],
		'total-value': req.session.data['total-value'],
		'quantity': req.session.data['quantity'],
	})

	req.session.data['control-list'] = undefined
	req.session.data['description'] = undefined
	req.session.data['file-upload'] = undefined
	req.session.data['total-value'] = undefined
	req.session.data['quantity'] = undefined

	res.redirect('/sprint-future/exporter/apply/items/items')
})

// Remove items routing
router.post('/sprint-future/exporter/apply/items/index', function (req, res) {

    let itemAdd = req.session.data['item-add']

    if (itemAdd === "Yes") {
        res.redirect('/sprint-future/exporter/apply/items/index')
    } else {
        res.redirect('/sprint-future/exporter/apply/task-list?items=completed')
    }
})

router.post('/sprint-future/exporter/apply/items/item-removed', function (req, res) {

    let itemRemove = req.session.data['item-remove']

    if (itemRemove === "Yes") {
        res.redirect('/sprint-future/exporter/apply/items/item-removed')
    } else {
        res.redirect('/sprint-future/exporter/apply/items/item-added')
    }
})

// Task list
router.get('/sprint-future/exporter/apply/task-list', (req, res, next) => {

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

    res.render('sprint-future/exporter/apply/task-list.html', {sectionStatus: req.session.sectionStatus});
});

// Clear data on the 'Application cancelled' page
router.get('/*/application-cancelled', function (req, res) {
	req.session.destroy()
    res.render('sprint-future/exporter/apply/confirm-cancel')
})

module.exports = router
