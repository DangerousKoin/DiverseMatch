const Topic = require('../models/topic');
const { v4: uuidv4 } = require('uuid');
const S3 = require('aws-sdk/clients/s3');
const s3 = new S3(); // initialize the construcotr

module.exports = {
    addInterest,
    addDislike
}



async function addDislike(req, res){
    try {
        console.log(req.body)
    } catch(err){
        return res.status(401).json(err)
    }
}

async function addInterest(req, res){
    try {
        const topic = await Topic.findById(req.params.id);
        req.user.interests.push(topic);
        res.json({data: 'interest added'})
    } catch(err){
        res.json({error: err})
    }
}