(function(){
  'use strict';

  function bsBook(){
    return {
      restrict: 'E',
      templateUrl: 'templates/book.html',
      scope: {
        book: '='
      }
    };
  }

  angular.module('bookstore').directive('bsBook', bsBook);
})();
