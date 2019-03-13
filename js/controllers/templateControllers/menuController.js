/*  "use strict" is to indicate that the code should be executed in "strict mode" 
*	see https://www.w3schools.com/js/js_strict.asp for more details.
*/
'use strict';

/**
 * @autor Sergio Cernuda
 * @mail sergio.cernuda@ricoh.es
 * @date 11/12/2018
 * @description Footer controller
 */
app.controller('menuController', ['$rootScope', '$scope', '$state',
    function ($rootScope, $scope, $state) {

    	
    	// We set the name of the current view to be able to mark the navigation menu item as active from the view.
		$scope.statename = $state.current.name;
		
	    /**
		 * @autor Sergio Cernuda
		 * @mail sergio.cernuda@ricoh.es
		 * @date 11/12/2018
		 * @description Function for the routing of the views.
		 * @params stateName:string
		 */ 
	    $scope.go = function(stateName){
	    	$state.go(stateName);
	    }
	}
]);
