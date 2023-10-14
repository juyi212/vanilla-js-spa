import Router from "./router";
import { navigate } from "./utils/navigate";
import { $ } from "./utils/querySelector";

function App($container) {
  this.$container = $container;

  const init = () => {
    $(".navbar").addEventListener("click", (e) => {
      const target = e.target.closest("a");
      if (!target instanceof HTMLAnchorElement) return null;

      e.preventDefault();
      const targetUrl = e.target.href.replace("http://localhost:5173", "");
      navigate(targetUrl);
    });
    new Router($container);
  };
  init();
}

export default App;
