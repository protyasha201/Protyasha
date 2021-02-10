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
const imageUrl = ["images/myself.jpg","images/hungry-monster.png"];

//getting website names
const webName = ["Personal Portfolio", "Food Website"];

//getting used language names.
const language = ["HTML,CSS", "HTML,CSS,javascript"]

//getting web links
const webLinks = [""];

for(let i = 0; i < imageUrl.length; i++){
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
            <h4>Made with ${language[i]}</h4>
        </div>
    </a>
    `
    webDiv.innerHTML = webDivCode;
    websites.appendChild(webDiv);
}