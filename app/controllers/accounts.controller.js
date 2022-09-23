const User = require("../models/user.model.js");
const { WebClient } = require('@slack/web-api');
const sgMail = require('@sendgrid/mail');
const http = require('node:http');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);
// Read a token from the environment variables
const token = process.env.SLACK_TOKEN;
// Initialize
const web = new WebClient(token);

// Given some known conversation ID (representing a public channel, private channel, DM or group DM)
const conversationId = '...';

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

      sendSlackMessage({
        text: 'New user ' + user.email + ' ' + user.firstName + ' ' + user.phone + ' ' + user.dob,
        channel: conversationId,
      });

      const msg = {
        to: user.email,
        from: 'test@example.com', // Use the email address or domain you verified above
        subject: 'Welcome note',
        text: 'Some message ' + user.firstName + user.password,
        html: '<strong>and easy to do anywhere, even with Node.js</strong>',
      };
      sendEmail(msg);
      sendInternalEvent({
        event: "signup",
        data: " new signup " + user.email + ' ' + user.firstName + ' ' + user.phone + ' ' + user.dob
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

  sendInternalEvent({
    event: "search_users",
    data: " Fetch results by firstname " + firstName
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
        web.chat.postMessage({
          text: 'Fetch user details ' + data.email + ' ' + data.firstName + ' ' + data.phone + ' ' + data.dob,
          channel: conversationId,
        });
        sendInternalEvent({
          event: "fetch_user",
          data: "User data fetched" + data.email + ' ' + data.firstName + ' ' + data.phone + ' ' + data.dob
        });        
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
      web.chat.postMessage({
        text: 'User details updated ' - data.email + ' ' + data.firstName + ' ' + data.phone + ' ' + data.dob,
        channel: conversationId,
      });   
      sendInternalEvent({
        event: "user_update",
        data: "User data updated" + data.email + ' ' + data.firstName + ' ' + data.phone + ' ' + data.dob
      });          
    }
  );  
};

function sendEmail(msg){
  sgMail.send(msg).then(() => {}, error => {
    console.error(error);

    if (error.response) {
      console.error(error.response.body)
    }
});
}

function sendSlackMessage(msg){
  web.chat.postMessage(msg);
}

function sendInternalEvent(postdata){

  const data = JSON.stringify(postdata);
  const options = {
    hostname: 'http://localhost:8080',
    port: 80,
    path: '/event',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(data)
    }
  };

  const req = http.request(options, (res) => {
    console.log(`STATUS: ${res.statusCode}`);
    console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
    res.setEncoding('utf8');
    res.on('data', (chunk) => {
      console.log(`BODY: ${chunk}`);
    });
    res.on('end', () => {
      console.log('No more data in response.');
    });
  });

  req.on('error', (e) => {
    console.error(`problem with request: ${e.message}`);
  });

  req.write(data);
  req.end();

}