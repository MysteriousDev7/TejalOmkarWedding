/**
 * Countdown Timer
 * Live countdown to wedding day
 */

class CountdownTimer {
  constructor(targetDate, elementIds) {
    this.targetDate = new Date(targetDate).getTime();
    this.elements = {
      days: document.getElementById(elementIds.days),
      hours: document.getElementById(elementIds.hours),
      minutes: document.getElementById(elementIds.minutes),
      seconds: document.getElementById(elementIds.seconds)
    };
    
    this.init();
  }
  
  init() {
    this.updateCountdown();
    this.intervalId = setInterval(() => this.updateCountdown(), 1000);
  }
  
  updateCountdown() {
    const now = new Date().getTime();
    const distance = this.targetDate - now;
    
    if (distance < 0) {
      this.stop();
      return;
    }
    
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    this.updateDisplay(days, hours, minutes, seconds);
  }
  
  updateDisplay(days, hours, minutes, seconds) {
    if (this.elements.days) {
      this.elements.days.textContent = String(days).padStart(3, '0');
    }
    if (this.elements.hours) {
      this.elements.hours.textContent = String(hours).padStart(2, '0');
    }
    if (this.elements.minutes) {
      this.elements.minutes.textContent = String(minutes).padStart(2, '0');
    }
    if (this.elements.seconds) {
      this.elements.seconds.textContent = String(seconds).padStart(2, '0');
    }
  }
  
  stop() {
    clearInterval(this.intervalId);
    this.updateDisplay(0, 0, 0, 0);
  }
}

// Initialize countdown when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  // Read wedding date from config or use default
  const weddingDate = 'June 19, 2026 18:00:00';
  
  new CountdownTimer(weddingDate, {
    days: 'days',
    hours: 'hours',
    minutes: 'minutes',
    seconds: 'seconds'
  });
});
