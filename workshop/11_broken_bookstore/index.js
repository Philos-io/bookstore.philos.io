import angular, {module, bootstrap} from 'angular';

import './modules/routes';
import './modules/core';

module('bookstore', ['bookstore.routes', 'bookstore.core', 'bookstore.book']);


