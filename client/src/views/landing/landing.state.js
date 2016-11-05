import controller from './landing.controller.js';
import template from './landing.html';

export default {
    name: 'landing',
    url: '/landing',
    controller,
    controllerAs: 'landing',
    parent: 'app',
    
    template
};