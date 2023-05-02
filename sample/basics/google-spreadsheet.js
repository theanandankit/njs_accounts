// import { GoogleSpreadsheet } from 'google-spreadsheet';

// async function readSpreadsheet() {
//   // Load the credentials from the JSON key file
//   const creds = require('./google-creds.json');

//   // Load the spreadsheet using the ID
//   const doc = new GoogleSpreadsheet('SPREADSHEET_ID');

//   // Authenticate with the Google API using the credentials
//   await doc.useServiceAccountAuth({
//     client_email: creds.client_email,
//     private_key: creds.private_key,
//   });

//   // Load the sheet by its name or index
//   await doc.loadInfo(); // loads document properties and worksheets
//   const sheet = doc.sheetsByIndex[0]; // or doc.sheetsById[id] or doc.sheetsByTitle[title]

//   // Read data from the sheet
//   const rows = await sheet.getRows(); // gets all rows
//   console.log(rows);
// }

// readSpreadsheet();
