'use strict';

const Renderer = require('./Renderer');






module.exports = class ObjectRenderer extends Renderer {

    getName() {
        return 'object';
    }


    

    render({
        context,
        value,
        theme,
        label,
        decoration,
    }) {
        const keys = Object.keys(value);
        context.renderDecoration({label, decoration: `${decoration ? decoration+' ' : ''}[Object] (${keys.length}): {`});

        if (keys.length) {
            context.in();
            keys.forEach((key, index) => {
                context.newLine();
                context.renderValue({
                    value: value[key],
                    label: key,
                });
            });
            context.out();
            context.newLine();
        }
        
        context.renderDecoration({decoration: `}`});
    }
}