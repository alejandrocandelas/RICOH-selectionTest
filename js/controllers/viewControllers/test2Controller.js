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
		$scope.desktopComputers = $rootScope.computers.filter(item => item.shape == 'desktop');
		$scope.dtConfig = $rootScope.dtConfig;

		/**
		 * @autor Alejandro Candelas
		 * @mail alejandrocf89@gmail.com
		 * @date 15/03/2019
		 * @description Gets the number of pages that table contains depending on number of rows and rows per page.
		 */
		$scope.getPages = function () {
			let pages = [];
			let div = Math.ceil($scope.desktopComputers.length / $scope.dtConfig.rowsPerPage);
			let count = 1;
			while (count <= div) {
				pages.push(count);
				count++;
			}
			return pages;
		}
		
		/**
		 * @autor Alejandro Candelas
		 * @mail alejandrocf89@gmail.com
		 * @date 15/03/2019
		 * @description Change the current page, than is defined by the first row to show.
		 */
		$scope.goPage = function (page) {
			switch (page) {
				case '+':
					if (($scope.dtConfig.first + $scope.dtConfig.rowsPerPage) < $scope.desktopComputers.length) {
						$scope.dtConfig.first += $scope.dtConfig.rowsPerPage;
					}
					break;
				case '-':
					if (($scope.dtConfig.first - $scope.dtConfig.rowsPerPage) >= 0) {
						$scope.dtConfig.first -= $scope.dtConfig.rowsPerPage;
					}
					break;
				default:
					let first = (page - 1) * $scope.dtConfig.rowsPerPage;
					$scope.dtConfig.first = first;
			}
		}
	}
]);
