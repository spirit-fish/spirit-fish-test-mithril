import m from "mithril";

import HelloWorld from './components/HelloWorld';
import NotFound from './components/NotFound';
const root = document.getElementById("app");
// m.render(root, NotFound);

m.route(root, "/not-found", {
  "/": {
    render: function () {
      return m(HelloWorld);
    }
  },
  "/not-found": {
    view: NotFound,
  }
});