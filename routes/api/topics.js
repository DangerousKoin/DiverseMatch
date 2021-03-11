const express = require('express');
const router = express.Router();
const topicsCtrl = require('../../controllers/topics');
const multer = require('multer');
const upload = multer();
// /*---------- Public Routes ----------*/
router.post('/', upload.single('photo'), topicsCtrl.createTopic);
router.post('/search/:keyword', topicsCtrl.search);
router.post('/search/', topicsCtrl.search);
router.get('/all', topicsCtrl.getAllTopics);
router.get('/user', topicsCtrl.getUserTopics);
router.delete('/:id', topicsCtrl.deleteTopic);


/*---------- Protected Routes ----------*/




module.exports = router;