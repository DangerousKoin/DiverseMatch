const Topic = require('../models/topic');
const User = require('../models/user');

module.exports = {
    addInterest,
    deleteInterest,
    addDislike,
    deleteDislike,
    getInterests,
    getDislikes,
    getMatches
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

async function deleteInterest(req, res){
    try {
        const user = await User.findById(req.user._id);
        let userInterests = user.interests;
        userInterests.forEach(function(interest){
            if (interest._id == req.params.id){
                user.interests.remove(interest);
                user.save();
            }
        })
        res.json({data: 'interest removed'})
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

async function deleteDislike(req, res){
    try {
        const user = await User.findById(req.user._id);
        let userDislikes = user.dislikes;
        userDislikes.forEach(function(dislike){
            if (dislike._id == req.params.id){
                console.log("true", dislike)
                user.dislikes.remove(dislike);
                user.save();
            }
        })
        res.json({data: 'dislike removed'})
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

async function getMatches(req, res){
    try {
        const searchList = await User.find({});
        const user = await User.findById(req.user._id);
        const userInterests = user.interests;
        let matches = [];
        let prevMatch = [];
        
        if (user._id == req.user._id) {
            searchList.forEach(function(match) {
                match.matchScore = 1;
                let matchInterests = match.interests;
                matchInterests.forEach(function(matchInterest) {
                    userInterests.forEach(function(interest) {
                        if (matchInterest._id.toString() == interest._id.toString()) {
                            
                            if (match == prevMatch) {
                                match.matchScore = match.matchScore + 1;
                                
                                prevMatch = match;
                            } else {
                                matches.push(match);
                                prevMatch = match;
                                
                            }
                        }
                    })
                })
            })
            matches.sort(function(a, b){
                if (a.matchScore < b.matchScore) return 1;
                if (a.matchScore > b.matchScore) return -1;
                return 0;
            })
        }
        res.status(200).json({matches})
    } catch(err){

    }
}

