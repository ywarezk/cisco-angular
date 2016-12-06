/**
 * singleton for interacting with the task api
 */

angular.module('ServicesDemo')
    .service('taskService', ['Task', function(Task){

        var self = this;

        /**
         * gets all the tasks from our rest server
         * @returns {Array<Task>}
         */
        self.getTasks = function getTasks(){
            return [
                new Task({
                    title: 'stam',
                    description: 'stam',
                    group: 'pokemon',
                    id: 1,
                    when: (new Date()).toISOString()
                })
            ];
        }

    }]);
