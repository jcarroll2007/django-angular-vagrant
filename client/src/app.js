import angular from 'angular';
import uiRouter from 'angular-ui-router';

import Landing from './views/landing';

const AppComponent = {
    template: '<div ui-view></div>'
};

const stateConfig = ($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise('/');

    const app = {
        abstract: true,
        name: 'app',
        template: '<ui-view></ui-view>'
    };

    $stateProvider
        .state(app);
};

const root = angular
    .module('app', [
        uiRouter,
        Landing
    ])
    .component('app', AppComponent)
    .config(stateConfig)
    .name;

export default root;