const hamburgerMenu = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburgerMenu.addEventListener('click', () => {
  hamburgerMenu.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach((link) => link.addEventListener('click', () => {
  hamburgerMenu.classList.remove('active');
  navMenu.classList.remove('active');
}));

const workSection = document.querySelector('.work-container');

const cardArray = [
  {
    title: 'Profesional Art Printing Data More',
    img: "img/Snapshoot-Portfolio.png",
    text: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",  technologies: ['html', 'css', 'javascript'],
  },
  {
    title: 'Data Dashboard Healthcare',
    img: "img/Snapshoot-Portfolio.png",
    text: "A daily selection of privately personalized reads; no accounts orsign-ups required. has been the industry's standard",
  },
  {
    title: 'Website Portfolio',
    img: "img/Img-1.png",
    text: "A daily selection of privately personalized reads; no accounts orsign-ups required. has been the industry's standard",
  },
  {
    title: 'Profesional Art Printing Data',
    img: 'img/Snapshoot-Portfolio.png',
    text: "A daily selection of privately personalized reads; no accounts orsign-ups required. has been the industry's standard",
    },
    {
    title: 'Profetional Art Printing Data More',
    img: 'img/Img-1.png',
    text: "A daily selection of privately personalized reads; no accounts orsign-ups required. has been the industry's standard",
  },
  {
    title: 'Website Portfolio',
    img: 'img/Snapshoot-Portfolio.png',
    text: "A daily selection of privately personalized reads; no accounts orsign-ups required. has been the industry's standard",
  }
];

const tech = `
<li class="card-tech first-tech">html</li>
<li class="card-tech">bootstrap</li>
<li class="card-tech">Ruby</li>
`

for (const i in cardArray) {
  const card = document.createElement('div');
  card.classList.add('card-container')
  const article = document.createElement('article');
  article.classList.add('card')
  const cardBlock = document.createElement('div');
  cardBlock.classList.add('card-2')
  const cardImage = document.createElement('div');
  const h3 = document.createElement('h3');
  h3.innerHTML = cardArray[i].title;
  const p = document.createElement('p');
  p.innerHTML = cardArray[i].text;
  const ul = document.createElement('ul');
  ul.classList.add('card-technologies');
  ul.innerHTML = tech;
  const buttonDiv = document.createElement('div');
  buttonDiv.classList.add('see-project-btn-div');
  buttonDiv.addEventListener('click', function () {
    
  });

const seeProjectBtn = document.createElement('button');
seeProjectBtn.classList.add('btn2')
seeProjectBtn.textContent = 'See Project';
seeProjectBtn.addEventListener('onclick', function () {

});
buttonDiv.appendChild(seeProjectBtn);
  
  cardBlock.append(h3, p, ul);
  article.append(cardBlock, buttonDiv);
  card.append(article);
  // article.appendChild(buttonDiv);

  workSection.appendChild(card);

}

document.querySelector('.btn').addEventListener('click', function (){
  cardArray[0];
});