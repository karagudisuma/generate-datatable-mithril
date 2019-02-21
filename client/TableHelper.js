const dataConstant = require("./dataConstant.js");

const MAX_ALLOWED_DATA = 1000000;
const MAX_ALLOWED_ROWS_PER_PAGE = 1000;
const START_OF_ROW = 1;

function totalRowsInputHandler(event) {
    let inputValue = 100;
    //On enter press
    let numOfRows = event.target.value;
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
    let numOfRows = event.target.value;
    let reportDataLength = dataConstant.reportData.data.length;
    let validRange = isAllowedLen(numOfRows, MAX_ALLOWED_ROWS_PER_PAGE);
    let validLen = withinArrayLen(numOfRows, reportDataLength);
    if(!validLen || !validRange){
        numOfRows = 10;
    }
    return numOfRows;
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

exports.tableHelper = { 
    totalRowsInputHandler, 
    dataGenerate, 
    numRowsHandler 
};