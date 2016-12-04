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

            self.alertClicked = function alertClicked(event){
                alert('YO!!!!');
            }

            self.mouseOverExample = function mouseOverExample(){
                console.log('mouse over!!!');
            }

            self.groceryList = [
                'banana',
                'tomato',
                'watermelon'
            ]

            self.groceryObj = {
                'hello': 'world',
                'foo': 'bar',
                'go': 'pokemon'
            }

            self.toggleMe = true;
            self.debug = function debug(){
            }

            self.classObj = {'bg-orange': self.toggleMe, 'bg-blue': !self.toggleMe}

            self.today = new Date();
        }
    ]);
