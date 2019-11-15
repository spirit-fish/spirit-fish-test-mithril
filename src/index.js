import m from "mithril";

import Giphy from './components/Giphy';
import NotFound from './components/NotFound';
const root = document.getElementById("app");

m.route(root, '/', {
  "/": {
    render: function () {
      return m(Giphy);
    }
  },
  "/gif": {
    render: function () {
      return m(Giphy);
    }
  },
  '/:any...': {
    view: NotFound,
  }
});