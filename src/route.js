const Router = (function () {
  const routes = {};

  function addRoute(path, handler) {
    routes[path] = handler;
  }

  function navigate(path) {
    const handler = routes[path] || routes['404'];
    handler();
  }

  function init() {
    window.addEventListener('hashchange', () => {
      const path = window.location.hash.slice(1) || '/';
      navigate(path);
    });

    // 초기 라우트 처리
    navigate(window.location.hash.slice(1) || '/');
  }

  return {
    addRoute,
    navigate,
    init
  };
})();

export { Router };
