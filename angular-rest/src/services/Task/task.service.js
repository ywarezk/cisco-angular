/**
 * singleton for interacting with the task api
 */

angular.module('RestDemo')
    .service('taskService', ['Task', '$http', function(Task, $http){

        var self = this;

        /**
         * gets all the tasks from our rest server
         * @returns {Promise<Task[]>}
         */
        self.getTasks = function getTasks(){
            return $http({
                method: 'GET',
                url: 'https://nztodo.herokuapp.com/api/task/?format=json'
            }).then(function(res){
                var result = [];
                for(var i=0; i<res.data.length; i++){
                    result.push(
                        new Task(res.data[i])
                    );
                }
                return result;
            });
        }

        /**
         * create a new task in the server
         * @param {Task} task
         * @returns {Promise<Task>}
         */
        self.createTask = function createTask(task) {
            return $http.post(
                'https://nztodo.herokuapp.com/api/task/',
                task.toJson()
            );
        }

    }]);
