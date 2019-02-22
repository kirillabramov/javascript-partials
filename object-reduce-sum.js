const _object = {
    first: {
      value: 1
    },
    first: {
      value: 2
    },
    first: {
      value: 3
    },
};

const initialValue = 0;

let summator = Object.keys(_object).reduce((prev, key) => prev + _object[key].value), initialValue);
