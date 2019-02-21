const dataConstant = require("./dataConstant.js");

const MAX_ALLOWED_DATA = 1000000;
const MAX_ALLOWED_ROWS_PER_PAGE = 1000;
const START_OF_ROW = 1;

function TableHelper(numRowsInTable, totalRowsInArr, indexRowInTable) {
    this.indexRowInTable = indexRowInTable;
    this.totalRowsInArr = totalRowsInArr;
    this.numRowsInTable = numRowsInTable;
    this.totalRowsHandler = (event) => {
        //On enter press
        if (event.keyCode === 13) {
            let numOfRows = event.target.value;
            let validRange = isAllowedLen(numOfRows, MAX_ALLOWED_DATA);
            if (validRange){
                dataConstant.generateData(numOfRows);
            }
            else{
                this.totalRowsInArr = 100;
            }
        }
    }
}

function showError(msg) {
    alert(msg);
}

function withinArrayLen(inputSize, maxSize) {
    if (parseInt(inputSize) > parseInt(maxSize)) {
        showError('Number is exceeding the input data size.');
        return false;
    }
    return true;
}

function isAllowedLen(inputSize, maxLen) {
    if (parseInt(inputSize) > parseInt(maxLen)) {
        showError('Number is exceeding the allowed limit.');
        return false;
    }
    return true;
}

exports.tableHelper = TableHelper;