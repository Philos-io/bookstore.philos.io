export default function BookController($log, BookService){
  $log.debug('BookController is starting');

  BookService.getBooks()
  .then((response) =>{
    this.books = response.data;
  })
  .catch((error) =>{
    $log.debug('something is broken', error);
  });
}

BookController.$inject = ['$log', 'BookService'];

