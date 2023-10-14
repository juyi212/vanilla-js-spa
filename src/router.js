import { routes } from "./constants/route";

function Router($container) {
  this.$container = $container;

  const findMatchedRoute = () =>
    routes.find((route) => route.path.test(location.pathname));

  const route = () => {
    const TargetPage = findMatchedRoute()?.element || undefined;
    new TargetPage(this.$container);
  };

  const init = () => {
    window.addEventListener("historychange", ({ detail }) => {
      const { to, isReplace } = detail;
      history.pushState(null, "", to);
      if (isReplace || to === location.pathname) {
        history.replaceState(null, "", to);
      } else {
        history.pushState(null, "", to);
      }
      route();
    });

    window.addEventListener("popstate", () => {
      route();
    });
  };

  init();
  route();
}

export default Router;
