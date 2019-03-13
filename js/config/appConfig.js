/*  "use strict" is to indicate that the code should be executed in "strict mode" 
*	see https://www.w3schools.com/js/js_strict.asp for more details.
*/
'use strict'

/**
 * @autor Sergio Cernuda
 * @mail sergio.cernuda@ricoh.es
 * @date 11/12/2018
 * @description Main app config.
 */
app.config(function () {


});


/**
 * @autor Sergio Cernuda
 * @mail sergio.cernuda@ricoh.es
 * @date 11/12/2018
 * @description Init of the appication.
 */
app.run([ '$location',
    function ($location) {

        // When we start the application, it automatically redirects to /home.
        $location.path('/home');
    }]);