const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/users');
const multer = require('multer');
const upload = multer();
/*---------- Public Routes ----------*/
router.post('/signup', upload.single('photo'), usersCtrl.signup);
router.post('/login', usersCtrl.login);
// router.post('/:username/interests', usersCtrl.addInterest);
router.get('/:username', usersCtrl.profile);
// router.delete('/:usernme/interests/:id', usersCtrl.delInterest)

/*---------- Protected Routes ----------*/




module.exports = router;