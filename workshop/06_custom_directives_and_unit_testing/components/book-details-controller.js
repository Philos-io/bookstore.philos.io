(function(){
  'use strict';

  function BookDetailsController($route, BookService){
    var self = this;

    BookService.getBook($route.current.params.id)
      .then(function(response){
        angular.extend(self, response.data);
      })
      .catch(function(error){
      });
  }

  BookDetailsController.$inject = ['$route', 'BookService'];

  angular.module('bookstore').controller('BookDetailsController', BookDetailsController);
})();
