import addBook from './book-add.html';
import BookAddController from './book-add-controller';

export default function bsAddBook(){
  return {
    restrict: 'E',
    template: addBook,
    controller: BookAddController,
    controllerAs: 'book'
  };
}

