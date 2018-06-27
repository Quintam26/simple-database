const Store = require('../lib/store');
const assert = require('assert');
const path = require('path');
const { rimraf, mkdirp } = require('../lib/fs');


describe('store', () => {

    const dir = path.join(__dirname, 'animals');
    let store = new Store(dir);

    beforeEach(() => {
        return rimraf(dir);
    });

    beforeEach(() => {
        return mkdirp(dir);
    });

    it('save', () => {

        return store.save({ name: 'garfield' })
            .then(animal => {
                store.get(animal._id);
            })
            .then(animal =>{
                assert.ok('got animal', animal._id)
            })
    });
});
