/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, callback) {
  fs.readFile(filePath, 'utf-8', function(err, data) {
    if (err) {
      callback(err, null);
    } else {
      let lines = data.split('\n');
      let firstLine = lines[0];
      callback(null, firstLine);
    }
  });// TODO
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, callback) {
  request(url, function(err, response, body) {
    if (err) {
      err.message = 'Invalid URI';
      callback(err, null);
    } else {
      let statusCode = response.statusCode;
      callback(null, statusCode);
    }// TODO
  });
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
