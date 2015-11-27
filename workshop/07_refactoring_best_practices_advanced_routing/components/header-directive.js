(function(){
  'use strict';

  function bsHeader(){
    return {
      restrict: 'E',
      templateUrl: 'templates/header.html'
    };
  }

  angular.module('bookstore').directive('bsHeader', bsHeader);
})();
