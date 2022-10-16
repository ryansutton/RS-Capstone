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

// Get a single record by ID using a query parameter
router.get("/:id", (request, response) => {
  Community.findById(request.params.id, (error, record) => {
    if (error) return response.status(500).json(error);
    return response.json(record);
  });
});

router.delete("/:id", (request, response) => {
  Community.findByIdAndRemove(request.params.id, {}, (error, record) => {
    if (error) return response.status(500).json(error);
    return response.json(record);
  });
});

router.put("/:id", (request, response) => {
  const body = request.body;
  Community.findByIdAndUpdate(
    request.params.id,
    {
      $set: {
        // Take note that the customer is not included, so it can't
        name: body.name,
        interests: body.interests,
        email: body.email
      }
    },
    {
      new: true,
      upsert: true
    },
    (error, record) => {
      if (error) return response.status(500).json(error);
      return response.json(record);
    }
  );
});

module.exports = router;
