const dataConstant = require("./dataConstant.js");

const MAX_ALLOWED_DATA = 1000000;
const MAX_ALLOWED_ROWS_PER_PAGE = 1000;
const START_OF_ROW = 1;

function totalRowsInputHandler(event) {
    let inputValue = 100;
    //On enter press
    let numOfRows = parseInt(event.target.value);
    let validRange = isAllowedLen(numOfRows, MAX_ALLOWED_DATA);
    if (validRange){
        inputValue = numOfRows;
    }
    return inputValue;
}

function dataGenerate(event){
    let validRange = isAllowedLen(event.target.value, MAX_ALLOWED_DATA);
    if (validRange){
        dataConstant.generateData(event.target.value);
    }
}

function numRowsHandler(event){
    let numOfRows = parseInt(event.target.value);
    let reportDataLength = dataConstant.reportData.data.length;
    let validRange = isAllowedLen(numOfRows, MAX_ALLOWED_ROWS_PER_PAGE);
    let validLen = withinArrayLen(numOfRows, reportDataLength);
    if(!validLen || !validRange){
        numOfRows = 10;
    }
    return numOfRows;
}

function indexRowHandler(event){
    let numOfRows = parseInt(event.target.value);
    let reportDataLength = dataConstant.reportData.data.length;
    let validRange = isAllowedLen(numOfRows, MAX_ALLOWED_DATA);
    let validLen = withinArrayLen(numOfRows, reportDataLength);
    if(!validLen || !validRange){
        numOfRows = 1;
    }
    return numOfRows;
}

function firstPageHandler(event){
    return START_OF_ROW;
}

function lastPageHandler(numOfRowsValue, totalRowsValue){
    let rowsLeft = totalRowsValue % numOfRowsValue;
    let startIndex = (rowsLeft == 0) ? (totalRowsValue - numOfRowsValue + 1) : (totalRowsValue - rowsLeft + 1);
    return startIndex;
}

function nextPageHandler(numOfRowsValue, totalRowsValue, indexRowValue){
    let nextIndex = indexRowValue + numOfRowsValue;
    return (nextIndex <= totalRowsValue) ? nextIndex : START_OF_ROW;
}

function prevPageHandler(numOfRowsValue, totalRowsValue, indexRowValue){
    let prevIndex = indexRowValue - numOfRowsValue;
    return (prevIndex < START_OF_ROW) ? (totalRowsValue - numOfRowsValue + 1) : prevIndex;
}

function showError(msg) {
    alert(msg);
}

function withinArrayLen(inputSize, maxSize) {
    if (inputSize > maxSize) {
        showError('Number is exceeding the input data size.');
        return false;
    }
    return true;
}

function isAllowedLen(inputSize, maxLen) {
    if (inputSize > maxLen) {
        showError('Number is exceeding the allowed limit.');
        return false;
    }
    return true;
}

exports.tableHelper = { 
    totalRowsInputHandler, 
    dataGenerate, 
    numRowsHandler,
    indexRowHandler,
    firstPageHandler,
    lastPageHandler,
    nextPageHandler,
    prevPageHandler
};