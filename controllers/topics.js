const Topic = require('../models/topic');
const { v4: uuidv4 } = require('uuid');
const S3 = require('aws-sdk/clients/s3');
const { isTSUndefinedKeyword } = require('@babel/types');
const s3 = new S3(); // initialize the construcotr

module.exports = {
    createTopic,
    search,
    deleteTopic,
    getAllTopics,
    getUserTopics
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
        const searchList = await Topic.find({});
        const keyword = req.params.keyword.toLowerCase();
        let topics = [];
        searchList.forEach(function(topic) { 
            let topicTitle = topic.title.toLowerCase();
            if (topicTitle.includes(keyword)) {
                topics.push(topic);
                topics.sort();
            }
        })
        res.status(200).json({topics})
    } catch(err){
        console.log(err)
        res.json({data: err})
    }
}

async function deleteTopic(req, res){
    try {
        const topic = await Topic.findById(req.params.id);
        
        topic.remove();
        await topic.save();
        res.json({data: 'topic removed'})
    } catch(err){
        res.json({error: err})
    }
}

async function getAllTopics(req, res){
    try {
        const topics = await Topic.find({});        
        res.status(200).json({topics})
    } catch(err){

    }
}

async function getUserTopics(req, res){
    try {
        const searchList = await Topic.find({});
        let topics = [];
        searchList.forEach(function(topic) {
            if (topic.user == req.user._id) {
                topics.push(topic);
                topics.sort();
            }
        })
        res.status(200).json({topics})
    } catch(err){

    }
}

