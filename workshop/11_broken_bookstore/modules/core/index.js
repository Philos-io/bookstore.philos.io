import angular, {module} from 'angular';

import bookstore from './bookstore-directive';
import configuration from './configuration';
import bsHeader from './header-directive';
import bsFooter from './footer-directive';
import NavController from './nav-controller';

module('bookstore.core', [])
  .directive('bookstore', bookstore)
  .directive('bsHeader', bsHeader)
  .directive('bsFooter', bsFooter)
  .controller('NavController', NavController)
  .config(configuration);
