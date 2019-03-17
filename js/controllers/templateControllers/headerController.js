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
app.controller('headerController', ['$rootScope', '$scope', '$translate',
    function ($rootScope, $scope, $translate) {

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

		/**
		 * @autor Alejandro Candelas
		 * @mail sergio.cernuda@ricoh.es
		 * @date 17/12/2018
		 * @description Sets the current language.
		 * @params isOpen:boolean
		 */
		$scope.setLang = function(lang) {
			$translate.use(lang);
		}

		$scope.getCurrentLang = function() {
			if ($translate.isReady()) {
				let lang = $translate.use();

				switch(lang) {
					case 'es': return $translate.instant('SPANISH');
					case 'en': return $translate.instant('ENGLISH');
				}
			}
		}
    }
]);
