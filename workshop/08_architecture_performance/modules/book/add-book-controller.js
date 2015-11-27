export default function AddBookController($log, BookService, $location){
  $log.debug('AddBookController is starting');

  if(!BookService.covers){
    BookService.getCovers()
    .then((response) =>{
      this.covers = response.data;
    })
    .catch(function(error){
      $log.debug('something is broken', error);
    });
  }else{
    this.covers = BookService.covers;
  }


  this.add = function(){
    BookService.addBook(this)
    .then((response) =>{
      $location.path('/');
    })
    .catch((error) =>{
      $log.error(error);
    });
  };
}

AddBookController.$inject = ['$log', 'BookService', '$location'];

