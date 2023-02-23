module.exports = function check(str, bracketsConfig) {
    let curlyOpen = [];
    let curlyClosed = [];
    let squareOpen = [];
    let squareClosed = [];
    let thirdOpen = [];
    let thirdClosed= [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '('){
            curlyOpen.push(str[i]);
        } else if(str[i] === ')') {
            curlyClosed.push(str[i]);
        } else if (str[i] === '[') {
            squareOpen.push(str[i]);
        } else if (str[i] === ']') {
            squareClosed.push(str[i]);
        } else if (str[i] === '{') {
            thirdOpen.push(str[i]);
        } else if (str[i] === '}') {
            thirdClosed.push(str[i]);
        }
    }
    if (curlyOpen.length > 0 && curlyOpen.length === curlyClosed.length) {
        return true;
    } else if (squareOpen.length > 0 && curlyOpen.length === squareClosed.length) {
        return true;
    } else if (thirdOpen.length > 0 && curlyOpen.length === thirdClosed.length) {
        return true;
    } else {
        return false;
    }
}
