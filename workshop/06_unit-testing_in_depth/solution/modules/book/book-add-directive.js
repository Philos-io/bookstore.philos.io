import addBook from './add-book.html';

export default function bsAddBook(){
  return {
    restrict: 'E',
    template: addBook,
    controller: 'AddBookController',
    controllerAs: 'book'
  };
}

