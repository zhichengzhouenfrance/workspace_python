const request  = require('request');

request({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=4%20rue%20henri%20coudert%20eaubonne%20paris',
    json: true
}, (error, response, body) =>  {
    console.log(JSON.stringify(body, null, 3));
});