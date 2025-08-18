// ==========================================
// 🎵 CONFIGURAÇÕES DE ÁUDIO E PRELOADER
// ==========================================
var audio = document.getElementById("audioPlayer"),
    loader = document.getElementById("preloader");

// Função para alternar configurações
function settingtoggle() {
    document.getElementById("setting-container").classList.toggle("settingactivate");
    document.getElementById("visualmodetogglebuttoncontainer").classList.toggle("visualmodeshow");
    document.getElementById("soundtogglebuttoncontainer").classList.toggle("soundmodeshow");
}

// Função para tocar/pausar áudio
function playpause() {
    if (!document.getElementById("switchforsound").checked) {
        audio.pause();
    } else {
        audio.play();
    }
}

// Função para alternar modo visual (dark/light)
function visualmode() {
    document.body.classList.toggle("light-mode");
    document.querySelectorAll(".needtobeinvert").forEach(function(element) {
        element.classList.toggle("invertapplied");
    });
}

// ==========================================
// 🚀 CARREGAMENTO DA PÁGINA
// ==========================================
window.addEventListener("load", function() {
    loader.style.display = "none";
    document.querySelector(".hey").classList.add("popup");
});

// ==========================================
// 📱 MENU MOBILE
// ==========================================
let emptyArea = document.getElementById("emptyarea"),
    mobileTogglemenu = document.getElementById("mobiletogglemenu");

// Função do menu hamburger
function hamburgerMenu() {
    document.body.classList.toggle("stopscrolling");
    document.getElementById("mobiletogglemenu").classList.toggle("show-toggle-menu");
    document.getElementById("burger-bar1").classList.toggle("hamburger-animation1");
    document.getElementById("burger-bar2").classList.toggle("hamburger-animation2");
    document.getElementById("burger-bar3").classList.toggle("hamburger-animation3");
}

// Função para esconder menu mobile
function hidemenubyli() {
    document.body.classList.toggle("stopscrolling");
    document.getElementById("mobiletogglemenu").classList.remove("show-toggle-menu");
    document.getElementById("burger-bar1").classList.remove("hamburger-animation1");
    document.getElementById("burger-bar2").classList.remove("hamburger-animation2");
    document.getElementById("burger-bar3").classList.remove("hamburger-animation3");
}

// ==========================================
// 🧭 NAVEGAÇÃO ATIVA
// ==========================================
const sections = document.querySelectorAll("section"),
      navLi = document.querySelectorAll(".navbar .navbar-tabs .navbar-tabs-ul li"),
      mobilenavLi = document.querySelectorAll(".mobiletogglemenu .mobile-navbar-tabs-ul li");

// Event listener para scroll e navegação ativa
window.addEventListener("scroll", () => {
    let current = "";
    
    sections.forEach(section => {
        let sectionTop = section.offsetTop;
        section.clientHeight;
        
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute("id");
        }
    });
    
    // Atualiza navegação mobile
    mobilenavLi.forEach(li => {
        li.classList.remove("activeThismobiletab");
        if (li.classList.contains(current)) {
            li.classList.add("activeThismobiletab");
        }
    });
    
    // Atualiza navegação desktop
    navLi.forEach(li => {
        li.classList.remove("activeThistab");
        if (li.classList.contains(current)) {
            li.classList.add("activeThistab");
        }
    });
});

// ==========================================
// 🎨 CRÉDITOS
// ==========================================
console.log(
    "%c Designed and Developed by Luanna Bahia ", 
    "background-image: linear-gradient(90deg,#ff8800,#ff6600); color: white; font-weight: 900; font-size: 1rem; padding: 20px; border-radius: 8px;"
);

// ==========================================
// ⬆️ BOTÃO VOLTAR AO TOPO
// ==========================================
let mybutton = document.getElementById("backtotopbutton");

function scrollFunction() {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function scrolltoTopfunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

window.onscroll = function() {
    scrollFunction();
};

// ==========================================
// 🖼️ PROTEÇÃO DE IMAGENS
// ==========================================
document.addEventListener("contextmenu", function(e) {
    if (e.target.nodeName === "IMG") {
        e.preventDefault();
    }
}, false);

// ==========================================
// 👀 ANIMAÇÃO DOS OLHOS NO FOOTER
// ==========================================
let Pupils = document.getElementsByClassName("footer-pupil"),
    pupilsArr = Array.from(Pupils),
    pupilStartPoint = -10,
    pupilRangeX = 20,
    pupilRangeY = 15,
    mouseXStartPoint = 0,
    mouseXEndPoint = window.innerWidth,
    currentXPosition = 0,
    fracXValue = 0,
    mouseYEndPoint = window.innerHeight,
    currentYPosition = 0,
    fracYValue = 0,
    mouseXRange = mouseXEndPoint - mouseXStartPoint;

// Função de movimento do mouse
const mouseMove = (e) => {
    fracXValue = (currentXPosition = e.clientX - mouseXStartPoint) / mouseXRange;
    fracYValue = (currentYPosition = e.clientY) / mouseYEndPoint;
    
    let xVal = pupilStartPoint + fracXValue * pupilRangeX;
    let yVal = pupilStartPoint + fracYValue * pupilRangeY;
    
    pupilsArr.forEach(pupil => {
        pupil.style.transform = `translate(${xVal}px, ${yVal}px)`;
    });
};

// Função de redimensionamento da janela
const windowResize = (e) => {
    mouseXEndPoint = window.innerWidth;
    mouseYEndPoint = window.innerHeight;
    mouseXRange = mouseXEndPoint - mouseXStartPoint;
};

// Event listeners
window.addEventListener("mousemove", mouseMove);
window.addEventListener("resize", windowResize);
