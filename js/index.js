document.documentElement.classList.add('js-enabled');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.scroll-reveal').forEach((el) => {
  revealObserver.observe(el);
});

const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');
if(toggle && links) {
  toggle.addEventListener('click', () => links.classList.toggle('open'));
  links.querySelectorAll('a').forEach((a) => 
  a.addEventListener('click', () => links.classList.remove('open')));
}

const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('#featured_projects .project-card');

filterBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    filterBtns.forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    projectCards.forEach((card) => {
      const match = filter === 'all' || card.dataset.category === filter;
      card.classList.toggle('hidden', !match);
    });
  });
});

