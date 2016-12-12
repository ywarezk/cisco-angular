/**
 * Controller for the task page
 */

angular.module('AppModule')
    .controller('TaskController', ['$stateParams', 'singleTask', function($stateParams, singleTask){

        var self = this;

        self.greeting = 'hello task page the id is: ' + $stateParams.id;

        self.task = singleTask;

    }])
