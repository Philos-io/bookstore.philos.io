(function(){
  'use strict';

  angular.module('bookstore', ['ngRoute']);

  angular.element(document).ready(function(){
    angular.bootstrap(document.body, ['bookstore']);
  });

})();

