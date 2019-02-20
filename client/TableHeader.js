const m = require('mithril');
const dataConstant = require('./dataConstant.js');

function render() {
    cols = dataConstant.reportData.cols;
    return m("tr",
    [
      m("th", {"class":"fw6 bb b--black-20 tl pb1 pr3"}),
      m("th", {"class":"fw6 bb bl b--black-20 tl tc pb1 pr3"}, 
        cols[1]
      ),
      m("th", {"class":"fw6 bb bl b--black-20 tl tc pb1 pr3"}, 
        cols[2]
      ),
      m("th", {"class":"fw6 bb bl b--black-20 tl tc pb1 pr3"}, 
        cols[3]
      ),
      m("th", {"class":"fw6 bb bl b--black-20 tl tc pb1 pr3"}, 
        cols[4]
      )
    ]
  );
}

module.exports = render;
