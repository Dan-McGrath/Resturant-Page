import loadHomepage from "./homepage";

const createNav = () => {
    let content = document.querySelector('#content');
    let nav = document.createElement('nav');
    content.appendChild(nav);

    let navLinks = document.createElement('ul');
    nav.appendChild(navLinks)
    
    let homeNav = document.createElement('li');
    homeNav.textContent = 'Home';
    homeNav.dataset.active = 'true';
    
    let menuNav = document.createElement('li');
    menuNav.textContent = 'Menu';
    menuNav.dataset.active = 'false'

    let contactNav = document.createElement('li');
    contactNav.textContent = 'Contact';
    contactNav.dataset.active = 'false';

    navLinks.appendChild(homeNav);
    navLinks.appendChild(menuNav);
    navLinks.appendChild(contactNav);


}

export default createNav