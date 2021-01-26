const Topic = require('../models/topic');

module.exports = {
  search
};

async function search(req, res){
    try {
        console.log("search controller req.body ", req.body);
      const searchResults = await Topic.find({title: req.body.keyword});
      console.log("controller searchResults ", searchResults);
      console.log("controller res ", res); 
      // try this after working- description: req.body.keyword 
      // ok... so this is where we find by something...
      res.status(201).json({searchResults: searchResults})
    } catch(err){
      return res.status(401).json(err)
    }
  }