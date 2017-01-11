var parseJson = require('parse-json');

module.exports = function (jsonString) {
  try {
    return parseJson(jsonString);
  } catch (e) {
    try {
      return (new Function('return '+jsonString))();
    } catch (ex) {
      console.error('[err] parseJson:\n'+ex.message+'\n'+e.message);
      return null;
    }
  }
};