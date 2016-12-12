/**
 * will contain the task class
 */

angular.module('AppModule')
    .factory('Task', [function(){

        return function Task(taskJson){

            var self = this;

            var _id = taskJson.id || -1;
            var _title = taskJson.title || '';
            var _description = taskJson.description || '';
            var _group = taskJson.group || '';
            var _when = taskJson.when ? new Date(taskJson.when) : new Date();

            self.getTitle = function getTitle(){
                return _title;
            }

            self.getId = function getId(){
                return _id;
            }

            /**
             * return json representation of our instance
             */
            self.getJson = function getJson(){
                return {
                    id: _id,
                    title: _title,
                    description: _description,
                    group: _group,
                    when: _when
                }
            }

        }

    }]);
