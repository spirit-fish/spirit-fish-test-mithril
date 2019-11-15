import m from "mithril";

const HelloWorld = {
  view: function () {
    return m(".hello-world", [
      m('p', 'Hello World')
    ]);
  }
}

export default HelloWorld;