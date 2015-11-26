(function(){
  'use strict';

  function BookService($http){
    this.getBooks = function(){
      return $http.get('http://localhost:9000/api/books');
    };

    this.getBook = function(id){
      var url = 'http://localhost:9000/api/books/'+id;
      return $http.get(url);
    };

    this.deleteBook = function(id){};

    this.addBook = function(book){
      return $http.post('http://localhost:9000/api/books', book);
    };

    this.getCovers = function(){
      return $http.get('http://localhost:9000/api/books/covers');
    };
  }

  BookService.$inject = ['$http'];

  angular.module('bookstore').service('BookService', BookService);

})();
