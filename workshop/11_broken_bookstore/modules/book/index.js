import angular, {module} from 'angular';


module('bookstore.book', [])
  .service('BookService', BookService)
  .directive('bsBook', bsBook)
  .directive('bsBooks', bsBooks)
  .directive('bsBookDetails', bsBookDetails)
  .directive('bsBookAdd', bsBookAdd)
