import Schema from "async-validator"

const descriptor = {
    address: {
      type: 'object',
      required: true,
      fields: {
        street: { type: 'string', required: true },
        city: { type: 'string', required: true },
        zip: { type: 'string', required: true, len: 8, message: 'invalid zip' },
      },
    },
    name: { type: 'string', required: true },
    age: {
        type: 'number',
        asyncValidator: (rule, value) => {
          return new Promise((resolve, reject) => {
            if (value < 18) {
              reject('too young');  // reject with error message
            } else {
              resolve();
            }
          });
        },
      },
  };

  const validator = new Schema(descriptor);
  validator.validate({ address: {} }, (errors, fields) => {
    // errors for address.street, address.city, address.zip
    console.log(errors, fields)
  });