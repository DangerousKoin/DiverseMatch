const Topic = require('../models/topic');
const { v4: uuidv4 } = require('uuid');
const S3 = require('aws-sdk/clients/s3');
const s3 = new S3(); // initialize the construcotr

module.exports = {
    addInterest,
    addDislike
}


async function addInterest(req, res){
    try {
        console.log("interest to add", req.body)
    } catch(err){
        return res.status(401).json(err)
    }
}
  
async function addDislike(req, res){
    try {
        console.log(req.body)
    } catch(err){
        return res.status(401).json(err)
    }
}