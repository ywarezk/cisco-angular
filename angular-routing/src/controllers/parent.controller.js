/**
 * Created by yarivkatz on 08/12/2016.
 */


angular.module('AppModule')
    .controller('ParentController', ['$scope', '$rootScope', function($scope, $rootScope){
        var self = this;

        $scope.greeting = 'Hello from parent';


        $rootScope.$on('userclicked', function(){
            alert('hello world');
        })



    }]);