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

        const myIcon = new Image();
        myIcon.src = Icon;
        heroDiv.appendChild(myIcon);
        content.appendChild(heroDiv);
        
    }


    const createHoursSection = () => {
        let hoursSection = document.createElement('section');
        hoursSection.classList.add('hours-section');
        
        let hoursSubtitle = document.createElement('h3');
        hoursSubtitle.classList.add('subtitle');
        hoursSubtitle.textContent = 'Business Hours';
        
        let hoursDiv = document.createElement('div');
        hoursDiv.classList.add('hours');

        let monday = document.createElement('p');
        monday.textContent = 'Monday: 12am - 8pm';
        hoursDiv.appendChild(monday);

        let tuesday = document.createElement('p');
        tuesday.textContent = 'Tuesday: 12am - 8pm';
        hoursDiv.appendChild(tuesday);

        let wednesday = document.createElement('p');
        wednesday.textContent = 'Wednesday: 12am - 8pm';
        hoursDiv.appendChild(wednesday);

        let thursday = document.createElement('p');
        thursday.textContent = 'Thursday: 12am - 8pm';
        hoursDiv.appendChild(thursday);

        let friday = document.createElement('p');
        friday.textContent = 'Friday: 12am - 8pm';
        hoursDiv.appendChild(friday);

        let saturday = document.createElement('p');
        saturday.textContent = 'Saturday: 12am - 8pm';
        hoursDiv.appendChild(saturday);

        let sunday = document.createElement('p');
        sunday.textContent = 'Sunday: 12am - 8pm';
        hoursDiv.appendChild(sunday);


        //append to main div
        hoursSection.appendChild(hoursSubtitle);
        hoursSection.appendChild(hoursDiv);

        //append section to content
        content.appendChild(hoursSection)
    }

    const createLocationInfo = () => {
        let locationDiv = document.createElement('div');
        locationDiv.classList.add('location');

        let subtitle = document.createElement('h3');
        subtitle.classList.add('subtitle');
        subtitle.textContent = 'Location';

        let locationInfo = document.createElement('p');
        locationInfo.textContent = '123 Main St, Orlando Fl, 32789';

        // append elements to div
        locationDiv.appendChild(subtitle);
        locationDiv.appendChild(locationInfo);

        // append to content div
        content.appendChild(locationDiv);
    }

    createTitle()
    createHeroImage()
    createHoursSection()
    createLocationInfo()
}

export default loadHomepage