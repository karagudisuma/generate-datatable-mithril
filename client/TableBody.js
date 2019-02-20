const m = require("mithril");
const dataConstant = require("./dataConstant.js");

let TableBody = {
  current: {
    data: dataConstant.reportData.data
  },
  view: function(vnode) {
    let reportData = vnode.state.current.data;
    let i, tBody = "";
    return reportData.map(data =>
      m("tr", { "data-row-index": i }, [
        m("td", { class: " pr3 bb b--black-20 pl2" }, data[0]),
        m("td", { class: " pr3 bl bb b--black-20 pl2" }, data[1]),
        m("td", { class: " pr3 bl bb b--black-20 pl2" }, data[2]),
        m("td", { class: " pr3 bl bb b--black-20 pl2" }, data[3]),
        m("td", { class: " pr3 bl bb b--black-20 pl2" }, data[4])
      ])
    );
    return tBody;
  }
};

module.exports = TableBody;
