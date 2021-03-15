const Topic = require('../models/topic');
const User = require('../models/user');
const { v4: uuidv4 } = require('uuid');
const S3 = require('aws-sdk/clients/s3');
const s3 = new S3(); // initialize the construcotr

module.exports = {
    addInterest,
    addDislike,
    getInterests,
    getDislikes
}

async function addInterest(req, res){
    try {
        const topic = await Topic.findById(req.params.id);
        const user = await User.findById(req.user._id);
        user.interests.push(topic);
        user.save();
        res.json({data: 'interest added'})
    } catch(err){
        res.json({error: err})
    }
}

async function addDislike(req, res){
    try {
        const topic = await Topic.findById(req.params.id);
        const user = await User.findById(req.user._id);
        user.dislikes.push(topic);
        user.save();
        res.json({data: 'dislike added'})
    } catch(err){
        res.json({error: err})
    }
}

async function getInterests(req, res){
    try {
        const searchList = await Topic.find({});
        const user = await User.findById(req.user._id);
        const userInterests = user.interests;
        const interests = [];
        if (user._id == req.user._id) {
        searchList.forEach(function(topic) {
            if (topic)
            interests.push(topicMatch);
            interests.sort();
            console.log("backend interests", interests)
        })
    }
        res.status(200).json({interests})
    } catch(err){

    }
}

async function getDislikes(req, res){
    try {
        
        const user = await User.findById(req.user._id);
        const userDislikes = await user.dislikes.find({});
        const dislikes = [];
        userDislikes.forEach(function(topic) {
            let topicMatch = Topic.findById(topic._id);
            if (user == req.user._id) {
                dislikes.push(topicMatch);
                dislikes.sort();
            }
        })
        res.status(200).json({dislikes})
    } catch(err){

    }
}

