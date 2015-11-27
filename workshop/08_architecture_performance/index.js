import angular, {module, bootstrap} from 'angular';

import './modules/routes';
import './modules/core';
import './modules/book';

module('bookstore', ['bookstore.routes', 'bookstore.core', 'bookstore.book']);

bootstrap(document.body, ['bookstore']);

