
import Validator from 'validatorjs';

//  Custom validation rules
//  https://www.npmjs.com/package/validatorjs#register-custom-validation-rules

//  Validator.register(name, callbackFn, errorMessage);


//  Use the html[lang] attribute for validation messages
Validator.useLang(document.documentElement.lang);

export default Validator;
