const aws = require('aws-sdk');
import boto3

var firstName = "lll";

var s3 = new aws.S3({
   accessKeyId: "key",
   secretAccessKey: "key",
   bucket: "mera.bucket.com",
   region: firstName
});

var another_service = new aws.S3("anything");

boto3.upload_file(
   filename = "anything",
   Bucket = "mera-bucket",
   Key = "key"
)
