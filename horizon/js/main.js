// Horizon Theme — Enhanced Interactivity

document.addEventListener('DOMContentLoaded', () => {
  initSmoothScroll();
  initTabs();
  initForms();
  initButtons();
  initNavbar();
  initObserver();
});

/** Smooth scroll for anchor links */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        const navHeight = document.querySelector('.navbar').offsetHeight;
        const targetPosition = target.offsetTop - navHeight - 20;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

/** Tab functionality */
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

/** Form handling with visual feedback */
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
        
        // Simulate network request
        setTimeout(() => {
          submitBtn.textContent = 'Sent! ✓';
          submitBtn.style.background = '#22c55e';
          
          setTimeout(() => {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            submitBtn.style.background = '';
            form.reset();
          }, 2000);
        }, 1000);
      }
    });
  });

  // Input focus effects
  const inputs = document.querySelectorAll('.form-control');
  inputs.forEach(input => {
    input.addEventListener('focus', () => {
      input.parentElement?.classList.add('focused');
    });
    input.addEventListener('blur', () => {
      input.parentElement?.classList.remove('focused');
    });
  });
}

/** Button ripple effects */
function initButtons() {
  const buttons = document.querySelectorAll('.btn');
  buttons.forEach(button => {
    if (button.disabled) return;
    
    button.addEventListener('click', function(e) {
      const rect = button.getBoundingClientRect();
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
      
      button.style.position = 'relative';
      button.style.overflow = 'hidden';
      button.appendChild(ripple);
      
      setTimeout(() => ripple.remove(), 600);
    });
  });
}

/** Navbar scroll effect */
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;
  
  let lastScroll = 0;
  
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
      navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
    } else {
      navbar.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
  });
}

/** Scroll-triggered animations */
function initObserver() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
      }
    });
  }, { threshold: 0.1 });
  
  // Observe showcase sections
  document.querySelectorAll('.showcase-section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(section);
  });
}

// Add ripple animation keyframes
const style = document.createElement('style');
style.textContent = `
  @keyframes ripple {
    to { transform: scale(4); opacity: 0; }
  }
  .focused .form-control {
    box-shadow: 0 0 0 3px rgba(249, 115, 22, 0.15);
  }
  .animate-in {
    opacity: 1 !important;
    transform: translateY(0) !important;
  }
`;
document.head.appendChild(style);

/** Modal toggle */
function toggleModal() {
  const modal = document.getElementById('demoModal');
  if (!modal) return;
  
  modal.classList.toggle('active');
  document.body.style.overflow = modal.classList.contains('active') ? 'hidden' : '';
}

/** Close modal on escape key */
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    const modal = document.getElementById('demoModal');
    if (modal?.classList.contains('active')) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }
});