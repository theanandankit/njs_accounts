const User = require("../models/user.model.js");

// Create and Save a new User
exports.create = function (req, res)  {
    // Validate request
    if (!req.body) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
      }
    
      // Create a User
      const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        phone : req.body.phone,
        password : req.body.password,
        dob : req.body.dob,
      });
    
      // Save User in the database
      User.create(user, function (err, data) {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the User."
          });
        else res.send(data);
      });
};

// Retrieve all Users from the database (with condition).
exports.findAll = function (req, res)  {
    const firstName = req.query.firstName;

  User.getAll(firstName, function (err, data) {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Users."
      });
    else res.send(data);
  });
};

// Find a single User with a id
exports.findOne = function (req, res)  {
    User.findById(req.params.id, function (err, data) {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found User with id ${req.params.id}.`
            });
          } else {
            res.status(500).send({
              message: "Error retrieving User with id " + req.params.id
            });
          }
        } else res.send(data);
      });  
};

// Update a User identified by the id in the request
exports.update = function (req, res) {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  console.log(req.body);

  User.updateById(
    req.params.id,
    new User(req.body),
    function (err, data) {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found User with id ${req.params.id}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating User with id " + req.params.id
          });
        }
      } else res.send(data);
    }
  );  
};
