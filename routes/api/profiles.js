const express = require('express');
const router = express.Router();
const profilesCtrl = require('../../controllers/profiles');
/*---------- Public Routes ----------*/
router.post('/:username/interest/:id', profilesCtrl.addInterest);
router.post('/:usernme/dislike/:id', profilesCtrl.addDislike);


/*---------- Protected Routes ----------*/




module.exports = router;