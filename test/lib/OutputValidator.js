'use strict';


const assert = require('assert');


module.exports = class OutputValidator {



    constructor(logger) {
        this.logger = logger;
    }



    validate(input, lines, callsite) {
        const context = this.logger.createContext();

        // register a custom printer which validates
        // the output of the logger
        const promise = new Promise((resolve, reject) => {
            let offset = 0;

            context.setPrinter((message) => {// console.log(message);
                try {
                    assert.equal(message, lines[offset]);
                    offset++;
                } catch(e) {
                    return reject(e);
                };
                
                if (offset === lines.length) resolve();
            });
        });

        
        // send the values to the logger
        this.logger.log({
            values: input,
            context: context,
            callsite: callsite
        });

        // let the user evaluate the promise
        return promise;
    }
}