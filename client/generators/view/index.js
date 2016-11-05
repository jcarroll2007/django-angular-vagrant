import 'angular';
import 'angular-ui-router';

import config from './<%= name %>.config.js';

import './_<%= name %>.scss';

export default angular
    .module('<%= moduleName %>', [
        'ui.router'
    ])
    .config(config)
    .name;