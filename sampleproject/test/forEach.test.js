const assert = require('assert');
const { forEach } = require('../index');

it('should sum an array', () => {
    const number = [1,2,3];

    let total = 0;
    forEach(number, (value) => {
        total += value;
    });

    assert.strictEqual(total, 6);
}); 