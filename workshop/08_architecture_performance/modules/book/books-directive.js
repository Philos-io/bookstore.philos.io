import books from './search-book.html';

export default function bsBooks(){
  return {
    restrict: 'E',
    template: books,
    controller: 'BookController',
    controllerAs: 'model'
  };
}

