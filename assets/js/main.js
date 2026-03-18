/**
 * Main JavaScript File
 * Initializes all components and handles global functionality
 */

// Configuration
const CONFIG = {
  weddingDate: 'June 19, 2026 18:00:00',
  hashtag: '#TejOmay',
  animationDuration: 300
};

// Utility Functions
const utils = {
  /**
   * Debounce function to limit function calls
   */
  debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  },
  
  /**
   * Check if element is in viewport
   */
  isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  },
  
  /**
   * Format date
   */
  formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString('en-US', options);
  }
};

// Performance Optimization
const performanceOptimizations = {
  /**
   * Lazy load images
   */
  lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
          observer.unobserve(img);
        }
      });
    });
    
    images.forEach(img => imageObserver.observe(img));
  },
  
  /**
   * Preload critical resources
   */
  preloadResources() {
    const criticalImages = [
      // Add paths to critical images here
    ];
    
    criticalImages.forEach(src => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);
    });
  }
};

// Analytics (Optional)
const analytics = {
  /**
   * Track page view
   */
  trackPageView() {
    // Add your analytics code here (Google Analytics, etc.)
    console.log('Page view tracked');
  },
  
  /**
   * Track event
   */
  trackEvent(category, action, label) {
    // Add your analytics code here
    console.log(`Event tracked: ${category} - ${action} - ${label}`);
  }
};

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  // Performance optimizations
  performanceOptimizations.lazyLoadImages();
  performanceOptimizations.preloadResources();
  
  // Analytics
  analytics.trackPageView();
  
  // Log initialization
  console.log('Wedding website initialized successfully! 💍');
  console.log(`Wedding date: ${CONFIG.weddingDate}`);
  console.log(`Hashtag: ${CONFIG.hashtag}`);
});

// Handle page visibility changes
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    console.log('Page hidden');
  } else {
    console.log('Page visible');
  }
});

// Export utilities for use in other modules
window.WeddingUtils = utils;
window.WeddingConfig = CONFIG;
