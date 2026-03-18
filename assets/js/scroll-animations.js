/**
 * Scroll Animations
 * Intersection Observer for scroll-triggered animations
 */

class ScrollAnimations {
  constructor(options = {}) {
    this.options = {
      threshold: options.threshold || 0.1,
      rootMargin: options.rootMargin || '0px 0px -100px 0px',
      animationClass: options.animationClass || 'animate-in'
    };
    
    this.observer = null;
    this.init();
  }
  
  init() {
    // Fallback for older browsers / some in-app webviews
    if (typeof window.IntersectionObserver !== 'function') {
      this.applyFallback();
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => this.handleIntersection(entries),
      {
        threshold: this.options.threshold,
        rootMargin: this.options.rootMargin
      }
    );
    
    this.observeElements();

    // In case some elements are already in view on load (mobile)
    this.animateVisibleNow();
  }
  
  observeElements() {
    const elements = document.querySelectorAll(
      '.timeline-item, .event-card, .gallery-item, .dress-guide-card'
    );
    
    elements.forEach(element => {
      this.observer.observe(element);
    });
  }

  animateVisibleNow() {
    const elements = document.querySelectorAll(
      '.timeline-item, .event-card, .gallery-item, .dress-guide-card'
    );

    elements.forEach(el => {
      const rect = el.getBoundingClientRect();
      const inView = rect.top < (window.innerHeight || document.documentElement.clientHeight);
      if (inView) {
        el.classList.add(this.options.animationClass);
      }
    });
  }

  applyFallback() {
    const elements = document.querySelectorAll(
      '.timeline-item, .event-card, .gallery-item, .dress-guide-card'
    );

    // Just animate everything in (still looks good on mobile)
    elements.forEach(el => el.classList.add(this.options.animationClass));
  }
  
  handleIntersection(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add(this.options.animationClass);
        // Optionally unobserve after animation
        // this.observer.unobserve(entry.target);
      }
    });
  }
  
  destroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}

// Initialize scroll animations when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  const instance = new ScrollAnimations();

  // When coming back via back button (bfcache), re-apply
  window.addEventListener('pageshow', () => {
    if (instance && typeof instance.animateVisibleNow === 'function') {
      instance.animateVisibleNow();
    }
  });
});
