/*  "use strict" is to indicate that the code should be executed in "strict mode" 
*	see https://www.w3schools.com/js/js_strict.asp for more details.
*/
'use strict';

/**
 * @autor Alejandro Candelas
 * @mail alejandrocf89@gmail.com
 * @date 15/03/2019
 * @description Test 2 view controller.
 */
app.controller('test2Controller', ['$rootScope', '$scope',
	function ($rootScope, $scope) {
		$scope.computers = $rootScope.computers.filter(item => item.shape == 'desktop');
	}
]);
