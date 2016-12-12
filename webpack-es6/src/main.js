/**
 * Created by yarivkatz on 12/12/2016.
 */


import { Cisco } from './typescript.ts';

class Pokemon{
    constructor(name = 'pikachu'){
        this.name = name;
    }

    sayHello(){
        console.log(`${this.name} said hello`);
    }
}

const hello = {hello: 'world'};

let pokemon = 'pikachu';
pokemon = 'squirtle';


for(var count = 0; count < 10; count++){
    for(var count = 0; count < 10; count++){
        console.log(count);
    }
}

for(let count = 0; count < 10; count++){
    for(let count = 0; count < 10; count++){
        console.log(count);
    }
}