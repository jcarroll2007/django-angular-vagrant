const loginForm = {
    templateUrl: 'components/auth/landing/landing.html'
};

const login = angular
    .module('auth.login', [])
    .component('loginForm', loginForm);

export default login;