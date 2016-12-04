/**
 * controller to display hello world
 */

angular.module('HelloWorld')
    .controller('HelloWorldCtrl', ['greetingService', function(greetingService){

        var self = this;

        self.greetingInput = 'hello world';

        self.greetings = greetingService.getGreetings();

        self.submitForm = function submitForm(){
            greetingService.addGreeting(self.greetingInput);
        }

    }]);


