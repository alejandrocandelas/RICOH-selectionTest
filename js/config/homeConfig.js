/*  "use strict" is to indicate that the code should be executed in "strict mode" 
*   see https://www.w3schools.com/js/js_strict.asp for more details.
*/
'use strict'

/**
 * @autor Sergio Cernuda
 * @mail sergio.cernuda@ricoh.es
 * @date 11/12/2018
 * @description Config of the home view.
 * Define a template and a controller for each of the components that define the view.
 */
app.config(function ($stateProvider) {
    $stateProvider
        .state('home', {
            url: '/home',
            views: {
                'header': {
                    templateUrl: 'html/templates/header.html',
                    controller: 'headerController'
                },
                'menu': {
                    templateUrl: 'html/templates/menu.html',
                    controller: 'menuController'
                },
                'content': {
                    templateUrl: 'html/views/home.html',
                    controller: 'homeController'
                },
                'footer': {
                    templateUrl: 'html/templates/footer.html',
                    controller: 'footerController'
                }
            }
        })
});