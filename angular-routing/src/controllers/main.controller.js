/**
 * this will be the main controller connected to the dom
 */

angular.module('AppModule')
    .controller('MainController', ['tasks', '$state', 'filterFilter', '$stateParams', function(tasks, $state, filterFilter, $stateParams){
        var self = this;

        self.greeting = 'hello world';


        self.restangularTasks = tasks;
        self.filteredTasks = self.restangularTasks;

        self.searchInput = $stateParams.q;
        self.searchList = function searchList(){
            console.log(self.searchInput);
            self.filteredTasks = filterFilter(self.restangularTasks, self.searchInput, function(actual,expected){
                return actual.getTitle().indexOf(expected) !== -1;
            });
            $state.go('parent.home', {q: self.searchInput});
        }
        self.searchList();


        self.goToPokemonPage = function goToPokemonPage(){
            $state.go('pokemon', {id: 100, name: 'balbasour', power: 10});
        }
    }]);
