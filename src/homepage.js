import Icon from './icon.jpg'

const loadHomepage = () => {
    let content = document.querySelector('#content');
    
    const createTitle = () => {
        const titleDiv = document.createElement('div');
        titleDiv.classList.add('title')
        const title = document.createElement('h1');
        title.textContent = 'New Resturant';
        titleDiv.appendChild(title);  
        content.appendChild(titleDiv);
    }

    const createHeroImage = () => {
        let heroDiv = document.createElement('div');
        heroDiv.classList.add('hero');

        let subtitle = document.createElement('h2');
        subtitle.classList.add('subtitle');
        subtitle.textContent = 'Best Food Around!';
        heroDiv.appendChild(subtitle);


        // let heroImage = document.createElement('img');
        // heroImage.classList.add('heroImg');

        const myIcon = new Image();
        myIcon.src = Icon;
        heroDiv.appendChild(myIcon);

        content.appendChild(heroDiv);
        
    }

    createTitle()
    createHeroImage()
}

export default loadHomepage