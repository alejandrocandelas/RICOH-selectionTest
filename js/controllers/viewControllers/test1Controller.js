/*  "use strict" is to indicate that the code should be executed in "strict mode" 
*	see https://www.w3schools.com/js/js_strict.asp for more details.
*/
'use strict';

/**
 * @autor Alejandro Candelas
 * @mail alejandrocf89@gmail.com
 * @date 14/03/2019
 * @description Test view controller.
 */
app.controller('test1Controller', ['$rootScope', '$scope', '$translate',
	function ($rootScope, $scope, $translate) {
		$scope.submitted = false;
		$scope.image = "";

		/**
		 * @autor Alejandro Candelas
		 * @mail alejandrocf89@gmail.com
		 * @date 14/03/2019
		 * @description Submittion function. Checks if form is valid.
		 */
		$scope.update = function (computer) {
			if ($scope.computerForm.$valid) {
				console.log('COMPUTER', computer);
				$scope.submitted = true;
				computer.urlImagePath = 'resources/images/jsonPcImages/' + computer.shape + '/' + computer.brand;
				$rootScope.computers.push(computer);
			} else {
				alert($translate.instant('FORM_ERRORS'));
			}
		};
	}
])
/**
 * @autor Alejandro Candelas
 * @mail alejandrocf89@gmail.com
 * @date 14/03/2019
 * @description 'fileread' directive obtains file data.
 */
.directive("fileread", [function () {
	return {
		$scope: {
			fileread: "="
		},
		link: function ($scope, element, attributes) {
			element.bind("change", function (changeEvent) {
				var reader = new FileReader();
				reader.onload = function (loadEvent) {
					$scope.$apply(function () {
						$scope.image = loadEvent.target.result;
					});
				}
				reader.readAsDataURL(changeEvent.target.files[0]);
			});
		}
	}
}]);
