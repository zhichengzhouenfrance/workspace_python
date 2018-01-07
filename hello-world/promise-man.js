const request = require('request');

function PromiseMan (fn) {
  var state  = 'pending',
      value = null,
      callbacks = [];

      this.then = (onFullFilled) => {
        if(state == 'pending') {
          callbacks.push(onFullFilled);
          return this;
        }
        onFullFilled(value);
        return this;
      }

      function resolve(newValue) {
       value = newValue;
       state = 'fulfilled';
       setTimeout(function () {
           callbacks.forEach(function (callback) {
               callback(value);
           });
       }, 0);
   }

   fn(resolve);
}

var encodedAddress= encodeURIComponent('rue henri coudert');
var promise = new PromiseMan((resolve) => {
  request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
    json: true
  }, (error, response, body) => {
    if (error) {

    } else if (body.status === 'ZERO_RESULTS') {

    } else if (body.status === 'OK') {
      resolve({
        address: body.results[0].formatted_address,
        latitude: body.results[0].geometry.location.lat,
        longitude: body.results[0].geometry.location.lng
      });
    }
  });
});
promise.then((value)=>{
  console.log(value)
})
