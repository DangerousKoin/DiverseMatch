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
        const matches = [];
        if (user._id == req.user._id) {
            console.log("herrroooo!!!!", searchList)

            searchList.forEach(function(match) {

                let matchDislikes = match.dislikes;
                matchDislikes.forEach(function(matchDislike) {
                    userInterests.forEach(function(interest){
                        if (matchDislike == interest) {
                            console.log("bingo!")
                            searchList.remove(match);
                            }
                        })
                })
                searchList.save()
            })
                // First we checked the match dislikes against each user's interests, if found the match is removed.
                // Next we check if any of the remaining matches have dislikes of the user's interests and remove them.
            searchList.forEach(function(match) {
                let matchInterests = match.interests;
                matchInterests.forEach(function(matchInterest) {
                    userDislikes.forEach(function(dislike){
                        if (matchInterest == dislike) {
                            console.log("boingo!")
                            searchList.remove(match);
                            }
                        })
                })
                searchList.save();
            })
                // Matches with dislikes are now removed from search list to reduce iteration time.
                // Next we find users with the highest amount of Interests and Dislikes that match.
            searchList.forEach(function(match) {
                let matchInterests = match.interests;
                let matchDislikes = match.dislikes;
                let iCount = 0;
                let dCount = 0;
                userInterests.forEach(function(interest){
                    matchInterests.forEach(function(matchInterest){
                        if (matchInterest == interest) {
                            iCount++
                            matches.push([match, iCount]);
                        }
                    })
                })
                userDislikes.forEach(function(dislike){
                    matchDislikes.ForEach(function(matchDislike){
                        if (matchDislike == dislike) {
                            dCount++
                            matches.push([match, dCount]);
                        }
                    })
                })
            })
    }
        res.status(200).json({matches})
    } catch(err){

    }
}

