
class Person {
    constructor(name){
        this.name = name;
    }
    sleep(hours){
        return `<h1>T'm going to sleep for ${hours} hours.</h1>`
    }
    drink(cups){
        return `<h1>I'm going to dring ${cups} cups of water.</h1>`
    }
    speak(message) {
        return `<h1>${this.name} said: ${message}</h1>`;
    }
}

class SuperPerson extends Person {
    constructor(name,heroName){
        super(name);
        this.heroName = heroName;

    }

    sayHeroName(){
        return this.speak(`I'm ${this.heroName}`);
    }
    xRay(){
        return this.speak('I see all!!!')
    }
}
export default SuperPerson;