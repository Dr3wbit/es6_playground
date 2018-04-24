import {addToDom} from './helpers';
import add from './add';
import SuperPerson from './person'

addToDom('<h1>LOLOLOLOLOLOLOLMAOBBQROFLCOPTERWTFBB</h1>');

// addToDom(`18+24= ${add(18,24)}`);
addToDom('<hr>');

const Bob = new SuperPerson('Bob', 'GayBoi');
const Brett = new SuperPerson('Brett', 'Doink Dude');
addToDom(Bob.speak('Hello! I\'m better than u'));

addToDom(Brett.speak('Hello! I Suck!'));

addToDom(Brett.xRay());

addToDom(Bob.sayHeroName());