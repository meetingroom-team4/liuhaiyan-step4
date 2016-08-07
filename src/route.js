let gotoMainPage = require('./commands/goto-main-page');
const defaultMapping = {'*': gotoMainPage};
let mapping = defaultMapping;
function route(input) {
    let command = mapping[input] || mapping['*'];
    let result = command(input);
    if (result.error) {
        return {
            text: result.error
        }
    }

    if (result.reset) {
        mapping = defaultMapping;
        return {
            text: result.text,
            return :true
        }
    }
    if (result.newMapping) {
        mapping = result.newMapping;
        return {
            text: result.text
        }
    }

    return {
        text: result.text
    }
}
module.exports = route;
