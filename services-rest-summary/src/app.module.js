/**
 * Root module that will be bootstraped to the DOM
 */

angular.module('AppModule', ['restangular'])
    .config(['RestangularProvider', function(RestangularProvider){

        RestangularProvider.setBaseUrl('https://nztodo.herokuapp.com/api/');
        RestangularProvider.setRequestSuffix('/');
        RestangularProvider.setDefaultHeaders({
            Authorization: function(){
                return localStorage.getItem('auth');
            }
        })


    }]);


