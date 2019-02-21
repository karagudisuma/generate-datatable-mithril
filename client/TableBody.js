const m = require("mithril");
const dataConstant = require("./dataConstant.js");

const TableBody = {
  view: function(vnode) {
    let indexRowInTable = vnode.attrs.indexRowInTable;
    let totalRowsInArr = vnode.attrs.totalRowsInArr;
    let numRowsInTable = vnode.attrs.numRowsInTable;
    let data = dataConstant.reportData.data;
    let reportData = data.slice(indexRowInTable - 1, numRowsInTable);
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
