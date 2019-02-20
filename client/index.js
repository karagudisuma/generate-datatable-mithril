const m = require('mithril');
const TableBody = require('./TableBody');
const TableHeader = require('./TableHeader');

m.mount(document.getElementById("table-body"), {view : TableBody});
m.mount(document.getElementById("table-header"), {view : TableHeader});


