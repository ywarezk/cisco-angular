/**
 * Controller for our homepage
 */

angular.module('AppModule')
    .controller('HomeController', ['tasks', function(tasks){
        var self = this;

        self.greeting = 'hello home page';

        self.tasks = tasks;
    }]);
