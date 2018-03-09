const axios = require('axios');

axios.get('https://localhost:8443')
  .then(function(response){
    console.log(response.data); // ex.: { user: 'Your User'}
    console.log(response.status); // ex.: 200
  }).catch(function(e){
  	console.log("error:-", e.message)
  });