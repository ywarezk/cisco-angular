/**
 * singleton for interacting with the task api
 */

angular.module('RestDemo')
    .service('taskService', ['Task', '$http', 'Restangular', function(Task, $http, Restangular){

        var self = this;

        var _restangular = Restangular.withConfig(function(configurer){
            configurer.addResponseInterceptor(function(data){
                var result = [];
                for(var i=0; i<data.length; i++){
                    result.push(
                        new Task(data[i])
                    );
                }
                return result;
            });
        });

        /**
         * gets all the tasks from our rest server
         * @returns {Promise<Task[]>}
         */
        self.getTasks = function getTasks(){
            return $http({
                method: 'GET',
                url: 'https://nztodo.herokuapp.com/api/task/?format=json'
            }).then(function(res){
                debugger;
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


        self.getTasks2 = function getTasks2(){
            var promise = _restangular.all('task')
                .getList();
            promise.then(function(data){
                var promises = [];
                for(var i=0; i<20; i++){
                    promises.push(data[i].one('').get());
                }
                Promise.all(promises).then(function(){
                    alert('all promises resolved');
                });
            });
            return promise.$object;
        }

    }]);
