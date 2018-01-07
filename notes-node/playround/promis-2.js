const request = require('request');

var getGeoCodeFromAdresse =  (adresse) => {
    return new Promise((resolve, reject) => {


        request({
            url: `https://maps.googleapis.com/maps/api/geocode/jsons?address=${}`,
            json: true
                })
    });
}