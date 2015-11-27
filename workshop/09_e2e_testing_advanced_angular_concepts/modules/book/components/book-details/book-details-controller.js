export default function BookDetailsController($route, BookService){
  BookService.getBook($route.current.params.id)
  .then((response) =>{
    angular.extend(this, response.data);
  })
  .catch((error) =>{});
}

BookDetailsController.$inject = ['$route', 'BookService'];

