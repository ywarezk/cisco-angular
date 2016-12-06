/**
 * greeting services
 */

angular.module('TemplateSummary')
    .service('helloWorldService', [function(){

        var self = this;

        self.sayHello = function sayHello(){
            return 'hello world';
        }

    }]);
