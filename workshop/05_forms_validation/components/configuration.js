(function(){
  'use strict';

  function configuration($logProvider){
    $logProvider.debugEnabled(false);
  }

  configuration.$inject = ['$logProvider'];

  angular.module('bookstore').config(configuration);

})();
