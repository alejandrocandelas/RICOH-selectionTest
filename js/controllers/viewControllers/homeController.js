/*  "use strict" is to indicate that the code should be executed in "strict mode" 
*	see https://www.w3schools.com/js/js_strict.asp for more details.
*/
'use strict';

/**
 * @autor Sergio Cernuda
 * @mail sergio.cernuda@ricoh.es
 * @date 13/12/2018
 * @description Home controller for the welcome view.
 */
app.controller('homeController', ['$rootScope', '$scope',
    function ($rootScope, $scope) {
    	$rootScope.isMenuOpen = true;        
    }
]);
