var getUser = (id, callback) => {
  var user = {
    id,
    name: 'zhou'
  };
  setTimeout(() => {
      callback(user);
  }, 2000);

};

getUser(45, (user) => {
  console.log(user);
});
