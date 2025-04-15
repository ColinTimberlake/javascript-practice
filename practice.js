console.log('Hello New Friend') 

const restaurantFactory= (name, type, price) => {
    return {
        name:name,
        type:type,
        price:price
    }
}

const mcDonald= restaurantFactory('McDonalds', 'burgers', 'low');
const burgerKing= restaurantFactory('Burger King', 'burgers', 'low');
const cheddars= restaurantFactory( 'Cheddars', 'Sit Down', 'Medium');
const oliveGarden= restaurantFactory( 'Olive Garden', 'Italian', 'Medium');


function myTestFunction() {
    let animal= 'Birdy'
    console.log(1+1) 
    console.log(`My Favorite Animal Is A ${animal}`)
}

const helloNewFriend= (name) => {
    console.log(`You told me your name was ${name}, right?`)
}
class Animal {
    constructor(name, type) {
        this._name=name;
        this._type=type;
    }
    get name() {
        return this._name;
    }
    get type() {
        return this._type;
    }
}
class Dog extends Animal {
    constructor(name, type) {
        super(this._name, 'Dog')
    }
}
class Bird extends Animal {
    constructor(name, type) {
        super(this._name, 'Bird')
    }
}
class Cat extends Animal {
    constructor(name, type) {
        super(this._name, 'Cat')
    }
}