/**
 * this directive will contain the form to create
 * a task
 */

angular.module('AppModule')
    .directive('nzTaskForm', ['taskService', 'Task', function(taskService, Task){
        return {
            templateUrl: 'src/directives/TaskForm/task-form.template.html',
            scope: {

            },
            link: function(scope){

                scope.createTask = function createTask(){
                    var task = new Task({
                        id: scope.id,
                        title: scope.title,
                        description: scope.description,
                        group: scope.group,
                        when: scope.when
                    });
                    if(scope.id){
                        scope.createdTask = taskService.updateTask(task);
                    } else {
                        taskService.createTask(task).then(function(data){
                            scope.createdTask = data;
                        });
                    }
                }
            }
        }
    }]);
