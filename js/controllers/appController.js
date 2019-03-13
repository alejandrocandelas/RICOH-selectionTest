/*  "use strict" is to indicate that the code should be executed in "strict mode" 
*	see https://www.w3schools.com/js/js_strict.asp for more details.
*/
'use strict';

/**
 * @autor Sergio Cernuda
 * @mail sergio.cernuda@ricoh.es
 * @date 11/12/2018
 * @description AppController main controller for the application.
 */
app.controller('AppController', ['$rootScope', '$scope', '$state',
    function ($rootScope, $scope, $state) {

	    $rootScope.isMenuOpen = true;

	    $rootScope.openedMenu = function(){
	     	if($rootScope.isMenuOpen == true){
	     		$scope.menuVisibility(true);
				return "open";
	     	}else{
	     		$scope.menuVisibility(false);
				return "close";
	     	}
	    }  


    	/**
		 * @autor Sergio Cernuda
		 * @mail sergio.cernuda@ricoh.es
		 * @date 11/12/2018
		 * @description Function for control de side menu collapse.
		 * @params isOpen:boolean
		 */
	    $rootScope.menuVisibility = function(isOpen){
	     	if(isOpen == true){
				$rootScope.isMenuOpen = true;
				$("#mySidenav").removeClass( "collapse" );
				$("#mySidenav").addClass( "noCollapse" );
				$("#headerContainer").removeClass( "collapse" );
				$("#headerContainer").addClass( "noCollapse" );
				$("#charts").removeClass( "collapse" );
				$("#charts").addClass( "noCollapse" );
	     	}else{
				$rootScope.isMenuOpen = false;
				$("#mySidenav").removeClass( "noCollapse" );
				$("#mySidenav").addClass( "collapse" );
				$("#headerContainer").removeClass( "noCollapse" );
				$("#headerContainer").addClass( "collapse" );
				$("#charts").removeClass( "noCollapse" );
				$("#charts").addClass( "collapse" );
	     	}
	    }   


	     $.getJSON('resources/data/data.json', function(data) {         
		    $rootScope.computers = data;
		});

    }]);

