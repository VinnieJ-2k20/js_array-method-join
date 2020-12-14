'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';

    if (this.length === 0) {
      return result;
    }

    let trueSeparator;

    if (separator === null) {
      trueSeparator = 'null';
    } else {
      trueSeparator = separator;
    }

    for (let i = 0; i < this.length; i++) {
      let trueItem;

      if (this[i] === null || this[i] === undefined) {
        trueItem = '';
      } else {
        trueItem = this[i];
      }

      result += trueItem;

      if (i !== this.length - 1) {
        result += trueSeparator;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
