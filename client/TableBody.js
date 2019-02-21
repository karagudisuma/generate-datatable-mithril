const m = require("mithril");
const dataConstant = require("./dataConstant.js");

function getDisplayData(attrs){
  let indexRowInTable = parseInt(attrs.indexRowInTable);
  let totalRowsInArr = parseInt(attrs.totalRowsInArr);
  
  let data = dataConstant.reportData.data;
  let reportData = [];
  switch(attrs.btnEvent){
      case 'none':
          let endOfSelection = indexRowInTable - 1 + parseInt(attrs.numRowsInTable);
          reportData = data.slice(indexRowInTable - 1, endOfSelection);
          break;

  }
  return reportData;
  
}

const TableBody = {
  view: function(vnode) {
    let reportData = getDisplayData(vnode.attrs);
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
