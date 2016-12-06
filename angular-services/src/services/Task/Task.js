/**
 * Task class
 */


angular.module('ServicesDemo')
    .factory('Task', function(){

        return function Task(jsonObj){

            var self = this;

            var _id = jsonObj.id || -1;
            var _title = jsonObj.title || '';
            var _description = jsonObj.description || '';
            var _group = jsonObj.group || '';
            var _when = new Date(jsonObj.when);

            self.getTitle = function getTitle(){
                return _title;
            }


        }


    });