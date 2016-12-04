/**
 * root controller
 */

angular.module('AppModule')
    .controller('MainCtrl', ['$timeout',
        function($timeout){
            var self = this;
            self.greeting = 'hello world';

            $timeout(function(){
                self.greeting = 'foo bar';
            }, 2000);

            self.sayHello = function sayHello(){
                return self.greeting;
            }

            self.bindingExample = 'hello!!!!!';

            self.bindingExampleFunc = function bindingExampleFunc(){
                console.log(self.bindingExample);
                self.bindingExample = '';
            }
        }
    ]);
