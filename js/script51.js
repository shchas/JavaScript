'use strict';

const persone = {
    name: 'Alex',
    tel: '+796222132',
    parents: {
        mom: 'Olga',
        dad: 'Ivan'
    }
};


const clone = JSON.parse(JSON.stringify(persone));
clone.parents.mom = 'Ann';
console.log(persone);
console.log(clone);