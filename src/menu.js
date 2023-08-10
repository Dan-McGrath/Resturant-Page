const content = document.querySelector('#content');

const loadMenu = () => {
    const title = document.createElement('h1');
    title.textContent = 'Menu';
    title.classList.add('title');

    const menuDiv = document.createElement('div');
    menuDiv.classList.add('menu')

    content.appendChild(title);
    content.appendChild(menuDiv)
    menuDiv.appendChild(beverages());
    menuDiv.appendChild(sides())
    menuDiv.appendChild(entrees())
    
}

//Beverages
const beverages = () => {
    const beverageDiv = document.createElement('div');
    beverageDiv.classList.add('menu-sub-section');

    const subtitle = document.createElement('h2');
    subtitle.textContent = 'Beverages';

    
    
    beverageDiv.appendChild(subtitle);
    beverageDiv.appendChild(softDrinks())
    beverageDiv.appendChild(frozenDrinks())
    return beverageDiv

}

const softDrinks = () => {
    const softDrinksDiv = document.createElement('div')
    const softDrinks = document.createElement('h3');
    softDrinks.textContent = 'Soft Drinks';

    softDrinksDiv.appendChild(softDrinks);

    const coke = document.createElement('p');
    coke.textContent = 'Coke: $0.99';

    softDrinksDiv.appendChild(coke);

    return softDrinksDiv
}

const frozenDrinks = () => {
    const frozenDrinksDiv = document.createElement('div');
    const frozenDrinks = document.createElement('h3');
    frozenDrinks.textContent = 'Frozen Drinks';

    frozenDrinksDiv.appendChild(frozenDrinks);

    const chocolateShake = document.createElement('p');
    chocolateShake.textContent = 'Chocolate Shake: $2.99';

    frozenDrinksDiv.appendChild(chocolateShake);

    return frozenDrinksDiv
}

//Sides
const sides = () => {
    const sidesDiv = document.createElement('div');
    sidesDiv.classList.add('menu-sub-section');

    const subtitle = document.createElement('h2');
    subtitle.textContent = 'Sides';

    sidesDiv.appendChild(subtitle);
    sidesDiv.appendChild(fries())

    return sidesDiv
}


const fries = () => {
    const fry = document.createElement('p');
    fry.textContent = 'Fries: $1.99';

    return fry
}

// Entrees

const entrees = () => {
    const entreesDiv = document.createElement('div');

    const subtitle = document.createElement('h2');
    subtitle.textContent = 'Entrees'
    entreesDiv.appendChild(subtitle);
    entreesDiv.appendChild(cheeseburger());

    return entreesDiv

}

const cheeseburger = () => {
    const cheeseburger = document.createElement('p');
    cheeseburger.textContent = 'Cheeseburger: $10.99'

    return cheeseburger
}
export default loadMenu