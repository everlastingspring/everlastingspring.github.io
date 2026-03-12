// Shared reveal animations
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.08 });
document.querySelectorAll('.fade-up, .fade-right').forEach(el => observer.observe(el));

// Set active nav link based on current page
(function(){
  const path = window.location.pathname.replace(/\/$/, '');
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href').replace(/\/$/, '');
    // exact match or starts-with for sub-pages
    if (path === href || (href !== '/' && href !== '/index.html' && path.startsWith(href))) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
})();
