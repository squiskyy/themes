// Midnight Theme - Celestial Effects

document.addEventListener('DOMContentLoaded', () => {
  createStars();
  createParticles();
});

function createStars() {
  const starsContainer = document.querySelector('.stars');
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

function createParticles() {
  const particleCount = 15;
  
  for (let i = 0; i < particleCount; i++) {
    setTimeout(() => {
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
    }, i * 1000);
  }

  // Continuously create new particles
  setInterval(() => {
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

    setTimeout(() => {
      particle.remove();
    }, 15000);
  }, 2000);
}
