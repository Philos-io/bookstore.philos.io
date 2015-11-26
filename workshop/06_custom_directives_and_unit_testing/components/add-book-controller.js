(function(){
  'use strict';

  function AddBookController($log, BookService, $location){
    $log.debug('AddBookController is starting');

    var self = this;

    if(!BookService.covers){
      BookService.getCovers()
        .then(function(response){
          BookService.covers = response.data;
          self.covers = response.data;
        })
        .catch(function(error){
          $log.debug('something is broken', error);
        });
    }else{
      this.covers = BookService.covers;
    }


    this.add = function(){
      BookService.addBook(this)
        .then(function(response){
          $location.path('/');
        })
        .catch(function(error){
          $log.error(error);
        });
    };
  }

  AddBookController.$inject = ['$log', 'BookService', '$location'];

  angular.module('bookstore').controller('AddBookController', AddBookController);

})();
