const Topic = require('../models/topic');
const User = require('../models/user');

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
            userInterests.forEach(function(interest){
                searchList.forEach(function(topic) {
                if (topic._id.toString() == interest._id.toString()) {
                    interests.push(topic);
                    interests.sort();
                }
            })
        })
    }
        res.status(200).json({interests})
    } catch(err){

    }
}

async function getDislikes(req, res){
    try {
        const searchList = await Topic.find({});
        const user = await User.findById(req.user._id);
        const userDislikes = user.dislikes;
        const dislikes = [];
        if (user._id == req.user._id) {
            userDislikes.forEach(function(dislike){
                searchList.forEach(function(topic) {
                if (topic._id.toString() == dislike._id.toString()) {
                    dislikes.push(topic);
                    dislikes.sort();
                }
            })
        })
    }
        res.status(200).json({dislikes})
    } catch(err){

    }
}

