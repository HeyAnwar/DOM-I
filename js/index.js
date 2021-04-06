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

//IMAGES
let image1 = document.getElementById("cta-img");
image1.setAttribute('src', siteContent["cta"]["img-src"])


//NAV
const navBar = document.querySelectorAll('nav > a')
navBar[0].textContent = siteContent.nav['nav-item-1'];
navBar[1].textContent = siteContent.nav['nav-item-2'];
navBar[2].textContent = siteContent.nav['nav-item-3'];
navBar[3].textContent = siteContent.nav['nav-item-4'];
navBar[4].textContent = siteContent.nav['nav-item-5'];
navBar[5].textContent = siteContent.nav['nav-item-6'];

navBar.forEach(item => item.style.color = 'green')

// let link1 = document.querySelector('nav a');
// link1.append('Services')

// let link2 = document.querySelector('nav a:nth-of-type(2)')
// link2.append('Product')

// let link3 = document.querySelector('nav a:nth-of-type(3)')
// link3.append('Vision')

// let link4 = document.querySelector('nav a:nth-of-type(4)')
// link4.append('Features')

// let link5 = document.querySelector('nav a:nth-of-type(5)')
// link5.append('About')

// let link6 = document.querySelector('nav a:nth-of-type(6)')
// link6.append('Contact')

//Header
const headerTitle = document.querySelector('.cta-text h1');
headerTitle.textContent = siteContent['cta']['h1'];

//Button
const buttonText = document.querySelector('.cta-text button');
buttonText.textContent = siteContent['cta']['button']

//Top
const topContent = document.querySelector('.top-content')
const topSubtitles = document.querySelectorAll('h4')
const topParagraph = document.querySelectorAll('p')
topSubtitles[0].textContent = siteContent['main-content']['features-h4']
topSubtitles[1].textContent = siteContent['main-content']['about-h4']
topParagraph[0].textContent = siteContent['main-content']['features-content']
topParagraph[1].textContent = siteContent['main-content']['about-content']

//Mid image
const middleImage = document.querySelector('#middle-img')
middleImage.src = siteContent['main-content']['middle-img-src']

//Bottom
const bottomContent = document.querySelector('.bottom-content')
const botSubtitles = document.querySelectorAll('h4')
const botParagraphs = document.querySelectorAll('p')
botSubtitles[2].textContent = siteContent['main-content']['services-h4']
botSubtitles[3].textContent = siteContent['main-content']['product-h4']
botSubtitles[4].textContent = siteContent['main-content']['vision-h4']
botParagraphs[2].textContent = siteContent['main-content']['services-content']
botParagraphs[3].textContent = siteContent['main-content']['product-content']
botParagraphs[4].textContent = siteContent['main-content']['vision-content']