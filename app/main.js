/* File Created: décembre 22, 2015 */


const APP_MODULE_INJECT = 
                        [
                          'ui.router'
                          ,'ngAnimate'
                          ,'ngSanitize'
                        ];

var moduleName = 'Application';
let appModule = angular.module(moduleName,APP_MODULE_INJECT);

export default appModule;