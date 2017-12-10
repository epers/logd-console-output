'use strict';


const assert = require('assert');


module.exports = class OutputValidator {



    constructor(logger) {
        this.logger = logger;
    }



    async validate(input, lines) {
        const context = await this.logger.log({
            values: input
        });
        
        let offset = 0; 

        await new Promise((resolve, reject) => {
            context.setPrinter((message) => {
                try {
                    assert.equal(message, lines[offset]);
                    offset++;
                } catch(e) {
                    return reject(e);
                };
                
                if (offset === lines.length) resolve();
            });
        });
    }
}