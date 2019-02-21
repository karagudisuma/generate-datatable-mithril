const m = require('mithril');
const TableBody = require('./TableBody');
const TableHeader = require('./TableHeader');
const Helpers = require('./TableHelper.js');

function highlightActiveRow(vnode) {
    let activeRow = document.querySelector(".bg-light-blue");
    if (activeRow) {
        activeRow.classList.remove("bg-light-blue");
    }

    let query = `tr[data-row-index="${vnode.state.current.activeRowId}"]`;
    activeRow = (document.querySelector(query));
    if (activeRow) {
        activeRow.classList.add("bg-light-blue");
    }
}

const TableApp = {
    current: {
        numRowsInTable: 10,
        totalRowsInArr: 100,
        indexRowInTable: 1,
        activeRowId: 1
    },
    oncreate: function (vnode) {
        highlightActiveRow(vnode);
    },
    onupdate: function (vnode) {
        highlightActiveRow(vnode);
    },
    view: function (vnode) {
        let { indexRowInTable, totalRowsInArr, numRowsInTable, activeRowId } = vnode.state.current;

        return m("div", { "class": "pt1 pb1 mv3 mh6-l bg-light-gray" },
            m("div",
                m("div", { "class": "flex items-center justify-center mt4" },
                    [
                        m("div", { "class": "ba br--left br4 mr3 bg-blue", "id": "prev-btns" },
                            [
                                m("a", {
                                    "class": "f5 no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa1 border-box br--left br4", "href": "#0", "id": "firstPage",
                                    onclick: e => {
                                        vnode.state.current.indexRowInTable = Helpers.tableHelper.firstPageHandler(e);
                                        vnode.state.current.activeRowId = vnode.state.current.indexRowInTable;
                                    }
                                },
                                    m("svg", { "class": "w1", "data-icon": "chevronLeft", "viewBox": "0 0 32 32", "style": { "fill": "currentcolor" } },
                                        [
                                            m("title",
                                                "LastPage Left"
                                            ),
                                            m("line", { "x1": "0", "y1": "0", "x2": "0", "y2": "40", "style": { "stroke": "currentcolor", "stroke-width": "6" } }),
                                            m("path", { "d": "M20 1 L24 5 L14 16 L24 27 L20 31 L6 16 z" })
                                        ]
                                    )
                                ),
                                m("a", {
                                    "class": "f5 no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa1 ph2 border-box", "href": "#0", "id": "prevPage",
                                    onclick: e => {

                                        vnode.state.current.indexRowInTable = Helpers.tableHelper.prevPageHandler(numRowsInTable, totalRowsInArr, indexRowInTable);
                                        vnode.state.current.activeRowId = vnode.state.current.indexRowInTable;
                                    }
                                },
                                    [
                                        m("svg", { "class": "w1", "data-icon": "chevronLeft", "viewBox": "0 0 32 32", "style": { "fill": "currentcolor" } },
                                            [
                                                m("title",
                                                    "NextPage Left"
                                                ),
                                                m("path", { "d": "M20 1 L24 5 L14 16 L24 27 L20 31 L6 16 z" })
                                            ]
                                        ),
                                        m("svg", { "class": "w1", "data-icon": "chevronLeft", "viewBox": "0 0 32 32", "style": { "fill": "currentcolor" } },
                                            [
                                                m("title",
                                                    "NextPage Left"
                                                ),
                                                m("path", { "d": "M20 1 L24 5 L14 16 L24 27 L20 31 L6 16 z" })
                                            ]
                                        )
                                    ]
                                ),
                                m("a", { "class": "f5 no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa1 border-box", "href": "#0", "id": "prevLine" },
                                    m("svg", { "class": "w1", "data-icon": "chevronLeft", "viewBox": "0 0 32 32", "style": { "fill": "currentcolor" } },
                                        [
                                            m("title",
                                                "NextRow Left"
                                            ),
                                            m("path", { "d": "M20 1 L24 5 L14 16 L24 27 L20 31 L6 16 z" })
                                        ]
                                    )
                                )
                            ]
                        ),
                        m("span", { "class": "mr1 ml2" },
                            "Showing"
                        ),
                        m("input", {
                            "class": "mw3", "type": "number", "value": numRowsInTable, "name": "numRows", "id": "numRowsInTable",
                            onkeyup: e => {
                                vnode.state.current.numRowsInTable = Helpers.tableHelper.numRowsHandler(e);
                                vnode.state.current.activeRowId = vnode.state.current.indexRowInTable;
                            }
                        }),
                        m("span", { "class": "ph2 mr1 ml1" },
                            "rows out of"
                        ),
                        m("input", {
                            "class": "mw4", "type": "number", "value": totalRowsInArr, "name": "totalRows", "id": "totalRowsInArr",
                            onkeyup: e => {
                                vnode.state.current.totalRowsInArr = Helpers.tableHelper.totalRowsInputHandler(e);
                                vnode.state.current.activeRowId = vnode.state.current.indexRowInTable;
                            },
                            onfocusout: e => Helpers.tableHelper.dataGenerate(e)
                        }),
                        m("span", { "class": "ph2 mr1 ml1" },
                            "starting at row"
                        ),
                        m("input", { "class": "mw3 mr2", "type": "number", "value": indexRowInTable, "name": "startRows", "id": "indexRowInTable", 
                        onkeyup: e => {
                            vnode.state.current.indexRowInTable = Helpers.tableHelper.indexRowHandler(e);
                            vnode.state.current.activeRowId = vnode.state.current.indexRowInTable;
                        }}),
                        m("div", { "class": "ba br--right br4 ml3 bg-blue", "id": "next-btns" },
                            [
                                m("a", {
                                    "class": "f5 no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa1 border-box", "href": "#0", "id": "nextLine",
                                    onclick: e => {
                                        let { activeRowId, indexRowInTable, numRowsInTable } = vnode.state.current;
                                        activeRowId = parseInt(activeRowId) + 1;
                                        indexRowInTable = parseInt(indexRowInTable);
                                        numRowsInTable = parseInt(numRowsInTable);
                                        if (activeRowId > (indexRowInTable + numRowsInTable - 1)) {
                                            indexRowInTable = indexRowInTable + numRowsInTable;
                                            activeRowId = indexRowInTable;
                                        }
                                        vnode.state.current.activeRowId = activeRowId;
                                        vnode.state.current.indexRowInTable = indexRowInTable;
                                    }
                                },
                                    m("svg", { "class": "w1", "data-icon": "chevronRight", "viewBox": "0 0 32 32", "style": { "fill": "currentcolor" } },
                                        [
                                            m("title",
                                                "NextRow Right"
                                            ),
                                            m("path", { "d": "M12 1 L26 16 L12 31 L8 27 L18 16 L8 5 z" })
                                        ]
                                    )
                                ),
                                m("a", {
                                    "class": "f5 no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa1 ph2 border-box", "href": "#0", "id": "nextPage",
                                    onclick: e => {
                                        vnode.state.current.indexRowInTable = Helpers.tableHelper.nextPageHandler(numRowsInTable, totalRowsInArr, indexRowInTable);
                                        vnode.state.current.activeRowId = vnode.state.current.indexRowInTable;
                                    }
                                }
                                    ,
                                    [
                                        m("svg", { "class": "w1", "data-icon": "chevronRight", "viewBox": "0 0 32 32", "style": { "fill": "currentcolor" } },
                                            [
                                                m("title",
                                                    "NextPage Right"
                                                ),
                                                m("path", { "d": "M12 1 L26 16 L12 31 L8 27 L18 16 L8 5 z" })
                                            ]
                                        ),
                                        m("svg", { "class": "w1", "data-icon": "chevronRight", "viewBox": "0 0 32 32", "style": { "fill": "currentcolor" } },
                                            [
                                                m("title",
                                                    "NextPage Right"
                                                ),
                                                m("path", { "d": "M12 1 L26 16 L12 31 L8 27 L18 16 L8 5 z" })
                                            ]
                                        )
                                    ]
                                ),
                                m("a", {
                                    "class": "f5 no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa1 border-box br--right br4", "href": "#0", "id": "lastPage",
                                    onclick: e => {
                                        vnode.state.current.indexRowInTable = Helpers.tableHelper.lastPageHandler(numRowsInTable, totalRowsInArr);
                                        vnode.state.current.activeRowId = vnode.state.current.indexRowInTable;
                                    }
                                },
                                    m("svg", { "class": "w1", "data-icon": "chevronRight", "viewBox": "0 0 32 32", "style": { "fill": "currentcolor" } },
                                        [
                                            m("title",
                                                "LastPage Right"
                                            ),
                                            m("path", { "d": "M12 1 L26 16 L12 31 L8 27 L18 16 L8 5 z" }),
                                            m("line", { "x1": "28", "y1": "0", "x2": "28", "y2": "40", "style": { "stroke": "currentcolor", "stroke-width": "4" } })
                                        ]
                                    )
                                )
                            ]
                        )
                    ]
                )
            ),
            m("div", { "class": "pa4" },
                m("div", { "class": "overflow-auto" },
                    m("table", { "class": "f6 w-100 mw8 center b--black-20 ba", "cellspacing": "0" },
                        [
                            m("thead", { "id": "table-header" }, m(TableHeader)),
                            m("tbody", { "class": "lh-copy", "id": "table-body" }, m(TableBody, { numRowsInTable, indexRowInTable, totalRowsInArr }))
                        ]
                    )
                )
            )
        )
    }
}

module.exports = TableApp;