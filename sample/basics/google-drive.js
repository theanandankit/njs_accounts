const google = require('googleapis');

const creditCardNumber =  "XWXX-2324-KJHH";

const accountDetails = {
    "ccN": creditCardNumber
};

// Create a new instance of the Drive API
export const driveObj = google.drive([accountDetails], {version: 'v3', auth });

export const authObj = new google.auth.GoogleAuth({
    keyFile: 'path/to/your/credentials.json',
    scopes: ['https://www.googleapis.com/auth/drive', accountDetails.ccN],
});
