let mainMenu = document.querySelector(".nav__links");
let closeMenu = document.querySelector(".close__menu");
let openMenu = document.querySelector(".open__menu");
let openMenuLogo = document.querySelector("#logo_2");

const projects = [
   {
    title: 'What is Wego',
    link: '',
    imgSrc: 'images/wego1.png',
    displayText: 'Our Solution',
  },
  {
    title: 'Why Archeology Needs Help',
    link: '',
    imgSrc: 'images/wego2.png',
    displayText: '',
  },
  {
    title: 'Quotes',
    link: '',
    imgSrc: 'images/wego3.png',
    displayText: '',
  },
  {
    title: 'Chrome Extension: Archeology - Cute Sand Brush',
    link: 'https://chromewebstore.google.com/detail/archeology-cute-sand-brus/lajiflhehjeedmneibglkidiceglaeen',
    imgSrc: 'images/CuteSandBrush.png',
    displayText: 'Chrome Extension - Click Here',
  },
  {
    title: 'Chrome Extension: Archeology - Artifact Scanner',
    link: '',
    imgSrc: 'images/extension-artifact-1.png',
    displayText: 'Chrome Extension',
  },
  {
    title: 'Archeology - Time Machine Chrome Extension',
    link: 'https://chromewebstore.google.com/detail/archeology-excellent-time/jkgbkpopfhjadoabjhbmakpicnnmjfgh',
    imgSrc: 'images/timeMachine.png',
    displayText: 'Double click on highlighted years & Search',
  },
  {
    title: 'Kevin - The Adventurous Rover',
    link: '',
    imgSrc: 'images/kevin3.jpg',
    displayText: 'Sonar / LIDAR / GPS Light Rover - Built light to protect sites',
  },
  {
    title: 'Chrome Extension: Archeology - Kevin\'s Adventures',
    link: '',
    imgSrc: 'images/kevin-img.png',
    displayText: 'Chrome Extension - See Kevin\'s Exploration Location',
  },
  
  {
    title: 'Archeology - ArchaeoVision',
    link: '',
    imgSrc: 'images/arch-cam.jpg',
    displayText: ' AI Archeologist Glasses - used to analyze artifacts & stream live video',
  }
];

function createProjectCard(project) {
  const card = document.createElement('div');
  card.className = 'column';

  card.innerHTML = `
    <div class="card">
      <a class="project__links" href="${project.link}" target="_blank">
        <div class="overflow">
          <img src="${project.imgSrc}" alt="Project" class="project__img" />
        </div>
      </a>
      <div class="project__container">
        <h4><b>${project.title}</b></h4>
        <p>
          <a class="project__links" href="${project.link}" target="_blank">
            ${project.displayText}
          </a>
        </p>
      </div>
    </div>  
  `;

  return card;
}

function renderProjects() {
  const row = document.querySelector('.row');
  projects.forEach(project => {
    const card = createProjectCard(project);
    row.appendChild(card);
  });
}

// Ensure the DOM is fully loaded before rendering
document.addEventListener('DOMContentLoaded', renderProjects);

function show() {
  mainMenu.style.display = "flex";
  mainMenu.style.top = "0px";
  openMenuLogo.classList.remove("hidden");
}

function close() {
  mainMenu.style.top = "-120%";
  openMenuLogo.classList.add("hidden");
}

openMenu.addEventListener("click", show);
closeMenu.addEventListener("click", close);
mainMenu.addEventListener("click", close);

particlesJS.load("particles-js", "particles.json", function () {
  console.log("particles loaded...");
});

const navbar = document.querySelector("header");
const sectionHero = document.querySelector(".hero");

const stickyNav = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) navbar.classList.add("sticky");
  else navbar.classList.remove("sticky");
};

const heroObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
});

heroObserver.observe(sectionHero);