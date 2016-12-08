/**
 * Created by yarivkatz on 08/12/2016.
 */


angular.module('DirectivesExample')
    .controller('MainController', ['$scope', '$timeout', function($scope, $timeout){
        $scope.greeting = 'hello from main controller';

        $timeout(function(){
            $scope.greeting = 'changed in timeout'
        }, 3000);

        $scope.sayHello = function sayHello(message){
            alert(message);
        }

        $scope.groceryList = ['banana', 'watermelon', 'pikachu'];
    }]);