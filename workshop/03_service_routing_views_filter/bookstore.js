
angular.module('bookstore', ['ngRoute'])

//
// 1. Add a BookService that manage simple CRUD operations on our books
// then inject it inside our BookController
// Public API: getBooks, getBook(id), deleteBook(id)
//
  .controller('BookController', function($scope){
    $scope.books = [{
      bookID: 9809,
      author: 'Davy Mitchel',
      title: 'Functional JavaScript',
      description: 'Functional programming in JavaScript',
      price: 29.99,
      category: 'Programming language',
      cover: 'assets/img/javascript.jpg'
    },
    {
      bookID: 9100,
      author: 'Max Mitchel',
      title: 'AngularJS: Up and Running',
      description: 'Enhanced Productivity with Structured Web Apps',
      price: 19.99,
      category: 'Web Frameworks',
      cover: 'assets/img/angularjs.jpg'
    }];
  })

//
// 2. Create a BookFactory with the same API than the BookService
// Then inject it inside our BookController. How different are they?
// Which one should you use?
//

  .controller('NavController', function($scope){
    $scope.title = "Book Store";
  })

//
// 3. Routing + view
  // 3.a Add route for our main page '/'
  //   -- This route is managed by the BookController
  //   -- His template is in templates/book.html
  //
  // 3.b Add route for adding books '/books/add'
  //   -- This route is managed by the BookController
  //   -- Its template is in templates/add-book.html
  //
  // 3.c Add route for viewing the details of a book 'books/id'
  //   -- This route is managed by the BookController
  //   -- Its template is in templates/book-details.html
//

// 4. Bonus: Let's implement our search feature into our application (very very difficult)

  angular.bootstrap(document.body, ['bookstore']);
