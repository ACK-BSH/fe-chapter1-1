import { Storage } from './storage.js';
import { LayoutControl } from './control/LayoutControl.js';

const Router = (function () {
  const routes = {};

  function addRoute(path, handler) {
    routes[path] = handler;
  }

  function navigate(path) {
    if (location.pathname !== path) {
      history.pushState({}, '', path);
    }
    handleRoute();
  }

  function init() {
    window.addEventListener('popstate', () => handleRoute());
    handleRoute();
  }

  function handleRoute() {
    const path = window.location.pathname;
    const userStat = Storage.get();

    const ControlClass = routes[path] || routes['/'];

    if (!ControlClass) return;

    if (path === '/login') {
      new ControlClass('root', userStat).render();
      return;
    }

    if (!document.getElementById('main-container')) {
      new LayoutControl('root', userStat).render();
    }

    new ControlClass('main-container', userStat).render();
  }

  return {
    addRoute,
    navigate,
    init
  };
})();

export { Router };
