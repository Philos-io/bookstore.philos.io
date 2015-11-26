(function(){
  'use strict';

  function routes($routeProvider){
    $routeProvider
    .when('/', {
      template: '<bdp-books></bdp-books>'
    })
    .when('/books/add', {
      template: '<'
    })
    .when('/books/:id', {
    });
  }


  angular.module('bookstore').config(routes);

})();
