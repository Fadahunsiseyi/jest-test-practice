
const stringLength = (str) => {
    if(str.length < 1 || str.length > 10)  throw new Error('Invalid string length');
    return str.length
}
module.exports = stringLength