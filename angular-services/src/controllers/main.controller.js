/**
 * main controller
 */

angular.module('ServicesDemo')
    .controller('MainController', ['PI', 'Pokemon', 'pokemonService', 'taskService', function(PI, Pokemon, pokemonService, taskService){
        var self = this;
        PI.hello = 'pokemon';
        self.greeting = PI.hello;

        var pokemon = new Pokemon('pikachu', 100);

        pokemon.sayHello();

        self.pikachuName = pokemon.name;


        // self.pokemonArray = pokemonService.returnArrayPokemon();

        self.tasks = taskService.getTasks();

    }]);