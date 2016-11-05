import controller from './<%= name %>.controller.js';
import template from './<%= name %>.html';

export default {
    name: '<%= name %>',
    url: '/<%= name %>',
    controller,
    controllerAs: '<%= _.camelCase(name) %>',
    //parent: 'parent-state-name',
    <% if (ribbon === "true") { %>
    data: {
        tool: {
            icon: '#icon-<%= name %>',
            /**
             * Other ribbon options
            order: 0,
            domain: {},
            group: 'Group Name'
            */
        }
    },
    <% } %>
    template
};