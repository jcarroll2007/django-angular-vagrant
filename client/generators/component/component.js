import 'angular';

import '<%= path %>/<%= name %>.scss';

class <%= name %>ComponentController {
    constructor() {

    }
}

const <%= name %>Component = {
    templateUrl: '<%= path %>/<%= name %>.html',
    controller: <%= name %>ComponentController
};

const stateConfig = ($stateProvider) => {
    const <%= name %> = {
        name: '<%= state %>',
        url: '/<%= name %>',
        template: '<<%= name %>></<%= name %>>'
    };

    $stateProvider
        .state(<%= name %>);
};

const <%= name %> = angular
    .module('<%= moduleName %>', [])
    .component('<%= name %>', <%= name %>Component)
    .config(stateConfig)
    .name;

export default <%= name %>;