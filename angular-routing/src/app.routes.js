/**
 * configuration for the stateProvider
 */

angular.module('AppModule')
    .config(['$stateProvider', '$locationProvider', function($stateProvider, $locationProvider){

    $locationProvider.html5Mode(true);

    $stateProvider.state('parent', {
        controller: 'ParentController as ctrl',
        template: '<h1>Hello user page</h1><ui-view></ui-view>',
        url: '/user/',
        abstract: true
    });

    $stateProvider.state('parent.home', {
        controller: 'MainController as ctrl',
        templateUrl: '/assets/src/templates/main.template.html',
        url: 'home/?q',
        resolve: {
            tasks: ['taskService', function(taskService){
                return taskService.getTasks();
            }]
        },
        reloadOnSearch: false
    });

    $stateProvider.state('parent.pokemon', {
        controller: 'PokemonController as ctrl',
        templateUrl: '/assets/src/templates/pokemon.template.html',
        url: 'pokemon/:id/?name&power'
    });
}]);
