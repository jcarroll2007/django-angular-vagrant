import 'angular';

import 'common/users/list/list.scss';

class listComponentController {
    constructor() {

    }
}

const listComponent = {
    templateUrl: 'common/users/list/list.html',
    controller: listComponentController
};

const stateConfig = ($stateProvider) => {
    const list = {
        name: 'users.list',
        url: '/list',
        template: '<list></list>'
    };

    $stateProvider
        .state(list);
};

const list = angular
    .module('users.list', [])
    .component('list', listComponent)
    .config(stateConfig)
    .name;

export default list;