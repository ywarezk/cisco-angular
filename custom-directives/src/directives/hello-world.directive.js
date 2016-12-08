/**
 * Created by yarivkatz on 08/12/2016.
 */


angular.module('DirectivesExample').directive('nzHelloWorld', [function(){
    return {
        templateUrl: 'src/directives/hello-world.template.html',
        scope: {
            greetingInScopeDirective: '=greetingParent',
            alerting: '&myAlertMethod'
        },
        link: function(scope, element, attrs, controller){
            scope.greetingFromDirective = 'hello from directive';
            // scope.groceryList = ['one', 'two'];
            // element.attr('style', 'display: block');
        },
        transclude: true
    }
}]);