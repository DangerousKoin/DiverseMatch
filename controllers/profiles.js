const Topic = require('../models/topic');
const User = require('../models/user');
const { v4: uuidv4 } = require('uuid');
const S3 = require('aws-sdk/clients/s3');
const s3 = new S3(); // initialize the construcotr

module.exports = {
    addInterest,
    addDislike
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
        console.log(req.body)
    } catch(err){
        return res.status(401).json(err)
    }
}

