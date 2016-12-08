/**
 * this will be the main controller connected to the dom
 */

angular.module('AppModule')
    .controller('MainController', ['taskService', function(taskService){
        var self = this;

        self.greeting = 'hello world';

        taskService.getTasks().then(function(data){
            self.tasks = data;
        });

        self.restangularTasks = taskService.getTasksRestangular();
    }]);
