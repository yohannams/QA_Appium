const { browser } = require("webdriverio");

function waitUntilElementExist(element, timeout = 10000) {
  element.waitForExist(timeout);
}

module.exports = {
  waitUntilElementExist,
};
