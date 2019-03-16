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
		// TEST 1.A
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

		// TEST 1.B
		$scope.laptopComputers = $rootScope.computers.filter(item => item.shape == 'laptop');
		$scope.interval = undefined;

		$scope.slideIndex = 1;

		/**
		 * @autor Alejandro Candelas
		 * @mail alejandrocf89@gmail.com
		 * @date 16/03/2019
		 * @description Sets the active banner and dot.
		 */
		$scope.showSlides = function (n) {
			let i;
			let slides = document.getElementsByClassName("mySlides");
			let dots = document.getElementsByClassName("dot");
			console.log(slides, dots);
			if (n > slides.length) { $scope.slideIndex = 1 }
			if (n < 1) { $scope.slideIndex = slides.length }
			for (i = 0; i < slides.length; i++) {
				slides[i].style.display = "none";
			}
			for (i = 0; i < dots.length; i++) {
				dots[i].className = dots[i].className.replace(" active", "");
			}
			slides[$scope.slideIndex - 1].style.display = "block";
			dots[$scope.slideIndex - 1].className += " active";
		}

		/**
		 * @autor Alejandro Candelas
		 * @mail alejandrocf89@gmail.com
		 * @date 16/03/2019
		 * @description Waits until view is load to run showSlides function.
		 */
		angular.element(function () {
			$scope.showSlides($scope.slideIndex);
		});

		// Next/previous controls
		$scope.plusSlides = function (n) {
			console.log(n);
			$scope.showSlides($scope.slideIndex += n);
		}

		// Thumbnail image controls
		$scope.currentSlide = function (n) {
			$scope.showSlides($scope.slideIndex = n);
		}

		/**
		 * @autor Alejandro Candelas
		 * @mail alejandrocf89@gmail.com
		 * @date 16/03/2019
		 * @description Starts autoplay.
		 */
		$scope.start = function () {
			$scope.interval = setTimeout(function () {
				$scope.plusSlides(1);
				$scope.start();
			}, 3000); // Change image every 3 seconds
		}

		/**
		 * @autor Alejandro Candelas
		 * @mail alejandrocf89@gmail.com
		 * @date 16/03/2019
		 * @description Stops autoplay.
		 */
		$scope.stop = function () {
			clearInterval($scope.interval);
			$scope.interval = undefined;
		}

	}
]);
