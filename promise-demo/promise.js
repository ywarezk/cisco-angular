/**
 * promise demo
 */

var promise = new Promise(function(resolve, reject){
    setTimeout(function(){
        reject('data error');
    }, 3000)
});

promise.then(function (data){
    console.log(data);
}, function error(data){
    console.log('ERROR!!! ' + data);
});
