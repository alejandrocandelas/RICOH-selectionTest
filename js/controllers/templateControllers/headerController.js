/*  "use strict" is to indicate that the code should be executed in "strict mode" 
*	see https://www.w3schools.com/js/js_strict.asp for more details.
*/
'use strict';

/**
 * @autor Sergio Cernuda
 * @mail sergio.cernuda@ricoh.es
 * @date 11/12/2018
 * @description Header controller
 */
app.controller('headerController', ['$rootScope', '$scope',
    function ($rootScope, $scope) {

	    /**
		 * @autor Sergio Cernuda
		 * @mail sergio.cernuda@ricoh.es
		 * @date 11/12/2018
		 * @description Function for control de contact evaluator content visibility.
		 * @params visibility:boolean
		 */
	    $scope.hideShowContactEvaluatorInfo = function(visibility){
	    	if(visibility == 'show'){   
				$("#evaluatorInfo").removeClass( "hide" );
				$("#evaluatorInfo").addClass( "show" );
	    	}else{
				$("#evaluatorInfo").removeClass( "show" );
				$("#evaluatorInfo").addClass( "hide" );
	    	}
	    } 
    }
]);
