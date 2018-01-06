'use strict';

const Renderer = require('./Renderer');






module.exports = class SetRenderer extends Renderer {

    getName() {
        return 'set';
    }


    

    render({
        context,
        value,
        theme,
        label,
        optios,
    }) {
        context.renderDecoration({label, decoration: `[Set] (${value.size}): [`});

        if (value.size) {
            context.in();
            let index = 0;

            for (const item of value.values()) {
                context.newLine();
                context.renderValue({
                    value: item,
                    decoration: `${index}`,
                    optios,
                });
                index++;
            }

            context.out();
            context.newLine();
        }

        context.renderDecoration({decoration: `]`});
    }
}