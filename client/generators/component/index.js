import 'angular';

import <%= _.camelCase(name) %> from './<%= name %>.component.js';

import './_<%= name %>.scss';

export default angular
    .module('<%= moduleName %>', [])
    .component('<%= _.camelCase(name) %>', <%= _.camelCase(name) %>)
    .name;