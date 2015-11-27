import angular, {module} from 'angular';

import BookDetailsController from './book-details-controller';
import AddBookController from './add-book-controller';
import BookController from './book-controller';
import BookService from './book-service';
import bsBook from './book-directive';
import bsBooks from './books-directive';
import bsBookAdd from './book-add-directive';
import bsBookDetails from './book-details-directive';


module('bookstore.book', [])
  .controller('BookDetailsController', BookDetailsController)
  .controller('AddBookController', AddBookController)
  .controller('BookController', BookController)
  .service('BookService', BookService)
  .directive('bsBook', bsBook)
  .directive('bsBooks', bsBooks)
  .directive('bsBookDetails', bsBookDetails)
  .directive('bsBookAdd', bsBookAdd)
