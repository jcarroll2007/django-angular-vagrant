import 'angular';
import 'angular-ui-router';

import config from './landing.config.js';

import './_landing.scss';

export default angular
    .module('landing', [
        'ui.router'
    ])
    .config(config)
    .name;