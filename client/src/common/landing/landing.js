import 'angular';
import 'components/auth/login/login';

const landingComponent = {
    templateUrl: 'common/landing/landing.html'
};

const stateConfig = ($stateProvider) => {
    const landing = {
        name: 'app.landing',
        url: '/',
        template: '<landing></landing>'
    };

    $stateProvider
        .state(landing);
};

const landing = angular
    .module('landing', [])
    .component('landing', landingComponent)
    .config(stateConfig)
    .name;

export default landing;
