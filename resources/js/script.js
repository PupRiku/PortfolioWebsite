const aboutText = document.getElementById('about-link');
const skillText = document.getElementById('skills-link');
const projectsText = document.getElementById('projects-link');
const contactText = document.getElementById('contact-link');

const aboutImg = document.getElementById('about-img');
const skillImg = document.getElementById('skill-img');
const projectsImg = document.getElementById('projects-img');
const contactImg = document.getElementById('contact-img');

aboutText.onmouseenter = function() {
  aboutImg.style.width = '100px';
  aboutImg.style.height = 'auto';
  aboutImg.style.opacity = '1';
  aboutImg.style.transitionDuration = '2s';
};
aboutText.onmouseleave = function() {
  aboutImg.style.width = '1px';
  aboutImg.style.height = 'auto';
  aboutImg.style.opacity = '0';
  aboutImg.style.transitionDuration = '2s';
};
skillText.onmouseenter = function() {
  skillImg.style.width = '100px';
  skillImg.style.height = 'auto';
  skillImg.style.opacity = '1';
  skillImg.style.transitionDuration = '2s';
};
skillText.onmouseleave = function() {
  skillImg.style.width = '1px';
  skillImg.style.height = 'auto';
  skillImg.style.opacity = '0';
  skillImg.style.transitionDuration = '2s';
};
projectsText.onmouseenter = function() {
  projectsImg.style.width = '100px';
  projectsImg.style.height = 'auto';
  projectsImg.style.opacity = '1';
  projectsImg.style.transitionDuration = '2s';
};
projectsText.onmouseleave = function() {
  projectsImg.style.width = '1px';
  projectsImg.style.height = 'auto';
  projectsImg.style.opacity = '0';
  projectsImg.style.transitionDuration = '2s';
};
contactText.onmouseenter = function() {
  contactImg.style.width = '100px';
  contactImg.style.height = 'auto';
  contactImg.style.opacity = '1';
  contactImg.style.transitionDuration = '2s';
};
contactText.onmouseleave = function() {
  contactImg.style.width = '1px';
  contactImg.style.height = 'auto';
  contactImg.style.opacity = '0';
  contactImg.style.transitionDuration = '2s';
};
