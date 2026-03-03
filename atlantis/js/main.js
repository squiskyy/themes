// Atlantis Admin Dashboard — Chart.js Integration

document.addEventListener('DOMContentLoaded', () => {
  initCharts();
  initSidebar();
});

/**
 * Initialize all charts with ocean-themed styling
 */
function initCharts() {
  initRevenueChart();
  initTrafficChart();
  initActivityChart();
}

/**
 * Revenue Line Chart
 */
function initRevenueChart() {
  const ctx = document.getElementById('revenueChart').getContext('2d');
  
  // Create gradient
  const gradient = ctx.createLinearGradient(0, 0, 0, 400);
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
        borderWidth: 2,
        fill: true,
        tension: 0.4,
        pointBackgroundColor: '#3b82f6',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 6
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          backgroundColor: '#0f243d',
          titleColor: '#f1f5f9',
          bodyColor: '#94a3b8',
          borderColor: '#1e4a7a',
          borderWidth: 1,
          padding: 12,
          displayColors: false,
          callbacks: {
            label: function(context) {
              return '$' + context.parsed.y.toLocaleString();
            }
          }
        }
      },
      scales: {
        x: {
          grid: {
            color: 'rgba(30, 74, 122, 0.3)',
            drawBorder: false
          },
          ticks: {
            color: '#94a3b8'
          }
        },
        y: {
          grid: {
            color: 'rgba(30, 74, 122, 0.3)',
            drawBorder: false
          },
          ticks: {
            color: '#94a3b8',
            callback: function(value) {
              return '$' + value.toLocaleString();
            }
          },
          beginAtZero: true
        }
      }
    }
  });
}

/**
 * Traffic Doughnut Chart
 */
function initTrafficChart() {
  const ctx = document.getElementById('trafficChart').getContext('2d');
  
  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Direct', 'Social', 'Organic', 'Referral'],
      datasets: [{
        data: [35, 25, 28, 12],
        backgroundColor: [
          '#3b82f6', // blue
          '#8b5cf6', // purple
          '#14b8a6', // teal
          '#f97316'  // coral
        ],
        borderColor: '#153558',
        borderWidth: 2,
        hoverOffset: 4
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
            padding: 20,
            usePointStyle: true,
            pointStyle: 'circle'
          }
        },
        tooltip: {
          backgroundColor: '#0f243d',
          titleColor: '#f1f5f9',
          bodyColor: '#94a3b8',
          borderColor: '#1e4a7a',
          borderWidth: 1,
          padding: 12,
          callbacks: {
            label: function(context) {
              return context.label + ': ' + context.parsed + '%';
            }
          }
        }
      }
    }
  });
}

/**
 * Activity Bar Chart
 */
function initActivityChart() {
  const ctx = document.getElementById('activityChart').getContext('2d');
  
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00'],
      datasets: [{
        label: 'Active Users',
        data: [120, 80, 340, 520, 480, 380],
        backgroundColor: 'rgba(6, 182, 212, 0.6)',
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
        legend: {
          display: false
        },
        tooltip: {
          backgroundColor: '#0f243d',
          titleColor: '#f1f5f9',
          bodyColor: '#94a3b8',
          borderColor: '#1e4a7a',
          borderWidth: 1,
          padding: 12
        }
      },
      scales: {
        x: {
          grid: {
            color: 'rgba(30, 74, 122, 0.3)',
            drawBorder: false
          },
          ticks: {
            color: '#94a3b8'
          }
        },
        y: {
          grid: {
            color: 'rgba(30, 74, 122, 0.3)',
            drawBorder: false
          },
          ticks: {
            color: '#94a3b8'
          },
          beginAtZero: true
        }
      }
    }
  });
}

/**
 * Sidebar toggle for mobile
 */
function initSidebar() {
  const menuToggle = document.querySelector('.menu-toggle');
  const sidebar = document.querySelector('.sidebar');
  
  if (menuToggle && sidebar) {
    menuToggle.addEventListener('click', () => {
      sidebar.classList.toggle('open');
    });
    
    // Close sidebar when clicking outside on mobile
    document.addEventListener('click', (e) => {
      if (window.innerWidth <= 768) {
        if (!sidebar.contains(e.target) && !menuToggle.contains(e.target)) {
          sidebar.classList.remove('open');
        }
      }
    });
  }
}
