// ---------------------------------------------------------
// kobir079 portfolio — shared behaviour
// 1) Scroll-spy: highlights the active module in course TOC
// 2) Gentle fade-in for cards/modules as they enter view
// ---------------------------------------------------------

document.addEventListener('DOMContentLoaded', () => {
  // Scroll-spy for course table of contents
  const tocLinks = document.querySelectorAll('.course-toc a');
  const modules = document.querySelectorAll('.module, [data-toc-target]');

  if (tocLinks.length && modules.length) {
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            tocLinks.forEach((a) => a.classList.remove('active'));
            const match = document.querySelector(`.course-toc a[href="#${id}"]`);
            if (match) match.classList.add('active');
          }
        });
      },
      { rootMargin: '-20% 0px -65% 0px', threshold: 0 }
    );
    modules.forEach((m) => spy.observe(m));
  }

  // Subtle reveal-on-scroll
  const revealables = document.querySelectorAll('.uml-box, .module');
  const reveal = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08 }
  );
  revealables.forEach((el) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(14px)';
    el.style.transition = 'opacity .5s ease, transform .5s ease';
    reveal.observe(el);
  });
});
