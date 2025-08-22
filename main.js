// Array of speaker objects
const speakers = [
  {
    name: "Mr. Vytautas Naslenas",
    title: "Head of Regional Office, APAC",
    alt: "Photo of Mr. Vytautas Naslenas",
    img: "./images/speakers/mr-vytautas-naslenas.jfif",
  },
  {
    name: "Mr. Chun Kit Kan",
    title: "Vice President, APAC",
    alt: "Photo of Mr. Chun Kit Kan",
    img: "./images/speakers/default-male.jpg",
  },
  {
    name: "Mr. Adam Hourigan",
    title: "Channel Sales Manager, UK, Ireland, and APAC",
    alt: "Photo of Mr. Adam Hourigan",
    img: "./images/speakers/mr-adam-hourigan.jpg",
  },
  {
    name: "Mr. Mark Lee",
    title: "Regional Sales Manager, SEA",
    alt: "Photo of Mr. Mark Lee",
    img: "./images/speakers/mr-mark-lee.jpg",
  },
  {
    name: "Dr. Wonbong Choi",
    title:
      "Full-Time Professor and Distinguished Research Professor at the University of North Texas, Denton, USA",
    alt: "Photo of Dr. Wonbong Choi",
    img: "./images/speakers/dr-wonbong-choi.jpg",
  },
  {
    name: "Dr. Hongyu Zhou",
    title:
      "Associate Professor - Civil and Environmental Engineering University of Tennessee, USA",
    alt: "Photo of Dr. Hongyu Zhou",
    img: "./images/speakers/dr-hongyu-zhou.jpg",
  },
  {
    name: "Hortense Le Ferrand",
    title:
      "Associate Professor - School of Mechanical & Aerospace Engineering, School of Materials Science and Provost's Chair in Mechanical and Aerospace Engineering",
    alt: "Photo of Hortense Le Ferrand",
    img: "./images/speakers/hortense-le-ferrand.jpg",
  },
  {
    name: "Dr. Howon Lee",
    title:
      "Associate Professor - Advanced Manufacturing and Programmable Matter Laboratory Seoul National University, South Korea",
    alt: "Photo of Dr. Howon Lee",
    img: "./images/speakers/dr-howon-lee.jpg",
  },
  {
    name: "Prof. Leonard Tijing",
    title:
      "Associate Professor - School of Civil and Environmental Engineering, University of Technology Sydney (UTS), Australia",
    alt: "Photo of Prof. Leonard Tijing",
    img: "./images/speakers/prof-leonard-tijing.jpg",
  },
  {
    name: "Dr. Ravi Nathuram Bathe",
    title:
      "Scientist - G and Head at International Advanced Research Centre for Powder Metallurgy and New Materials (ARCI)",
    alt: "Photo of Dr. Ravi Nathuram Bathe",
    img: "./images/speakers/dr-ravi-nathuram-bathe.jpg",
  },
];

function renderSwiperSlides(containerSelector, items) {
  const container = document.querySelector(containerSelector);
  if (!container) return;
  const wrapper = container.querySelector(".swiper-wrapper");
  if (!wrapper) return;
  wrapper.innerHTML = items
    .map(
      (item) => `
    <div class="swiper-slide">
      <div class="flex flex-col items-center py-8">
        <img src="${item.img}" alt="${item.alt}" class="border-picton-blue-500 mb-4 h-32 w-32 rounded-full border-4 object-cover 2xl:h-52 2xl:w-52" />
        <p class="text-picton-blue-500 text-center font-bold">${item.name}</p>
        <p class="text-center text-sm">${item.title}</p>
      </div>
    </div>
  `,
    )
    .join("");
}

// Render speakers carousel
renderSwiperSlides(".speakers-swiper", speakers);

// Initialize Swiper
const swiper = new Swiper(".speakers-swiper", {
  speed: 400,
  spaceBetween: 30,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".speakers-swiper .swiper-pagination",
    clickable: true,
  },
  grabCursor: true,
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

// Burger Menu
const navMenu = document.getElementById("nav-menu");
const navLink = document.querySelectorAll(".nav-link");
const hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("left-[0]");
  hamburger.classList.toggle("ri-close-large-line");
});

navLink.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.toggle("left-[0]");
    hamburger.classList.toggle("ri-close-large-line");
  });
});

// Active Link (robust): only target sections with IDs and account for sticky nav height
const activeLink = () => {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");
  const nav = document.querySelector("#navbar nav");
  const navHeight = nav ? nav.offsetHeight : 0;
  const scrollY = window.scrollY;

  let current = "home";

  sections.forEach((section) => {
    const id = section.getAttribute("id");
    const sectionTop = section.offsetTop - (navHeight + 20);
    const sectionBottom = sectionTop + section.offsetHeight;
    if (scrollY >= sectionTop && scrollY < sectionBottom) {
      current = id;
    }
  });

  navLinks.forEach((item) => {
    item.classList.remove("active");
    const href = item.getAttribute("href") || "";
    if (href.includes(`#${current}`)) {
      item.classList.add("active");
    }
  });
};

window.addEventListener("scroll", activeLink, { passive: true });
window.addEventListener("load", activeLink);
