/**
 * singleton service that communicates with the task api
 */

angular.module('AppModule')
    .service('taskService', ['Task', '$http', 'Restangular', function(Task, $http, Restangular){

        var self = this;

        var _restangular = Restangular.withConfig(function(restangularProvider){
            restangularProvider.setResponseExtractor(function(data){
                if(data.length){
                    for(var i = 0; i < data.length; i++ ){
                        data[i] = new Task(data[i]);
                    }
                    return data;
                }
                return new Task(data);
            });
        });

        /**
         * gets all the tasks from the server
         * @returns {Array<Task[]> | Promise<Task[]>}
         */
        self.getTasks = function getTasks(isPromise){
            var promise = _restangular
                .all('task')
                .getList();
            if(isPromise) return promise;
            return promise.$object;
        }

        /**
         * get a task from the server
         * @param {number} id - the id of the task to get from the server
         * @returns: {Promise<Task>}
         */
        self.getSingleTask = function getSingleTask(id){
            return _restangular
                .one('task', id)
                .get();
        }

        /**
         * create a task in the server
         * @param {Task} task
         * @returns {Promise<Task>}
         */
        self.createTask = function createTask(task){
            return $http({
                method: 'POST',
                url: 'https://nztodo.herokuapp.com/api/task/',
                data: task.getJson()
            }).then(function(response){
                return new Task(response.data);
            });
        }

        /**
         * updates a task in the server
         * @param {Task} task
         * @returns: {Task}
         */
        self.updateTask = function updateTask(task){
            var singleTask =  _restangular.one('task', task.getId());
            _.extend(singleTask, task.getJson());
            return singleTask.put().$object;
        }

    }]);
