// Midnight Theme — Minimal & Professional

document.addEventListener('DOMContentLoaded', () => {
  createStars();
  initTabs();
  initSmoothScroll();
  initForms();
});

/**
 * Create subtle starfield background
 */
function createStars() {
  const starsContainer = document.querySelector('.stars');
  if (!starsContainer) return;
  
  const starCount = 100;

  for (let i = 0; i < starCount; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const size = Math.random() * 1.5 + 0.5;
    const delay = Math.random() * 5;
    const duration = Math.random() * 5 + 5;

    star.style.cssText = `
      position: absolute;
      left: ${x}%;
      top: ${y}%;
      width: ${size}px;
      height: ${size}px;
      background: rgba(232, 236, 241, 0.6);
      border-radius: 50%;
      animation: twinkle ${duration}s ease-in-out infinite;
      animation-delay: ${delay}s;
    `;

    starsContainer.appendChild(star);
  }
}

/**
 * Initialize tab functionality
 */
function initTabs() {
  const tabs = document.querySelectorAll('.tab');
  if (!tabs.length) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
    });
  });
}

/**
 * Smooth scroll for anchor links
 */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

/**
 * Form handling
 */
function initForms() {
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const submitBtn = form.querySelector('button[type="submit"]');
      if (submitBtn) {
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
          submitBtn.textContent = originalText;
          submitBtn.disabled = false;
          form.reset();
        }, 1500);
      }
    });
  });
}

/**
 * Modal toggle
 */
function toggleModal() {
  const modal = document.getElementById('demoModal');
  if (!modal) return;
  
  modal.classList.toggle('active');
  document.body.style.overflow = modal.classList.contains('active') ? 'hidden' : '';
}
