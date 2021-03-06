const express = require('express');
const router = express.Router();
const profilesCtrl = require('../../controllers/profiles');
/*---------- Public Routes ----------*/
router.post('/interest/:id', profilesCtrl.addInterest);
router.post('/dislike/:id', profilesCtrl.addDislike);


/*---------- Protected Routes ----------*/




module.exports = router;