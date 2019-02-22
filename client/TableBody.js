const m = require("mithril");
const dataConstant = require("./dataConstant.js");


const TableBody = {
    view: function (vnode) {
        let {indexRowInTable, totalRowsInArr, numRowsInTable} = vnode.attrs;
        let data = dataConstant.reportData.data;
        let reportData = [];
        let endOfSelection = indexRowInTable - 1 + numRowsInTable;
        //When end of array is reached
        if(endOfSelection > data.length){
            reportData = data.slice(indexRowInTable - 1);
        }
        else{
            reportData = data.slice(indexRowInTable - 1, endOfSelection);
        }
        console.log(indexRowInTable, endOfSelection);
        let tBody =  reportData.map(data =>
            m("tr", { 'data-row-index': `${data[0]}` }, [
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
