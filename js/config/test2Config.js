/*  "use strict" is to indicate that the code should be executed in "strict mode" 
*   see https://www.w3schools.com/js/js_strict.asp for more details.
*/
'use strict'

/**
 * @autor Alejandro Candelas
 * @mail alejandrocf89@gmail.com
 * @date 15/03/2019
 * @description Config of the test2 view.
 * Define a template and a controller for each of the components that define the view.
 */
app.config(function ($stateProvider) {
    $stateProvider
        .state('test2', {
            url: '/test2',
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
                    templateUrl: 'html/views/test2.html',
                    controller: 'test2Controller'
                },
                'footer': {
                    templateUrl: 'html/templates/footer.html',
                    controller: 'footerController'
                }
            }
        })
});