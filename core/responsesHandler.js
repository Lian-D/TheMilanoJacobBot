module.exports = {
    response: function (bot, message) {
        //Responses
        var stringResponse = require('./commands/stringResponse.js');
        if ((stringResponse.keywords.includes(message.content.toLowerCase()) || cycleThroughKeywords(message.content, stringResponse.keywords))) {
            stringResponse.response(message);
        }
    }
};

//Function for enabling the case inwhich the message contains a specific string
function cycleThroughKeywords(message, arr) {
    for (var i = 0; i < arr.length; i++) {
        if (message.toLowerCase().includes(arr[i])) {
            return true;
        }
    }
    return false;
}

