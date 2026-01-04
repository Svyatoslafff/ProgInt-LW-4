const burger = document.querySelector('.burger');
const navList = document.querySelector('.nav-list');

if (burger && navList) {
  burger.addEventListener('click', () => {
    const isOpen = navList.classList.toggle('is-open');
    burger.setAttribute('aria-expanded', String(isOpen));
  });

  navList.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navList.classList.remove('is-open');
      burger.setAttribute('aria-expanded', 'false');
    });
  });
}

const tabsRoot = document.querySelector('[data-tabs]');
if (tabsRoot) {
  const buttons = tabsRoot.querySelectorAll('[data-tab]');
  const panels = tabsRoot.querySelectorAll('[data-panel]');

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const target = button.dataset.tab;

      buttons.forEach((btn) => {
        btn.classList.toggle('is-active', btn === button);
        btn.setAttribute('aria-selected', String(btn === button));
      });

      panels.forEach((panel) => {
        panel.classList.toggle('is-active', panel.dataset.panel === target);
      });
    });
  });
}
