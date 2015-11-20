	function BookController($location, $log, $timeout, bookfactory, toaster){
		function init(){
			bookfactory.getAll().then(function(response){
        this.books = response.data;
      })
      .catch(function(){
				$log.error('something weird happened');
      });
		}

		init.call(this);
	}



