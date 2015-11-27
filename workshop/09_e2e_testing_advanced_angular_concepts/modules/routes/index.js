import angular, {module} from 'angular';
import 'angular-route';
import routes from './route-config';

module('bookstore.routes', ['ngRoute']).config(routes);

