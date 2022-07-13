
const capLetter = (str) => {
    if(!str || str.length < 1 ) return;
    const strCheck = str.charAt(0).toUpperCase() + str.slice(1);
    return strCheck
}
module.exports = capLetter