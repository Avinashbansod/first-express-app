const request = require("request");

 var getData = (geocode) => {
  return new Promise((resolve, reject) => {
    request(
      {
        url: `https://www.metaweather.com/api/location/search/?${encodeURI(geocode)}`,
        json: true
      },
      (error, response, body) => {
        if(response.statusCode === 200)
            resolve(body)
        else
            reject('Invalid request');
      }
    );
  });
}


module.exports = {
  getLocation: getData
};
