// Midnight Theme - Interactive Components

document.addEventListener('DOMContentLoaded', () => {
  createStars();
  createParticles();
  initTabs();
  initSmoothScroll();
});

/**
 * Create animated starfield background
 */
function createStars() {
  const starsContainer = document.querySelector('.stars');
  if (!starsContainer) return;
  
  const starCount = 200;

  for (let i = 0; i < starCount; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const size = Math.random() * 2 + 1;
    const delay = Math.random() * 5;
    const duration = Math.random() * 3 + 2;

    star.style.cssText = `
      position: absolute;
      left: ${x}%;
      top: ${y}%;
      width: ${size}px;
      height: ${size}px;
      background: white;
      border-radius: 50%;
      opacity: ${Math.random() * 0.8 + 0.2};
      animation: twinkle ${duration}s ease-in-out infinite;
      animation-delay: ${delay}s;
    `;

    starsContainer.appendChild(star);
  }
}

/**
 * Create floating gold particles
 */
function createParticles() {
  const particleCount = 15;
  
  // Initial particles
  for (let i = 0; i < particleCount; i++) {
    setTimeout(() => {
      createParticle();
    }, i * 1000);
  }

  // Continuously create new particles
  setInterval(() => {
    createParticle();
  }, 2000);
}

function createParticle() {
  const particle = document.createElement('div');
  particle.className = 'particle';
  
  const size = Math.random() * 4 + 2;
  const left = Math.random() * 100;
  
  particle.style.cssText = `
    width: ${size}px;
    height: ${size}px;
    left: ${left}%;
    bottom: -10px;
    opacity: ${Math.random() * 0.5 + 0.3};
  `;

  document.body.appendChild(particle);

  // Remove particle after animation
  setTimeout(() => {
    particle.remove();
  }, 15000);
}

/**
 * Initialize tab functionality
 */
function initTabs() {
  const tabs = document.querySelectorAll('.tab');
  if (!tabs.length) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Remove active class from all tabs
      tabs.forEach(t => t.classList.remove('active'));
      // Add active class to clicked tab
      tab.classList.add('active');
    });
  });
}

/**
 * Modal toggle function (global scope for onclick handlers)
 */
function toggleModal() {
  const modal = document.getElementById('demoModal');
  if (!modal) return;
  
  modal.classList.toggle('active');
  
  // Prevent body scroll when modal is open
  if (modal.classList.contains('active')) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
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
 * Form validation enhancement
 */
const forms = document.querySelectorAll('form');
forms.forEach(form => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Visual feedback for demo
    const submitBtn = form.querySelector('button[type="submit"]');
    if (submitBtn) {
      const originalText = submitBtn.textContent;
      submitBtn.textContent = 'Submitting...';
      submitBtn.disabled = true;
      
      setTimeout(() => {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        
        // Show success alert
        showAlert('Form submitted successfully!', 'success');
        form.reset();
      }, 1500);
    }
  });
});

/**
 * Show alert message
 */
function showAlert(message, type = 'info') {
  const alert = document.createElement('div');
  alert.className = `alert alert-${type}`;
  alert.innerHTML = `<strong>${type.charAt(0).toUpperCase() + type.slice(1)}!</strong> ${message}`;
  alert.style.position = 'fixed';
  alert.style.top = '20px';
  alert.style.right = '20px';
  alert.style.zIndex = '2000';
  alert.style.minWidth = '300px';
  alert.style.animation = 'modalSlide 0.3s ease';
  
  document.body.appendChild(alert);
  
  setTimeout(() => {
    alert.style.opacity = '0';
    alert.style.transition = 'opacity 0.3s ease';
    setTimeout(() => alert.remove(), 300);
  }, 3000);
}

/**
 * Button ripple effect (optional enhancement)
 */
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
  button.addEventListener('click', function(e) {
    // Skip if button is disabled
    if (this.disabled) return;
    
    const rect = this.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const ripple = document.createElement('span');
    ripple.style.cssText = `
      position: absolute;
      background: rgba(255, 255, 255, 0.3);
      border-radius: 50%;
      transform: scale(0);
      animation: ripple 0.6s linear;
      pointer-events: none;
      left: ${x}px;
      top: ${y}px;
      width: 100px;
      height: 100px;
      margin-left: -50px;
      margin-top: -50px;
    `;
    
    this.style.position = 'relative';
    this.style.overflow = 'hidden';
    this.appendChild(ripple);
    
    setTimeout(() => ripple.remove(), 600);
  });
});

// Add ripple keyframes dynamically
const style = document.createElement('style');
style.textContent = `
  @keyframes ripple {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);
