const createContactPage = () => {
    const content = document.querySelector('#content');

    const title = document.createElement('h1');
    title.textContent = 'Contact Us';

    content.appendChild(title)
}

export default createContactPage