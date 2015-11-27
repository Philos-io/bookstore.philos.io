(function(){
  'use strict';

  function routes($routeProvider){
    $routeProvider
    .when('/', {
      controller: 'BookController',
      controllerAs: 'model',
      templateUrl: 'templates/search-book.html'
    })
    .when('/books/add', {
      controller: 'AddBookController as book',
      templateUrl: 'templates/add-book.html'
    })
    .when('/books/:id', {
      controller: 'BookDetailsController',
      controllerAs: 'book',
      templateUrl: 'templates/book-details.html'
    });
  }


  angular.module('bookstore').config(routes);

})();
