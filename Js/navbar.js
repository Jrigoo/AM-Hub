const navbar = document.getElementById("navbar");
const navHeight = navbar.getBoundingClientRect().height;
const horizontalWidth = window.innerWidth;
window.addEventListener("scroll", () => {
  const scrollHeight = window.pageYOffset;

  /* NAV BAR PEGADA AL TOP---------------------- */
  if (scrollHeight > navHeight - 10 && horizontalWidth > 900) {
    navbar.classList.add("fixed__navbar");
  } else {
    navbar.classList.remove("fixed__navbar");
  }
});

/* BURGUER------------------------ */
const burguer = document.getElementById("burguer");
const links = document.getElementById("navbar__links-list");
const linksContainer = document.getElementById("navbar__links");

class Burguer {
  constructor() {
    linksContainer.style.height = 0;
  }
  activate(containerHeight, linksHeight) {
    if (containerHeight === 0) {
      linksContainer.style.height = `${linksHeight + 20}px`;
    } else {
      linksContainer.style.height = 0;
    }
  }
}

const hamburguesa = new Burguer();
burger.addEventListener("click", () => {
  const linksHeight = links.getBoundingClientRect().height;
  const containerHeight = linksContainer.getBoundingClientRect().height;
  hamburguesa.activate(containerHeight, linksHeight);
});
