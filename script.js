// === MENU UTAMA MOBILE ===
function hamburg() {
  const navbar = document.querySelector(".dropdown");
  navbar.style.transform = "translateY(0)";
  navbar.style.zIndex = "9999"; // pastikan tampil di depan
}

function cancel() {
  const navbar = document.querySelector(".dropdown");
  navbar.style.transform = "translateY(-500px)";
}

// Animasi Menulis

const texts = [
    "A STUDENT",
]

let speed = 100;

const textElements = document.querySelector(".typewriter-text")

let textIndex = 0;
let charcterIndex = 0;

function typeWriter() {
    if(charcterIndex < texts[textIndex].length){
        textElements.innerHTML += texts[textIndex].charAt(charcterIndex);
        charcterIndex++;
        setTimeout(typeWriter, speed); 
    }
    else{
        setTimeout(eraseText, 1000)
    }
}

function eraseText() {
    if(textElements.innerHTML.length > 0){
        textElements.innerHTML = textElements.innerHTML.slice(0,-1)
        setTimeout(eraseText, 50)
    }
    else{
        textIndex = (textIndex + 1) % texts.length;
        charcterIndex = 0;
        setTimeout(typeWriter,500)
    }
}

window.onload = typeWriter;

  const menuIcon = document.getElementById("menu-icon");
  const menuDropdown = document.querySelector(".menu-dropdown");

  menuIcon.addEventListener("click", () => {
    menuDropdown.classList.toggle("show");
  });

  // Klik di luar menu biar nutup otomatis
  document.addEventListener("click", (e) => {
    if (!menuIcon.contains(e.target) && !menuDropdown.contains(e.target)) {
      menuDropdown.classList.remove("show");
    }
  });
// Efek klik titik bulat navigasi
document.addEventListener("click", function (e) {
    if (e.target.classList.contains("dot")) {
      const index = parseInt(e.target.getAttribute("data-index"));
      const container = document.getElementById("videoContainer");
      const dots = document.querySelectorAll(".dot");
  
      container.scrollTo({
        left: index * 270, // geser tiap card lebar 250px + gap
        behavior: "smooth",
      });
  
      dots.forEach(d => d.classList.remove("active"));
      e.target.classList.add("active");
    }
  });
  AOS.init({ offset: 0 });

  function showProjects() {
    const aboutContent = document.getElementById("aboutContent");
    aboutContent.innerHTML = `
      <a href="about.html" class="back-button"><i class="fas fa-arrow-left"></i> Back</a>
      <div class="about-header"><h1>Editing Saya</h1></div>
      <div class="content-grid">${generateProjectCards()}</div>
    `;
  }
  