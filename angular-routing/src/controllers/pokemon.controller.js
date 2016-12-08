/**
 * Created by yarivkatz on 08/12/2016.
 */

angular.module('AppModule')
    .controller('PokemonController', ['$stateParams', '$scope', '$rootScope', function($stateParams, $scope, $rootScope){
        var self = this;
        self.greeting = 'hello pokemon page';

        self.id = $stateParams.id;
        self.name = $stateParams.name;
        self.power = $stateParams.power;

        self.printFromParent = function printFromParent(){
                $rootScope.$emit('userclicked');
        }




    }]);