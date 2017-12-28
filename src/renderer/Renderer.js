'use strict';

const chalk = require('chalk');




module.exports = class Renderer {




    getName() {
        return 'renderer';
    }





    /**
    * truncate string to a certain length
    */
    truncate(input, len = 50) {
        if (input.length > len) {
            const truncateString = `\u2026`;

            return input.substr(input.length-len+truncateString.length)+truncateString;
        } else return input;
    }







    decorate(context, input, topic, color) {
        const theme = context.getThemeFor(this.getName(), topic);

        if (theme.reset) input = chalk.reset(input);
        if (theme.color) input = chalk[color || theme.color](input);
        if (theme.bg) input = chalk[`bg${theme.bg[0].toUpperCase()}${theme.bg.substr(1)}`](input);
        if (theme.bold) input = chalk.bold(input);
        if (theme.italic) input = chalk.italic(input);
        if (theme.inverse) input = chalk.underline(input);
        if (theme.inverse) input = chalk.inverse(input);
        if (theme.strikethrough) input = chalk.strikethrough(input);
        if (theme.dim) input = chalk.dim(input);
        if (theme.hidden) input = chalk.hidden(input);
        if (theme.visible) input = chalk.visible(input);

        return input;
    }
}