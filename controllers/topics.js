const Topic = require('../models/topic');
const { v4: uuidv4 } = require('uuid');
const S3 = require('aws-sdk/clients/s3');
const s3 = new S3(); // initialize the construcotr

module.exports = {
    createTopic,
    search,
    index
}


// We have to use AWS and multer again for this
function createTopic(req, res){
    console.log(req.file, req.body, 'this is create method', req.user)
    try {
        const filePath = `${uuidv4()}/${req.file.originalname}`
        const params = {Bucket: 'photocollector', Key: filePath, Body: req.file.buffer};
        s3.upload(params, async function(err, data){
                // data.Location is the address where our image is stored on aws
            const topic = await Topic.create({title: req.body.title, description: req.body.description, user: req.user, icon: data.Location});
            const populatedUserTopic = await topic.populate('user').execPopulate();
            res.status(201).json({topic: populatedUserTopic})
        })


    } catch(err){
        console.log(err)
        res.json({data: err})
    }
}

async function search(req, res){
    try {
        console.log(req.body.keyword)
        const searchResults = await Topic.find({title: req.body.keyword});        
        res.status(200).json({searchResults})
    } catch(err){

    }
}

async function index(req, res){
    try {
        // this populates the user when you find the topics
        // so you'll have access to the users information 
        // when you fetch the topics        
        const topics = await Topic.find({}).populate('user').exec() 
        // userSchema.set('toObject') gets invoked, to delete the password
        // when we populate the user so we don't have to worry about sending over the password!
        res.status(200).json({topics})
    } catch(err){

    }
}