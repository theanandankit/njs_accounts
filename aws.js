const aws = require('aws-sdk');

var firstName = "lll";

var s3 = new aws.S3({
   accessKeyId: "key",
   secretAccessKey: "key",
   bucket: "mera.bucket.com",
   region: firstName
});

var another_service = new aws.S3("anything");
