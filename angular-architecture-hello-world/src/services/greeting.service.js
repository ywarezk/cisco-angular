/**
 * service that holds the array of greeting
 */

angular.module('HelloWorld').service('greetingService', function(){

    var self = this;

    var _greetings = [];

    /**
     * push greeting to array of greetings
     * @param {String} greeting
     */
    self.addGreeting = function addGreeting(greeting){
        _greetings.push(greeting);
    }

    /**
     * returns the array of greetings
     * @returns {Array<string>}
     */
    self.getGreetings = function getGreetings(){
        return _greetings;
    }

});
