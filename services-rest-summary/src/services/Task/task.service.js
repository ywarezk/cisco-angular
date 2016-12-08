/**
 * singleton service that communicates with the task api
 */

angular.module('AppModule')
    .service('taskService', ['Task', '$http', 'Restangular', function(Task, $http, Restangular){

        var self = this;

        var _restangular = Restangular.withConfig(function(restangularProvider){
            restangularProvider.setResponseExtractor(function(data){
                for(var i = 0; i < data.length; i++ ){
                    data[i] = new Task(data[i]);
                }
                return data;
            });
        });

        /**
         * gets all the tasks from the server
         * @returns {Promise<Task[]>}
         */
        self.getTasks = function getTasks(){
            return $http({
                method: 'GET',
                url: 'https://nztodo.herokuapp.com/api/task/?format=json'
            }).then(function(response){
                var result = [];
                for(var i = 0; i < response.data.length; i++ ){
                    result.push(new Task(response.data[i]));
                }
                return result;
            });
        }

        /**
         * gets all the tasks from the server
         * @returns {Array<Task[]>}
         */
        self.getTasksRestangular = function getTasksRestangular(){
            return _restangular
                .all('task')
                .getList().$object;
        }



    }]);
