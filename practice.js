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