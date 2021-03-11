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
        console.log("hello")
        const user = await User.findById(req.user._id);
        const userInterests = await user.interests.find({});
        let interestList = [];
        userInterests.forEach(function(topic) {
            console.log("interest topic", topic);
            const topicMatch = Topic.findById(topic._id)
            console.log("topic match", topicMatch);
            if (user == req.user._id) {
                interestList.push(topicMatch);
                interestList.sort();
            }
        })
        res.status(200).json({interestList})
    } catch(err){

    }
}

async function getDislikes(req, res){
    try {
        
        const user = await User.findById(req.user._id);
        const userDislikes = await user.dislikes.find({});
        let dislikeList = [];
        userDislikes.forEach(function(topic) {
            const topicMatch = Topic.findById(topic._id)
            console.log("topic match", topicMatch);
            if (user == req.user._id) {
                dislikeList.push(topicMatch);
                dislikeList.sort();
            }
        })
        res.status(200).json({dislikeList})
    } catch(err){

    }
}

