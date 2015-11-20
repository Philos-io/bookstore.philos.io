  angular.module('bookstore', [])

  .controller('BookController', function($scope){
    $scope.books = [{
      bookID: 9809,
      author: 'Davy Mitchel',
      title: 'Functional JavaScript',
      description: 'Functional programming in JavaScript',
      price: 29.99,
      category: 'Programming language',
      cover: 'images/javascript.jpg'
    },
    {
      bookID: 9100,
      author: 'Max Mitchel',
      title: 'AngularJS: Up and Running',
      description: 'Enhanced Productivity with Structured Web Apps',
      price: 19.99,
      category: 'Web Frameworks',
      cover: 'images/angularjs.jpg'
    }];
  });
