//fetch api

var searchInput = $("#search-input");

function getApi(query, format) {
  var location = searchInput.val();

  var requestUrl = `https://api.spacexdata.com/v4/launchpads`;

  console.log("url", requestUrl);

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log("data", data);
    });
}

getApi();
