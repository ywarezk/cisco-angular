/**
 * Created by yarivkatz on 06/12/2016.
 */


angular.module('ServicesDemo')
    .service('pokemonService', ['Pokemon', function(Pokemon){

        var self = this;

        self.returnArrayPokemon = function returnArrayPokemon(){
            return [
                new Pokemon('pikachu', 100),
                new Pokemon('squirlte', 50),
                new Pokemon('balbasour', 60),
            ];

        }

        // return function(){
        //     var self = this;
        //
        //     self.sayHello = function(){
        //         console.log('hello');
        //     }
        // }




    }]);