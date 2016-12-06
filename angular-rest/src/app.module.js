/**
 * root module
 */

angular.module('RestDemo', ['restangular'])
    .config(['$httpProvider', 'RestangularProvider',function($httpProvider, RestangularProvider){
        RestangularProvider.setBaseUrl('https://nztodo.herokuapp.com/api/');
        RestangularProvider.setDefaultRequestParams('get', {
            format: 'json'
        });
        RestangularProvider.setRequestSuffix('/');
        $httpProvider.defaults.headers.get = {'Authentication': function(){
            localStorage.getItem('auth');
        }};
    }]);