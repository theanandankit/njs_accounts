const accountId = 342332;
// Define the API endpoint URL
const apiUrl = `https://fetch.com/todos/${accountId}`;

// Make an API request using Fetch
fetch(apiUrl)
  .then((response) => {
    // Handle the response data
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    // Handle the error
    console.error(error);
  });
