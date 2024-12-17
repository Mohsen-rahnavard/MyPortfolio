// Smooth scroll to the contact section
document.getElementById('contactButton').addEventListener('click', function() {
  document.getElementById('contact-nav').scrollIntoView({
      behavior: 'smooth'
  });
});

// Prevent default behavior for anchor links inside the project div and open them in a new tab
document.querySelectorAll('.project-div a').forEach(anchor => {
  anchor.addEventListener('click', function(event) {
      event.preventDefault(); 
      window.open(this.href, '_blank'); 
  });
});

// Toggle visibility of the project details on click
document.querySelectorAll('.project-div').forEach(projectDiv => {
  projectDiv.addEventListener('click', function(event) {
      if (event.target.tagName.toLowerCase() === 'a') {
          return;
      }
      
      const moreData = this.querySelector('.otherDocument');
      moreData.classList.toggle('visible');
      
      if (moreData.classList.contains('visible')) {
          setTimeout(() => {
              moreData.classList.remove('visible');
          }, 10000); 
      }
  });
});

// Check visibility of elements on scroll
window.addEventListener('scroll', () => {
  document.querySelectorAll('.project-div-left, .project-div-right').forEach(project => {
      const rect = project.getBoundingClientRect();
      project.classList.toggle('visible', rect.top <= window.innerHeight && rect.bottom >= 0);
  });
});

// Handle skill visibility when in view
const checkSkillVisibility = () => {
  document.querySelectorAll('.skill-left, .skill-right').forEach(skill => {
      const rect = skill.getBoundingClientRect();
      const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;
      skill.classList.toggle(skill.classList.contains('skill-left') ? 'visible-left' : 'visible-right', isVisible);
  });
};
window.addEventListener('scroll', checkSkillVisibility);
checkSkillVisibility();

// Scroll to the about section when navbar is clicked
document.getElementById('navbar').addEventListener('click', function() {
  document.getElementById('about').scrollIntoView({
      behavior: 'smooth'
  });
});
