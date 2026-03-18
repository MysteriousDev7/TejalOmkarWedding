/**
 * Navigation
 * Smooth scrolling and navbar scroll effects
 */

class Navigation {
  constructor() {
    this.navbar = document.querySelector('.navbar');
    this.navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
    this.scrollThreshold = 100;
    
    this.init();
  }
  
  init() {
    this.setupSmoothScroll();
    this.setupScrollEffect();
  }
  
  setupSmoothScroll() {
    this.navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }
  
  setupScrollEffect() {
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;
      
      if (currentScroll > this.scrollThreshold) {
        this.navbar.classList.add('scrolled');
      } else {
        this.navbar.classList.remove('scrolled');
      }
      
      lastScroll = currentScroll;
    });
  }
}

// Initialize navigation when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  new Navigation();
});
