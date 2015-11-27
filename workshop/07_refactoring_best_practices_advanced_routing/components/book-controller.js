(function(){
  'use strict';

  function BookController($log, BookService){
    $log.debug('BookController is starting');

    var self = this;

    BookService.getBooks()
      .then(function(response){
        self.books = response.data;
      })
      .catch(function(error){
        $log.debug('something is broken', error);
      });
  }

  BookController.$inject = ['$log', 'BookService'];

  angular.module('bookstore').controller('BookController', BookController);

})();
