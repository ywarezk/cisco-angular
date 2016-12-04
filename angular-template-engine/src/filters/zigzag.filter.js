/**
 * Created by yarivkatz on 04/12/2016.
 */


angular.module('AppModule')
    .filter('zigzag', function(){

        return function(input){
            var result = '';
            if(!input)return '';
            for(var i=0; i<input.length; i++){
                if(i%2 === 0){
                    result+=input[i].toUpperCase();
                } else {
                    result+=input[i].toLowerCase();
                }
            }
            return result;
        }

    })