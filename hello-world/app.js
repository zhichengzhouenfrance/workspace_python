const request =  require("request");

app = (encodedAddress, callback) => {
  // const promise = new Promise((resolve, reject) => {
  //   request({
  //     url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
  //     json: true
  //   }, (error, response, body) => {
  //     if (error) {
  //       reject('Unable to connect to Google servers.');
  //     } else if (body.status === 'ZERO_RESULTS') {
  //       reject('Unable to find that address.');
  //     } else if (body.status === 'OK') {
  //       resolve({
  //         address: body.results[0].formatted_address,
  //         latitude: body.results[0].geometry.location.lat,
  //         longitude: body.results[0].geometry.location.lng
  //       });
  //     }
  //   });
  // });

  var address= {};

  request({
      url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
      json: true
    }, (error, response, body) => {
      if (error) {
        console.log(error);
      } else if (body.status === 'ZERO_RESULTS') {
        console.log('Unable to find that address.');
      } else if (body.status === 'OK') {
        address = {
          address: body.results[0].formatted_address,
          latitude: body.results[0].geometry.location.lat,
          longitude: body.results[0].geometry.location.lng
        };
      }
    });

  return  (x , y) => {
      callback(address)
  }
}

var then = app('rue henri coudert eaubonne', (user)=> {
  user.sex = 'male';
  console.log(user);
});

setTimeout(() => {
  then();

}, 1500);
