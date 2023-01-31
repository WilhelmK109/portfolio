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

const sectionEl = document.querySelector('.work-container');

const cardArray = [
  {
    title: 'post-stories',
    img: 'img/Img Placeholder.png"',
    text: "A daily selection of privately personalized reads; no accounts orsign-ups required. has been the industry's standar dummy text eversince the 1500s, when an unknown printer took a standard dummy text",
    description: '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae veritatis velit adipisci numquam nulla fugit. In accusamus quis eveniet nesciunt deserunt aspernatur recusandae voluptate similique molestias sed accusantium saepe ullam excepturi aperiam tempora qui iste quisquam, incidunt vitae voluptatum praesentium explicabo quae repellendus? Quas sapiente tenetur ea! Necessitatibus minima labore dolor soluta in voluptatem aspernatur officiis culpa cupiditate quo repudiandae ducimus, aperiam facilis fugit atque quibusdam ut quaerat omnis praesentium id consectetur fugiat reprehenderit unde? Dolore expedita debitis error assumenda aliquam, enim iste eligendi, odio reiciendis eos reprehenderit ab! Enim dolor rem ducimus, libero quaerat dolorum rerum deleniti veniam consectetur!'
  },{
    title: 'post-stories',
    img: 'img/Img Placeholder.png"',
    text: "A daily selection of privately personalized reads; no accounts orsign-ups required. has been the industry's standar dummy text eversince the 1500s, when an unknown printer took a standard dummy text",
    description: '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae veritatis velit adipisci numquam nulla fugit. In accusamus quis eveniet nesciunt deserunt aspernatur recusandae voluptate similique molestias sed accusantium saepe ullam excepturi aperiam tempora qui iste quisquam, incidunt vitae voluptatum praesentium explicabo quae repellendus? Quas sapiente tenetur ea! Necessitatibus minima labore dolor soluta in voluptatem aspernatur officiis culpa cupiditate quo repudiandae ducimus, aperiam facilis fugit atque quibusdam ut quaerat omnis praesentium id consectetur fugiat reprehenderit unde? Dolore expedita debitis error assumenda aliquam, enim iste eligendi, odio reiciendis eos reprehenderit ab! Enim dolor rem ducimus, libero quaerat dolorum rerum deleniti veniam consectetur!'
  },{
    title: 'post-stories',
    img: 'img/Img Placeholder.png"',
    text: "A daily selection of privately personalized reads; no accounts orsign-ups required. has been the industry's standar dummy text eversince the 1500s, when an unknown printer took a standard dummy text",
    description: '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae veritatis velit adipisci numquam nulla fugit. In accusamus quis eveniet nesciunt deserunt aspernatur recusandae voluptate similique molestias sed accusantium saepe ullam excepturi aperiam tempora qui iste quisquam, incidunt vitae voluptatum praesentium explicabo quae repellendus? Quas sapiente tenetur ea! Necessitatibus minima labore dolor soluta in voluptatem aspernatur officiis culpa cupiditate quo repudiandae ducimus, aperiam facilis fugit atque quibusdam ut quaerat omnis praesentium id consectetur fugiat reprehenderit unde? Dolore expedita debitis error assumenda aliquam, enim iste eligendi, odio reiciendis eos reprehenderit ab! Enim dolor rem ducimus, libero quaerat dolorum rerum deleniti veniam consectetur!'
  },{
    title: 'post-stories',
    img: 'img/Img Placeholder.png"',
    text: "A daily selection of privately personalized reads; no accounts orsign-ups required. has been the industry's standar dummy text eversince the 1500s, when an unknown printer took a standard dummy text",
    description: '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae veritatis velit adipisci numquam nulla fugit. In accusamus quis eveniet nesciunt deserunt aspernatur recusandae voluptate similique molestias sed accusantium saepe ullam excepturi aperiam tempora qui iste quisquam, incidunt vitae voluptatum praesentium explicabo quae repellendus? Quas sapiente tenetur ea! Necessitatibus minima labore dolor soluta in voluptatem aspernatur officiis culpa cupiditate quo repudiandae ducimus, aperiam facilis fugit atque quibusdam ut quaerat omnis praesentium id consectetur fugiat reprehenderit unde? Dolore expedita debitis error assumenda aliquam, enim iste eligendi, odio reiciendis eos reprehenderit ab! Enim dolor rem ducimus, libero quaerat dolorum rerum deleniti veniam consectetur!'
  }
]
