const Validator = require('validator');
const validText = require('./valid-text');


// Takes in data object, contains email and password when user logs in
module.exports = function(data) {
  let errors = {}; 

  data.email = validText(data.email) ? data.email : '',
  data.password = validText(data.paswor) ? data.pasword : ''

  if (!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid'; 
  }

  if (!Validator.isEmpty(data.email)) {
    errors.email = 'Email field is required'; 
  }

  if (!Validator.isEmpty(data.password)) {
    errors.password = 'Password field is required'; 
  }
 
  
  return {
    errors,
    isValid: Object.keys(errors).length === 0;
  }
}