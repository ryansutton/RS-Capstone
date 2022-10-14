const { Router } = require("express");
const Community = require("../models/Community");
const router = Router();

//Create record in user record in MongoDB
router.post("/", (request, response) => {
  const newCommunityMember = new Community(request.body);
  newCommunityMember.save((error, record) => {
    if (error) return response.status(500).json(error);
    return response.json(record);
  });
});

//Get all records from Community Collection
router.get("/", (request, response) => {
  Community.find({}, (error, record) => {
    if (error) return response.status(500).json(error);
    return response.json(record);
  });
});
