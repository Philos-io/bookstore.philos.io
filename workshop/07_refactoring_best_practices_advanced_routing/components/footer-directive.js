(function(){
  'use strict';

  function bsFooter(){
    return {
      restrict: 'E',
      templateUrl: 'templates/footer.html'
    };
  }

  angular.module('bookstore').directive('bsFooter', bsFooter);
})();
