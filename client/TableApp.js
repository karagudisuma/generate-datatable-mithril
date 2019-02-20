const m = require('mithril');
const dataConstant = require('./dataConstant.js');
const TableBody = require('./TableBody');
const TableHeader = require('./TableHeader');

let TableApp = {
    view: function () {
        return m("div", { "class": "pa4" },
            m("div", { "class": "overflow-auto" },
                m("table", { "class": "f6 w-100 mw8 center b--black-20 ba", "cellspacing": "0" },
                    [
                        m("thead", { "id": "table-header" }, m(TableHeader)),
                        m("tbody", { "class": "lh-copy", "id": "table-body" }, m(TableBody))
                    ]
                )
            )
        )
    }
}

module.exports = TableApp;