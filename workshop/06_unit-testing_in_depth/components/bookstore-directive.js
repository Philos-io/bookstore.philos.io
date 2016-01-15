(function(){
  'use strict';

  function shell(){
    return {
      restrict: 'E',
      templateUrl: 'templates/bookstore.html'
    };
  }

  angular.module('bookstore').directive('bookstore', shell);
})();
