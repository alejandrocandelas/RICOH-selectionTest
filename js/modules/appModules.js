/*  "use strict" is to indicate that the code should be executed in "strict mode" 
*	see https://www.w3schools.com/js/js_strict.asp for more details.
*/
'use strict';

/**
 * @autor Sergio Cernuda
 * @mail sergio.cernuda@ricoh.es
 * @date 11/12/2018
 * @description Loading of the modules used in the application.
 */
var app = angular.module('test_senior_angularjs', [
    'ui.router',
    'pascalprecht.translate',
    'ngCookies'
]);

