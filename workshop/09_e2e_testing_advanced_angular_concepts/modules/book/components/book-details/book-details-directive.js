import bookDetails from './book-details.html';

export default function bsBookDetails(){
  return {
    restrict: 'E',
    template: bookDetails,
    controller: 'BookDetailsController',
    controllerAs: 'book'
  };
}

