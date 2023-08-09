const loadMenu = () => {
    const content = document.querySelector('#content');

    const title = document.createElement('h1');
    title.textContent = 'Menu';

    content.appendChild(title);
}

export default loadMenu