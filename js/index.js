const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])
logo.alt = 'great idea logo'

const ctaLogo = document.getElementById('cta-img')
ctaLogo.setAttribute('src', siteContent["cta"]["img-src"])
ctaLogo.alt ='Image of a code snippet'

const navArray = document.querySelectorAll("nav a");
navArray[0].textContent = siteContent["nav"]["nav-item-1"];
navArray[1].textContent = siteContent["nav"]["nav-item-2"];
navArray[2].textContent = siteContent["nav"]["nav-item-3"];
navArray[3].textContent = siteContent["nav"]["nav-item-4"];
navArray[4].textContent = siteContent["nav"]["nav-item-5"];
navArray[5].textContent = siteContent["nav"]["nav-item-6"];

navArray.forEach(element =>{
  element.style.color ='green'
})

const ctaText = document.querySelector(".cta-text h1").innerHTML = "DOM <br> Is <br> Awesome";

const ctaBttn = document.querySelector(".cta-text button").innerHTML ="Get Started"

const middleImg = document.getElementById("middle-img")
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])
middleImg.alt='Image of code snippets across the screen'

const mainContent = document.querySelectorAll("h4");
mainContent[0].textContent = siteContent["main-content"]["features-h4"]
mainContent[1].textContent = siteContent["main-content"]["about-h4"]
mainContent[2].textContent = siteContent["main-content"]["services-h4"]
mainContent[3].textContent = siteContent["main-content"]["product-h4"]
mainContent[4].textContent = siteContent["main-content"]["vision-h4"]

const mainContentP = document.querySelectorAll(".top-content p");
mainContentP[0].textContent = siteContent["main-content"]["features-content"]
mainContentP[1].textContent = siteContent["main-content"]["about-content"]

const mainContentPS = document.querySelectorAll(".bottom-content p");
mainContentPS[0].textContent = siteContent["main-content"]["services-content"];
mainContentPS[1].textContent = siteContent["main-content"]["product-content"];
mainContentPS[2].textContent = siteContent["main-content"]["vision-content"];

const contactContent = document.querySelectorAll(".contact h4")
contactContent[0].textContent = siteContent["contact"]["contact-h4"];

const contactContentP = document.querySelectorAll(".contact p")
contactContentP[0].textContent = siteContent["contact"]["address"]
contactContentP[1].textContent = siteContent["contact"]["phone"];
contactContentP[2].textContent = siteContent["contact"]["email"];

const footerContent = document.querySelectorAll("footer p");
footerContent[0].textContent = siteContent["footer"]["copyright"]

const newListItem = document.createElement('a');
newListItem.textContent = "Community"

const parentElement = document.querySelector('nav');
parentElement.append(newListItem) 

const newListItemTwo = document.createElement('a');
newListItemTwo.textContent = "Home"
parentElement.prepend(newListItemTwo)

newListItem.setAttribute("style", "color:green")
newListItemTwo.setAttribute("style", "color:green")