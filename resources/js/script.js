const aboutText = document.getElementById('about-link');
const skillText = document.getElementById('skills-link');
const projectsText = document.getElementById('projects-link');
const contactText = document.getElementById('contact-link');

const aboutImg = document.getElementById('about-img');
const skillImg = document.getElementById('skill-img');
const projectsImg = document.getElementById('projects-img');
const contactImg = document.getElementById('contact-img');

const menuEnter = (textID) => {
  switch(textID.id){
    case 'about-link':
      break;
    case 'skills-link':
      break;
    case 'projects-link':
      break;
    case 'contact-link':
      break;
  }
}
const menuExit = (textID) => {
  switch(textID.id){
    case 'about-link':
      break;
    case 'skills-link':
      break;
    case 'projects-link':
      break;
    case 'contact-link':
      break;
  }
}

aboutText.onmouseenter = menuEnter(aboutText);
aboutText.onmouseout = menuExit(aboutText);
skillText.onmouseenter = menuEnter(skillText);
skillText.onmouseout = menuExit(skillText);
projectsText.onmouseenter = menuEnter(projectsText);
projectsText.onmouseout = menuExit(projectsText);
contactText.onmouseenter = menuEnter(contactText);
contactText.onmouseout = menuExit(contactText);


const source = document.getElementById('popup').innerHTML;
const template = Handlebars.compile(source);
const context = {
    greeting: 'Hello World!'
  }
const compiledHtml = template(context);
const fill = document.getElementById('description');
fill.innerHTML = compiledHtml;
