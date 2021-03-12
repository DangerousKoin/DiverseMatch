const express = require('express');
const router = express.Router();
const profileCtrl = require('../../controllers/profile');
/*---------- Public Routes ----------*/
router.post('/interest/:id', profileCtrl.addInterest);
router.post('/dislike/:id', profileCtrl.addDislike);
router.get('/interests', profileCtrl.getInterests);
router.get('/dislikes', profileCtrl.getDislikes);



/*---------- Protected Routes ----------*/




module.exports = router;