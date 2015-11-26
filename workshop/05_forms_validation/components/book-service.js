(function(){
  'use strict';
  function BookService($http){

    this.getBooks = function(){
      return $http.get('http://localhost:9000/api/books');
    };

    this.getBook = function(id){

    };

    this.deleteBook = function(id){

    };
  }

  // function BookService($q, $timeout){
  //   var books = [{
  //     bookID: 9809,
  //     author: 'Davy Mitchel',
  //     title: 'Functional JavaScript',
  //     description: 'Functional programming in JavaScript',
  //     price: 29.99,
  //     category: 'Programming language',
  //     cover: 'assets/img/javascript.jpg'
  //   },
  //   {
  //     bookID: 9100,
  //     author: 'Max Mitchel',
  //     title: 'AngularJS: Up and Running',
  //     description: 'Enhanced Productivity with Structured Web Apps',
  //     price: 19.99,
  //     category: 'Web Frameworks',
  //     cover: 'assets/img/angularjs.jpg'
  //   }];
  //
  //   this.getBooks = function(){
  //     var defer = $q.defer();
  //
  //     $timeout(function(){
  //       defer.resolve(books);
  //     }, 2000);
  //
  //     return defer.promise;
  //   };
  //
  //   this.getBook = function(id){
  //
  //   };
  //
  //   this.deleteBook = function(id){
  //
  //   };
  // }


  BookService.$inject = ['$http'];

  angular.module('bookstore').service('BookService', BookService);

})();
