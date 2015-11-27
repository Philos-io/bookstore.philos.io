import book from './book.html';

export default function bsBook(){
  return {
    restrict: 'E',
    template: book,
    scope: {
      book: '='
    }
  };
}

