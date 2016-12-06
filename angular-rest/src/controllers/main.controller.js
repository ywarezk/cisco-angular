/**
 * main controller
 */

angular.module('RestDemo')
    .controller('MainController', ['$http', 'taskService', 'Task', function($http, taskService, Task){
        var self = this;

        self.greeting = 'hello world';

        // taskService.getTasks().then(function(tasks){
        //     self.tasks = tasks;
        // }, function(err){
        //     alert('error');
        // });

        self.createTask = function createTask(){
            taskService.createTask(new Task({
                title: 'hello',
                description: 'world',
                group: 'yariv-katz',
                when: (new Date()).toISOString()
            }));
        }

        self.tasks = taskService.getTasks2();


    }]);