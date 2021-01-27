const Topic = require('../models/topic');

module.exports = {
  search
};

async function search(req, res){
    try {
        console.log("search controller keyword ", req._parsedUrl.query);
        const searchResults = await Topic.find({title: req._parsedUrl.query});
        console.log("controller searchResults ", searchResults); 
        res.status(201).json({searchResults: searchResults})
    } catch(err){
      return res.status(401).json(err)
    }
  }