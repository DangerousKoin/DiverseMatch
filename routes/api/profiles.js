const express = require('express');
const router = express.Router();
const profilesCtrl = require('../../controllers/profiles');
/*---------- Public Routes ----------*/
router.post('/interest/:id', profilesCtrl.addInterest);
router.post('/dislike/:id', profilesCtrl.addDislike);
router.get('/interests', profilesCtrl.getInterests);
router.get('/dislikes', profilesCtrl.getDislikes);



/*---------- Protected Routes ----------*/




module.exports = router;