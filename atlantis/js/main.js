// Atlantis Admin Dashboard — Enhanced Chart.js Integration
document.addEventListener('DOMContentLoaded', () => {
  initCharts();
  initSidebar();
  initDropdowns();
  initCards();
  initNavbar();
});

/** Initialize all charts */
function initCharts() {
  // Global defaults
  Chart.defaults.color = '#94a3b8';
  Chart.defaults.borderColor = 'rgba(30, 74, 122, 0.3)';
  Chart.defaults.font.family = "'Inter', -apple-system, sans-serif";
  
  initRevenueChart();
  initTrafficChart();
  initActivityChart();
}

/** Revenue Line Chart */
function initRevenueChart() {
  const ctx = document.getElementById('revenueChart');
  if (!ctx) return;
  
  const gradient = ctx.getContext('2d').createLinearGradient(0, 0, 0, 300);
  gradient.addColorStop(0, 'rgba(59, 130, 246, 0.3)');
  gradient.addColorStop(1, 'rgba(59, 130, 246, 0)');

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      datasets: [{
        label: 'Revenue',
        data: [12500, 15200, 13800, 17400, 19200, 21500, 24300],
        borderColor: '#3b82f6',
        backgroundColor: gradient,
        borderWidth: 2.5,
        fill: true,
        tension: 0.4,
        pointBackgroundColor: '#3b82f6',
        pointBorderColor: '#0f243d',
        pointBorderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 6,
        pointHoverBackgroundColor: '#60a5fa'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: 'rgba(15, 36, 61, 0.95)',
          titleColor: '#f1f5f9',
          bodyColor: '#94a3b8',
          borderColor: '#1e4a7a',
          borderWidth: 1,
          padding: 14,
          displayColors: false,
          titleFont: { weight: '600', size: 13 },
          bodyFont: { size: 12 },
          callbacks: {
            label: (ctx) => '$' + ctx.parsed.y.toLocaleString()
          }
        }
      },
      scales: {
        x: {
          grid: { color: 'rgba(30, 74, 122, 0.2)', drawBorder: false },
          ticks: { color: '#64748b', font: { size: 11 } }
        },
        y: {
          grid: { color: 'rgba(30, 74, 122, 0.2)', drawBorder: false },
          ticks: { 
            color: '#64748b', 
            font: { size: 11 },
            callback: (v) => '$' + (v / 1000) + 'K'
          },
          beginAtZero: true
        }
      },
      interaction: { intersect: false, mode: 'index' }
    }
  });
}

/** Traffic Doughnut Chart */
function initTrafficChart() {
  const ctx = document.getElementById('trafficChart');
  if (!ctx) return;

  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Direct', 'Social', 'Organic', 'Referral'],
      datasets: [{
        data: [35, 25, 28, 12],
        backgroundColor: [
          '#3b82f6',
          '#8b5cf6',
          '#14b8a6',
          '#f97c16'
        ],
        borderColor: '#15a358',
        borderWidth: 3,
        hoverOffset: 8
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: '70%',
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            color: '#94a3b8',
            padding: 18,
            usePointStyle: true,
            pointStyle: 'circle',
            font: { size: 11 }
          }
        },
        tooltip: {
          backgroundColor: 'rgba(15, 36, 61, 0.95)',
          titleColor: '#f1f5f9',
          bodyColor: '#94a3b8',
          borderColor: '#1e4a7a',
          borderWidth: 1,
          padding: 12,
          callbacks: {
            label: (ctx) => ctx.label + ': ' + ctx.parsed + '%'
          }
        }
      }
    }
  });
}

/** Activity Bar Chart */
function initActivityChart() {
  const ctx = document.getElementById('activityChart');
  if (!ctx) return;

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00'],
      datasets: [{
        label: 'Active Users',
        data: [120, 80, 340, 520, 480, 380],
        backgroundColor: 'rgba(6, 182, 212, 0.7)',
        borderColor: '#06b6d4',
        borderWidth: 1,
        borderRadius: 6,
        borderSkipped: false
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: 'rgba(15, 36, 61, 0.95)',
          titleColor: '#f1f5f9',
          bodyColor: '#94a3b8',
          borderColor: '#1e4a7a',
          borderWidth: 1,
          padding: 12
        }
      },
      scales: {
        x: {
          grid: { display: false },
          ticks: { color: '#64748b', font: { size: 11 } }
        },
        y: {
          grid: { color: 'rgba(30, 74, 122, 0.2)', drawBorder: false },
          ticks: { color: '#64748b', font: { size: 11 } },
          beginAtZero: true
        }
      }
    }
  });
}

/** Sidebar toggle for mobile */
function initSidebar() {
  const menuToggle = document.querySelector('.menu-toggle');
  const sidebar = document.querySelector('.sidebar');
  
  if (!menuToggle || !sidebar) return;

  menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('open');
  });

  // Close when clicking outside
  document.addEventListener('click', (e) => {
    if (window.innerWidth <= 768) {
      if (!sidebar.contains(e.target) && !menuToggle.contains(e.target)) {
        sidebar.classList.remove('open');
      }
    }
  });
}

/** Dropdown menus */
function initDropdowns() {
  const selects = document.querySelectorAll('.period-select');
  selects.forEach(select => {
    select.addEventListener('change', () => {
      // Visual feedback
      select.style.borderColor = '#3b82f6';
      setTimeout(() => {
        select.style.borderColor = '';
      }, 1000);
    });
  });
}

/** Card interactions */
function initCards() {
  const cards = document.querySelectorAll('.chart-card, .card');
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-2px)';
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}

/** Navbar effects */
function initNavbar() {
  const searchInput = document.querySelector('.search-box input');
  const searchBox = document.querySelector('.search-box');
  
  if (searchInput && searchBox) {
    searchInput.addEventListener('focus', () => {
      searchBox.style.borderColor = '#3b82f6';
      searchInput.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.15)';
    });
    
    searchInput.addEventListener('blur', () => {
      searchBox.style.borderColor = '';
      searchInput.style.boxShadow = '';
    });
  }

  // Search on Enter
  searchInput?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const query = searchInput.value.trim();
      if (query) {
        searchInput.value = 'Searching...';
        setTimeout(() => {
          searchInput.value = '';
          searchInput.placeholder = 'Search (demo)';
        }, 500);
      }
    }
  });
}