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
        const userDislikes = user.dislikes;
        const userInterests = user.interests;
        const matches = 0;
        searchList.forEach(function(match){
            if (match) {
                matches++;

            }
        })
        console.log("list length", matches)
        if (user._id == req.user._id) {
            searchMismatches()
            function searchMismatches() {
                searchList.forEach(function(match) {
                    let matchDislikes = match.dislikes;
                    let matchInterests = match.interests;
                    matchDislikes.forEach(function(matchDislike) {
                        userInterests.forEach(function(interest) {
                            matchInterests.forEach(function(matchInterest) {
                                userDislikes.forEach(function(dislike) {
                                    if (matchDislike._id.toString() == interest._id.toString()) {
                                        console.log("bingo!");
                                        searchList.remove(match);
                                        searchMistatches();
                                    } else if (matchInterest._id.toString() == dislike._id.toString()) {
                                        console.log("boingo!");
                                        searchList.remove(match);
                                        searchMistatches();
                                        
                                    } else {
                                        searchList.save();
                                    }
                                })
                            })
                        })
                    })
                })
            }
            
        }
        console.log("search list", searchList);
        res.status(200).json({searchList})
    } catch(err){

    }
}

