// Select DOM Elements
const menuButton = document.querySelector('#menu-button');
const navLinks = document.querySelector('#nav-links');

// --- Hamburger Menu ---
menuButton.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});




const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://www.churchofjesuschrist.org/imgs/d9c313eb96c173d0ad32f21f461ce994129c9e8d/full/640%2C/0/default"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://churchofjesuschrist.org/imgs/7b998062094c11eca393eeeeac1e50df07c8fd34/full/640%2C/0/default"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://www.churchofjesuschrist.org/imgs/9f541175bcfc11eca77eeeeeac1ea52488fbff2f/full/640%2C/0/default"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://churchofjesuschrist.org/imgs/9bbc2a18ee4b11eb90efeeeeac1e68824aabff60/full/640%2C/0/default"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://www.churchofjesuschrist.org/imgs/b800f5245ce311fb987aabd6ee6b2230b7c8b04f/full/640%2C/0/default"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://www.churchofjesuschrist.org/imgs/2dbb637a01da374959e9b50dd072294645917ea4/full/640%2C/0/default"
  },

  {
    templeName: "Bangkok Thailand",
    location: "Bangkok, Thailand",
    dedicated: "2023, October, 22",
    area: 48525,
    imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/bangkok-thailand-temple/bangkok-thailand-temple-40037.jpg"
  },

  {
    templeName: "Campinas Brazil",
    location: "Campinas, Brazil",
    dedicated: "2002, May, 17",
    area: 48100,
    imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/campinas-brazil-temple/campinas-brazil-temple-5206.jpg"
  },
    {
        templeName: "Cebu City Philippines",
        location: "Cebu City, Philippines",
        dedicated: "2010, August, 13",
        area: 10000,
        imageUrl:
            "https://churchofjesuschrist.org/imgs/3b515c363a8c71994bd6e110cf021fc84d9c90f6/full/640%2C/0/default"
    },
    {
        templeName: "Colonia Juárez Mexico",
        location: "Colonia Juárez, Mexico",
        dedicated: "1999, June, 27",
        area: 12000,
        imageUrl:
            "https://www.churchofjesuschrist.org/imgs/9130468c8099ce6d57d408945a4d94ebc97d969a/full/640%2C/0/default"
    },
  // Add more temple objects here...
];


const templesContainer = document.querySelector('#temples-container');

function createTempleCards(templesData) {
  // Clear existing content to avoid duplication when filters are applied later
  templesContainer.innerHTML = '';

  templesData.forEach(temple => {
    // 1. Create a div for the temple card
    const templeCard = document.createElement('div');
    templeCard.classList.add('temple-card'); // Add a class for styling

    // 2. Create and populate elements for name, location, etc.
    const templeName = document.createElement('h2');
    templeName.textContent = temple.templeName;

    const location = document.createElement('p');
    location.textContent = `Location: ${temple.location}`;

    const dedicated = document.createElement('p');
    dedicated.textContent = `Dedicated: ${temple.dedicated}`;

    const area = document.createElement('p');
    area.textContent = `Area: ${temple.area} sq ft`;

    // 3. Create and populate the image element
    const img = document.createElement('img');
    img.setAttribute('src', temple.imageUrl);
    img.setAttribute('alt', temple.templeName);
    img.setAttribute('loading', 'lazy'); 

    // 4. Append all elements to the temple card
    templeCard.appendChild(templeName);
    templeCard.appendChild(location);
    templeCard.appendChild(dedicated);
    templeCard.appendChild(area);
    templeCard.appendChild(img);

    // 5. Append the completed temple card to the main container
    templesContainer.appendChild(templeCard);
  });
}

// Call the function initially to display all temples

createTempleCards(temples);

const homeButton = document.querySelector('#home');
const oldButton = document.querySelector('#old');
const newButton = document.querySelector('#new');
const largeButton = document.querySelector('#large');
const smallButton = document.querySelector('#small');

// Function to handle filtering and display
function filterTemples(filterType) {
  let filteredTemples = [];

  switch (filterType) {
    case 'old':
      filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
      break;
    case 'new':
      filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
      break;
    case 'large':
      filteredTemples = temples.filter(temple => temple.area > 90000);
      break;
    case 'small':
      filteredTemples = temples.filter(temple => temple.area < 10000);
      break;
    case 'home':
    default: 
      filteredTemples = temples;
      break;
  }
  createTempleCards(filteredTemples); 
}

// Add event listeners
homeButton.addEventListener('click', () => filterTemples('home'));
oldButton.addEventListener('click', () => filterTemples('old'));
newButton.addEventListener('click', () => filterTemples('new'));
largeButton.addEventListener('click', () => filterTemples('large'));
smallButton.addEventListener('click', () => filterTemples('small'));