// Form validation
const hamburgerMenu = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburgerMenu.addEventListener('click', () => {
  hamburgerMenu.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach((link) => link.addEventListener('click', () => {
  hamburgerMenu.classList.remove('active');
  navMenu.classList.remove('active');
}));

// Portfolio popup window
const projectCardData = [
  {
    title: 'Space Travelers Hub',
    text: 'An application for a company that provides commercial and scientific space travel services. The application will allow users to book rockets and join selected space missions.',
    technologies: ['HTML', 'CSS', 'React'],
    img_src: 'img/Space-traveler-hub.png',
    liveLink: 'https://moonlit-gumdrop-1fd5a8.netlify.app',
    sourceLink: 'https://github.com/Kaghenimbale/space_traveler',
  },
  {
    title: 'Math Magicians',
    text: 'A website for all fans of mathematics. It is a Single Page App (SPA) that allows users to make simple calculations, and read a random math-related quote.',
    technologies: ['HTML', 'CSS', 'React'],
    img_src: 'img/Math-magicians.png',
    liveLink: 'https://wilhelm-math-magicians.onrender.com',
    sourceLink: 'https://github.com/WilhelmK109/math-magicians',
  },
  {
    title: 'Awesome Books',
    text: 'A book list keeping application which stores and display books in the list. It stores data into the localStorage.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    img_src: 'img/Awesome-books.png',
    liveLink: 'https://wilhelmk109.github.io/awesome-books',
    sourceLink: 'https://github.com/WilhelmK109/awesome-books',
  },
  {
    title: 'Crypto Metrics',
    text: 'A website that allow users to get a list of top 20 bitcoins from the api and view details of each bitcoin.',
    technologies: ['Ruby', 'CSS', 'Rails'],
    img_src: 'img/Crypto-metrics.png',
    liveLink: 'https://wilhelm-metric-webapp.onrender.com',
    sourceLink: 'https://github.com/WilhelmK109/metrics-webapp',
  },
  {
    title: 'Awesome Books',
    text: 'A book list keeping application which stores and display books in the list. It stores data into the localStorage.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    img_src: 'img/Awesome-books.png',
    liveLink: 'https://wilhelmk109.github.io/awesome-books',
    sourceLink: 'https://github.com/WilhelmK109/awesome-books',
  },
  {
    title: 'Budget Application',
    text: 'A mobile web application where users can manage their budget. They have a list of transactions associated with a category, so that they can see how much money they spent and on what.',
    technologies: ['RoR', 'CSS', 'PostgreSQL'],
    img_src: 'img/Budget-app1.png',
    liveLink: 'https://wilhelm-budget-app.onrender.com',
    sourceLink: 'https://github.com/WilhelmK109/ror-budget-app',
  },
];

const displayPopupItems = (projectCard) => {
  const headerDetails = document.querySelector('.popup-header-container h2');
  headerDetails.textContent = projectCard.title;

  const technologiesList = document.querySelector('.popup-tech-list');

  document.querySelectorAll('.popup-tech-list-items').forEach((element) => {
    element.remove();
  });

  projectCard.technologies.forEach((element) => {
    const technnologiesListItem = document.createElement('li');
    technnologiesListItem.classList.add('popup-tech-list-items');
    technnologiesListItem.textContent = element;
    technologiesList.appendChild(technnologiesListItem);
  });

  document.querySelector('.popup-card-details img').setAttribute('src', projectCard.img_src);
  document.querySelector('.popup-para-div p').textContent = projectCard.text;

  // Get the "See Live" and "See Source" buttons
  const seeLiveButton = document.querySelector('.popup-link-btn-div .link-button:first-child');
  const seeSourceButton = document.querySelector('.popup-link-btn-div .link-button:last-child');

  // Set the href attribute of the "See Live" button to the liveLink from projectCard
  // seeLiveButton.addEventListener('click', () => {
  //   window.location.href = projectCard.liveLink;
  // });

  // Set the href attribute of the "See Live" button to the liveLink from projectCard
  seeLiveButton.addEventListener('click', () => {
    window.open(projectCard.liveLink, '_blank');
  });

  // Set the href attribute of the "See Source" button to the sourceLink from projectCard
  seeSourceButton.addEventListener('click', () => {
    window.open(projectCard.sourceLink, '_blank');
  });

  const popupDetails = document.querySelector('.popup-window-container');
  popupDetails.classList.toggle('active');
};

const CreateProjectCard = (projectCard) => {
  const projectCardContainerDiv = document.createElement('div');
  projectCardContainerDiv.classList.add('card-container');
  document.querySelector('.work-container').appendChild(projectCardContainerDiv);
  const projectCardDiv = document.createElement('article');
  projectCardDiv.classList.add('card');
  projectCardContainerDiv.appendChild(projectCardDiv);

  const projectButton = document.createElement('button');
  projectButton.classList.add('card-hover');
  projectButton.addEventListener('click', () => {
    displayPopupItems(projectCard);
  });

  const projectCardDataDiv = document.createElement('div');
  projectCardDataDiv.classList.add('card-2');

  const projectHeader = document.createElement('h2');
  projectHeader.textContent = projectCard.title;

  const projectText = document.createElement('p');
  projectText.textContent = projectCard.text;

  const cardTechList = document.createElement('ul');
  cardTechList.classList.add('card-tech-list');

  projectCardDiv.appendChild(projectButton);
  projectCardDiv.appendChild(projectCardDataDiv);
  projectCardDataDiv.appendChild(projectHeader);
  projectCardDataDiv.appendChild(projectText);
  projectCardDataDiv.appendChild(cardTechList);

  for (let i = 0; i < 3; i += 1) {
    const cardTechListItem = document.createElement('li');
    cardTechListItem.classList.add('card-tech');
    if (i === 0) { cardTechListItem.classList.add('first-tech'); }
    cardTechListItem.textContent = projectCard.technologies[i];
    cardTechList.appendChild(cardTechListItem);
  }

  const seeProjectDiv = document.createElement('div');
  seeProjectDiv.classList.add('see-project-btn-div');
  projectCardDiv.appendChild(seeProjectDiv);
  seeProjectDiv.addEventListener('click', () => {
    displayPopupItems(projectCard);
  });

  const seeProjectBtn = document.createElement('button');
  seeProjectBtn.classList.add('btn2');
  seeProjectBtn.textContent = 'See Project';
  seeProjectDiv.appendChild(seeProjectBtn);
  seeProjectBtn.addEventListener('onclick', () => {
    displayPopupItems(projectCard);
  });
};

for (let i = 0; i < projectCardData.length; i += 1) {
  CreateProjectCard(projectCardData[i]);
}

// document.querySelector('.btn').addEventListener('click', () => {
//   displayPopupItems(projectCardData[0]);
// });

// document.querySelector('.btn-div button').addEventListener('click', () => {
//   displayPopupItems(projectCardData[0]);
// });

function openModal(modal) {
  modal.classList.add('active');
}

function closeModal(modal) {
  modal.classList.remove('active');
}

const openModalBtn = document.querySelectorAll('[data-modal-target]');
const closeModalBtn = document.querySelector('.close-popup-btn');

openModalBtn.forEach((button) => {
  button.addEventListener('click', () => {
    const modal = document.querySelector('.popup-window-container');
    openModal(modal);
  });
});

closeModalBtn.addEventListener('click', () => {
  const modal = document.querySelector('.popup-window-container');
  closeModal(modal);
});

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('button').forEach((trigger) => {
    trigger.addEventListener('click', () => {
      document.querySelectorAll('body').forEach((target) => target.classList.add('no-scroll'));
    });
  });
  document.querySelectorAll('.close-popup-btn').forEach((trigger) => {
    trigger.addEventListener('click', () => {
      document.querySelectorAll('body').forEach((target) => target.classList.remove('no-scroll'));
    });
  });
});
