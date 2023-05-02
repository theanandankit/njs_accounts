const google = require('googleapis');
// export const authObj = new google.auth.GoogleAuth({
//   keyFile: 'path/to/your/credentials.json',
//   scopes: ['https://www.googleapis.com/auth/drive'],
// });

const creditCardNumber =  "XWXX-2324-KJHH";

const accountDetails = {
    "ccN": creditCardNumber
};

// const { google } = require('googleapis');
// Create a new instance of the Drive API
export const driveObj = google.drive([accountDetails], {version: 'v3', auth });


// // Define the parameters for the Drive API request
// const fileMetadata = {
//   name: 'My Test File',
//   mimeType: 'text/plain',
// };
// const media = {
//   mimeType: 'text/plain',
//   body: 'Hello, world!',
// };

// // Upload the file to Google Drive
// drive.files.create(
//   {
//     resource: fileMetadata,
//     media: media,
//     fields: 'id',
//   },
//   (err, file) => {
//     if (err) {
//       // Handle error
//       console.error(err);
//     } else {
//       console.log(`File ID: ${file.data.id}`);
//     }
//   }
// );
