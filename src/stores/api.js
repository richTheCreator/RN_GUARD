// for testing on iPhone
// const API_URL = 'http://192.168.1.66:3000/d';
// const API_URL_AUTH = 'http://192.168.1.66:3000/d/main';

// for testing in browser
const API_URL_AUTH = 'http://localhost:3000/d';

// SIGNIN/SIGN UP ROUTES
exports.SIGNIN_URL = `${API_URL_AUTH}/signin`;
exports.SIGNUP_URL = `${API_URL_AUTH}/signup`;
exports.SUPER_SECRET_API = `${API_URL_AUTH}/secure`;
