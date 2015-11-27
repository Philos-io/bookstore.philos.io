import angular, {module} from 'angular';

import BookService from './services/book-service';
import bsBook from './components/book/book-directive';
import bsBooks from './components/books/books-directive';
import bsBookAdd from './components/book-add/book-add-directive';
import bsBookDetails from './components/book-details/book-details-directive';


module('bookstore.book', [])
  .service('BookService', BookService)
  .directive('bsBook', bsBook)
  .directive('bsBooks', bsBooks)
  .directive('bsBookDetails', bsBookDetails)
  .directive('bsBookAdd', bsBookAdd)
