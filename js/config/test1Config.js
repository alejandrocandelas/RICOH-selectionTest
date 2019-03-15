/*  "use strict" is to indicate that the code should be executed in "strict mode" 
*   see https://www.w3schools.com/js/js_strict.asp for more details.
*/
'use strict'

/**
 * @autor Alejandro Candelas
 * @mail alejandrocf89@gmail.com
 * @date 14/03/2019
 * @description Config of the test1 view.
 * Define a template and a controller for each of the components that define the view.
 */
app.config(function ($stateProvider) {
    $stateProvider
        .state('test1', {
            url: '/test1',
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
                    templateUrl: 'html/views/test1.html',
                    controller: 'test1Controller'
                },
                'footer': {
                    templateUrl: 'html/templates/footer.html',
                    controller: 'footerController'
                }
            }
        })
});