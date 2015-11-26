(function(){
  'use strict';

  function BookController($scope, $log, BookService){
    $log.debug('BookController is starting');

    BookService.getBooks()
      .then(function(response){
        $scope.books = response.data;
      })
      .catch(function(error){
        $log.debug('something is broken', error);
      });
  }

  BookController.$inject = ['$scope', '$log', 'BookService'];

  angular.module('bookstore').controller('BookController', BookController);

})();
