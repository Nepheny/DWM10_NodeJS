const fs = require('fs');

module.exports = {
    "read": function(fileName) {
        try {
            return JSON.parse(fs.readFileSync('data/' + fileName + '.json').toString());
        } catch (err) {

        }
    }
}
