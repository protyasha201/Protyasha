//toggle navbar click handler

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    })
})

//creating div items and adding websites.

//getting image url.
const imageUrl = ["images/hungry-monster.png", "images/virtual-drums.png", "images/hard-rock.png", "images/mega-bus.png", "images/shopping-cart.png", "images/calculator.png", "images/temperature.png", "images/bank-project.png", "images/pin-generator.png", "images/shoes-landing.png", "images/manobik.png", "images/panda-commerce.png", "images/general-portfolio.png"];

//getting website names
const webName = ["Hungry Monster","Virtual Drums", "Hard Rock", "Mega Bus", "Shopping Cart", "Calculator", "Temperature App", "Bank App", "Pin Generator", "Shoes Landing Page", "Manobik", "Panda Commerce", "CSS Portfolio"];

//getting used language names.
const language = ["Javascript, API, CSS", "Javascript, CSS", "Javascript, API, CSS, Bootstrap", "Javascript, CSS", "Javascript, CSS", "Javascript, CSS", "Javascript, API, CSS", "Javascript, CSS", "Javascript, CSS", "Bootstrap, CSS", "Bootstrap, CSS", "Bootstrap, CSS", "CSS"];

//getting web links
const webLinks = ["https://protyasha201.github.io/Hungry-Monster/", "https://protyasha201.github.io/virtual-drums/", "https://protyasha201.github.io/Hard-Rock/", "https://protyasha201.github.io/mega-bus/", "https://protyasha201.github.io/shopping-cart/", "https://protyasha201.github.io/Calculator/", "https://protyasha201.github.io/temperature-hot/", "https://protyasha201.github.io/Bank-Project/", "https://protyasha201.github.io/pin-generator/", "https://protyasha201.github.io/shoes-landing-page/", "https://protyasha201.github.io/manobik/", "https://protyasha201.github.io/panda-commerce-bootstrap/", "https://protyasha201.github.io/portfolio-web/"];

//getting code links
const codeLink = ["https://github.com/protyasha201/Hungry-Monster", "https://github.com/protyasha201/virtual-drums" , "https://github.com/protyasha201/Hard-Rock", "https://github.com/protyasha201/mega-bus","https://github.com/protyasha201/shopping-cart", "https://github.com/protyasha201/Calculator", "https://github.com/protyasha201/temperature-hot", "https://github.com/protyasha201/Bank-Project", "https://github.com/protyasha201/pin-generator", "https://github.com/protyasha201/shoes-landing-page", "https://github.com/protyasha201/manobik", "https://github.com/protyasha201/panda-commerce-bootstrap", "https://github.com/protyasha201/portfolio-web"];


for(let i = 0; i < webLinks.length; i++){
    const websites = document.getElementById("websites");
    const webDiv = document.createElement("div");
    webDiv.className = "webDiv";
    const webDivCode = `
    <a href="${webLinks[i]}">
        <div class="web-image">
            <img src="${imageUrl[i]}" alt="">
        </div>
        <div class="web-title">
            <h3>${webName[i]}</h3>
            <h4>Made with: ${language[i]}</h4>
        </div>
    </a>
    <a class="codeLink" href="${codeLink}">{Code}</a>
    `
    webDiv.innerHTML = webDivCode;
    websites.appendChild(webDiv);
}