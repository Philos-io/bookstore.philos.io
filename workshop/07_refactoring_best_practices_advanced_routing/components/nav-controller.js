(function(){
  'use strict';

  function NavController($scope){
    $scope.title = "Book Store";
  }

  NavController.$inject = ['$scope'];

  angular.module('bookstore').controller('NavController', NavController);

})();
