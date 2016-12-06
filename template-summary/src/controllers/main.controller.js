/**
 * main controller
 */

angular.module('TemplateSummary')
    .controller('MainController', ['helloWorldService', '$timeout', '$scope', function(hService, $timeout, $scope){

        var self = this;

        self.greeting = hService.sayHello();

        self.popAlert = function popAlert(){
            alert('hello');
        }

        setTimeout(function(){
            self.greeting = 'Go pokemon!!!';
            $timeout(function(){});
        }, 3000);

        self.bindingExample = 'hello world';

        self.pokemonArray = ['pikachu', 'squirtle', 'balbasour'];

    }]);