import loadHomepage from "./homepage";
import loadContactPage from "./contact";
import loadMenu from "./menu";

const loadNav = () => {
    let content = document.querySelector('#content');
    let header = document.createElement('header');
    content.appendChild(header);

    let nav = document.createElement('nav');
    header.appendChild(nav);

    let navLinks = document.createElement('ul');
    nav.appendChild(navLinks)
    
    let homeNav = document.createElement('li');
    homeNav.textContent = 'Home';
    homeNav.dataset.active = 'true';
    homeNav.classList.add('nav-link');
    homeNav.setAttribute('id', 'home');

    let menuNav = document.createElement('li');
    menuNav.textContent = 'Menu';
    menuNav.dataset.active = 'false';
    menuNav.classList.add('nav-link');
    menuNav.setAttribute('id', 'menu');

    let contactNav = document.createElement('li');
    contactNav.textContent = 'Contact';
    contactNav.dataset.active = 'false';
    contactNav.classList.add('nav-link');
    contactNav.setAttribute('id', 'contact')

    navLinks.appendChild(homeNav);
    navLinks.appendChild(menuNav);
    navLinks.appendChild(contactNav);

    const navList = document.querySelectorAll('.nav-link');

    // click event for active page
    const activeLink = (e) => {
        if (e.target.dataset === 'true') {
            return
        } else {
            navList.forEach(ele => ele.dataset.active = 'false')
            e.target.dataset.active = 'true';

            while (content.childNodes.length > 1) {
                content.removeChild(content.lastChild)
            }
            if (e.target.id === 'home') {
                loadHomepage();
            } else if (e.target.id === 'contact') {
                loadContactPage();
            } else if (e.target.id === 'menu') {
                loadMenu()
            }
        }
    }

    navList.forEach(ele => ele.addEventListener('click', activeLink))

}



export default loadNav