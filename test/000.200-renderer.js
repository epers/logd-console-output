'use strict';

const section = require('section-tests');
const assert = require('assert');
const OutputValidator = require('./lib/OutputValidator');


section('Renderer', (section) => {
    section.test('String', async () => {
        const Console = require('../');
        const log = new Console();
        const validator = new OutputValidator(log);

        await validator.validate(['a friggin string'], ['a friggin string']);
    });
});