const roleText = document.getElementById('typed-role');
const roles = [
  'Full-Stack Products',
  'Clean User Interfaces',
  'Practical Backend Systems',
  'Meaningful Product Ideas'
];

let roleIndex = 0;

if (roleText) {
  setInterval(() => {
    roleIndex = (roleIndex + 1) % roles.length;
    roleText.textContent = roles[roleIndex];
  }, 2200);
}

const revealItems = document.querySelectorAll('.reveal');

if (revealItems.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealItems.forEach((item) => observer.observe(item));
}
