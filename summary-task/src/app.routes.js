/**
 * Routes configuration for our app
 */

angular.module('AppModule')
    .config(['$stateProvider', '$locationProvider', function($stateProvider, $locationProvider){

        $locationProvider.html5Mode(true);

        $stateProvider.state('home', {
            controller: 'HomeController as ctrl',
            templateUrl: 'src/templates/home.template.html',
            url: '/',
            resolve: {
                tasks: ['taskService', function(taskService){
                    return taskService.getTasks(true);
                }]
            }
        });

        $stateProvider.state('task', {
            controller: 'TaskController as ctrl',
            templateUrl: 'src/templates/task.template.html',
            url: '/task/:id/',
            resolve: {
                singleTask: ['taskService', '$stateParams', function(taskService, $stateParams){
                    return taskService.getSingleTask($stateParams.id);
                }]
            }
        })



    }])
