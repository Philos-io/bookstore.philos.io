(function(){
  'use strict';

  function routes($routeProvider){
    $routeProvider
    .when('/', {
      controller: 'BookController',
      templateUrl: 'templates/books.html'
    })
    .when('/books/add', {
      controller: 'BookController',
      templateUrl: 'templates/add-book.html'
    })
    .when('/books/:id', {
      controller: 'BookController',
      templateUrl: 'templates/book-details.html'
    });
  }


  angular.module('bookstore').config(routes);

})();
