'use strict';





module.exports = class StringRenderer {


    constructor() {
        this.color = 'green';
    }



    getName() {
        return 'string';
    }


    

    render(context, input) {
        context.print(input);
    }
}