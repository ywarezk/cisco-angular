/**
 * pokemon class
 */

angular.module('ServicesDemo')
    .factory('Pokemon', [function(){

        console.log('will run only once');

        return function Pokemon(name, strength){

            var self = this;

            self.name = name;
            self.strength = strength;

            self.sayHello = function sayHello(){
                console.log('hi my name is: ' + self.name + ' and my strenght is: ' + self.strength);
            }
        }


    }]);
