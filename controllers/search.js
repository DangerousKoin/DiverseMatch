const Topic = require('../models/topic');

module.exports = {
  search
};

async function search(req, res){
    try {
      const searchResults = await Topic.find({title: req.body.keyword});
      console.log("controller searchResults ", searchResults); 
      // try this after working- description: req.body.keyword 
      // ok... so this is where we find by something...
      res.status(200).json({searchResults: searchResults})
    } catch(err){
      return res.status(401).json(err)
    }
  }