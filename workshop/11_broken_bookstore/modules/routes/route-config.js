function routes($routeProvider){
  $routeProvider
  .when('/', {
    template: '<bs-books></bs-books>'
  })
  .when('/books/add', {
    template: '<bs-book-add></bs-book-add>'
  })
  .when('/books/:id', {
    template: '<bs-book-details></bs-book-details>'
  });
}

