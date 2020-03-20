'use strict';

class Validator {

  constructor(schema) {
    this.schema = schema;
  }

  isValid(data) {
    let valid = true;

    if (typeof data !== 'object') {
      valid = false;
    }

    // looping through key/values in schema object
    for (let fieldName in this.schema) {
      let field = this.schema[fieldName];

      // is this field required? If so, does it exist?
      let required = field.required
      ? this.isTruthy(data[fieldName])
      : true;

      let type = field.type
      ? this.isString(data[fieldName])
      : true;

      if (!(required && type)) {
        valid = false;
      }
    }

    return valid;
  }

  isTruthy(input) {
    return !!input;
  }

  isString(input) {
    return typeof input === 'string';
  }

}

module.exports = Validator;