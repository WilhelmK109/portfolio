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
    title: 'Profesional Art Printing Data More',
    text: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    technologies: ['html', 'css', 'javascript'],
    img_src: 'img/Snapshoot-Portfolio.png',
    liveLink: '#',
    sourceLink: '#',
  },
  {
    title: 'Data Dashboard Healthcare',
    text: "A daily selection of privately personalized reads; no accounts orsign-ups required. has been the industry's standard",
    technologies: ['html', 'css', 'javascript'],
    img_src: 'img/Snapshoot-Portfolio.png',
    liveLink: '#',
    sourceLink: '#',
  },
  {
    title: 'Website Portfolio',
    text: "A daily selection of privately personalized reads; no accounts orsign-ups required. has been the industry's standard",
    technologies: ['html', 'css', 'javascript'],
    img_src: 'img/Img-1.png',
    liveLink: '#',
    sourceLink: '#',
  },
  {
    title: 'Profesional Art Printing Data',
    text: "A daily selection of privately personalized reads; no accounts orsign-ups required. has been the industry's standard",
    technologies: ['html', 'css', 'javascript'],
    img_src: 'img/Snapshoot-Portfolio.png',
    liveLink: '#',
    sourceLink: '#',
  },
  {
    title: 'Profetional Art Printing Data More',
    text: "A daily selection of privately personalized reads; no accounts orsign-ups required. has been the industry's standard",
    technologies: ['html', 'css', 'javascript'],
    img_src: 'img/Img-1.png',
    liveLink: '#',
    sourceLink: '#',
  },
  {
    title: 'Website Portfolio',
    text: "A daily selection of privately personalized reads; no accounts orsign-ups required. has been the industry's standard",
    technologies: ['html', 'css', 'javascript'],
    img_src: 'img/Snapshoot-Portfolio.png',
    liveLink: '#',
    sourceLink: '#',
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

  const popupDetails = document.querySelector('.popup-window-container');
  popupDetails.classList.toggle('active');
};

function CreateProjectCard(projectCard) {
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
}

for (let i = 0; i < projectCardData.length; i += 1) {
  CreateProjectCard(projectCardData[i]);
}

document.querySelector('.btn').addEventListener('click', () => {
  displayPopupItems(projectCardData[0]);
});

document.querySelector('.btn-div button').addEventListener('click', () => {
  displayPopupItems(projectCardData[0]);
});

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
