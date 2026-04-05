/**
 * Navigation
 * Smooth scrolling and navbar scroll effects
 */

class Navigation {
  constructor() {
    this.navbar = document.querySelector('.navbar');
    this.navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
    this.navToggle = document.querySelector('.nav-toggle');
    this.navMenu = document.querySelector('.nav-menu');
    this.scrollThreshold = 100;
    
    this.init();
  }
  
  init() {
    this.setupSmoothScroll();
    this.setupScrollEffect();
    this.setupMobileMenu();
  }
  
  setupMobileMenu() {
    if (!this.navToggle || !this.navMenu) return;
    
    // Toggle mobile menu
    this.navToggle.addEventListener('click', () => {
      this.navToggle.classList.toggle('active');
      this.navMenu.classList.toggle('active');
      
      // Update aria-expanded attribute
      const isExpanded = this.navMenu.classList.contains('active');
      this.navToggle.setAttribute('aria-expanded', isExpanded);
    });
    
    // Close menu when clicking a link
    this.navLinks.forEach(link => {
      link.addEventListener('click', () => {
        this.navToggle.classList.remove('active');
        this.navMenu.classList.remove('active');
        this.navToggle.setAttribute('aria-expanded', 'false');
      });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!this.navbar.contains(e.target) && this.navMenu.classList.contains('active')) {
        this.navToggle.classList.remove('active');
        this.navMenu.classList.remove('active');
        this.navToggle.setAttribute('aria-expanded', 'false');
      }
    });
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
