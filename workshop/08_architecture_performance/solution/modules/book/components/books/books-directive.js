import booksTemplate from './search-book.html';
import BookController from './books-controller';

export default function bsBooks(){
  return {
    restrict: 'E',
    template: booksTemplate,
    controller: BookController,
    controllerAs: 'model'
  };
}

