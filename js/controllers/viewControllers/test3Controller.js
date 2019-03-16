/*  "use strict" is to indicate that the code should be executed in "strict mode" 
*	see https://www.w3schools.com/js/js_strict.asp for more details.
*/
'use strict';

/**
 * @autor Alejandro Candelas
 * @mail alejandrocf89@gmail.com
 * @date 15/03/2019
 * @description Test 3 view controller.
 */
app.controller('test3Controller', ['$rootScope', '$scope',
	function ($rootScope, $scope) {

        $scope.computers = $rootScope.computers;

        /**
         * @autor Alejandro Candelas
         * @mail alejandrocf89@gmail.com
         * @date 15/03/2019
         * @description Filters computers that fullfit parameter.
         */
        $scope.doSearch = function (search) {

            if (search == '') {
                $scope.computers = $rootScope.computers;
            } else {
                search = search.toLowerCase();
                $scope.computers = $rootScope.computers.filter(function (item) {
                    return item.brand.toLowerCase().includes(search) ||
                    item.model.toLowerCase().includes(search) ||
                    item.cpu.toLowerCase().includes(search) ||
                    item.type.toLowerCase().includes(search) ||
                    item.shape.toLowerCase().includes(search) ||
                    item.ram.includes(search) ||
                    item.price.includes(search)
                });

            }
        }
	}
]);
