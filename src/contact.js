const content = document.querySelector('#content');

const loadContactPage = () => {
    const title = document.createElement('h1');
    title.textContent = 'Contact Us';


    content.appendChild(title)
    content.appendChild(contact())
    
}

const contact = () => {
    const contactDiv = document.createElement('div');
    contactDiv.appendChild(location())
    contactDiv.appendChild(contactInfo())
    return contactDiv
}

const location = () => {
    const locationDiv = document.createElement('div');
    const location = document.createElement('h2');
    location.textContent = 'Location';
    locationDiv.appendChild(location);

    const locationInfo = document.createElement('p');
    locationInfo.textContent = '123 Main St, Orlando Fl, 32789';
    locationDiv.appendChild(locationInfo);

    return locationDiv
}

const contactInfo = () => {
    const contactInfoDiv = document.createElement('div');
    const contactInfo = document.createElement('h2');
    contactInfo.textContent = 'Contact Information'
    contactInfoDiv.appendChild(contactInfo);

    const email = document.createElement('p');
    email.textContent = 'email@email.com';
    contactInfoDiv.appendChild(email);

    const phone = document.createElement('p');
    phone.textContent = '(123) 456-7890';
    contactInfoDiv.appendChild(phone)

    return contactInfoDiv
}
export default loadContactPage