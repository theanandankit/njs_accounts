module.exports = function (nameparam){
    const anotherExternalFunc = require('../another/sampletwo');
    anotherExternalFunc(nameparam);
    console.log( "external func" + nameparam);
}
