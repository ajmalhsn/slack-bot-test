const envKey = process.env.JOKES_BOT_TOKEN
var SlackBot = require('slackbots');

// create a bot
var bot = new SlackBot({
    token: 'xoxb-583557669895-582538485283-xPvPTp2xGNVsklrXdeWYGWHU', // Add a bot https://my.slack.com/services/new/bot and put the token 
    name: 'work_bot'
});

bot.on('start', function() {
    // more information about additional params https://api.slack.com/methods/chat.postMessage
    var params = {
        icon_emoji: ':cat:'
    };
    
    // define channel, where bot exist. You can adjust it there https://my.slack.com/services 
    bot.postMessageToChannel('everyone', 'meow!', params);
    
    // define existing username instead of 'user_name'
    bot.postMessageToUser('Ajmal Hussain', 'meow!', params); 
    
    // If you add a 'slackbot' property, 
    // you will post to another user's slackbot channel instead of a direct message
    bot.postMessageToUser('user_name', 'meow!', { 'slackbot': true, icon_emoji: ':cat:' }); 
    
    // define private group instead of 'private_group', where bot exist
    //bot.postMessageToGroup('random', 'meow!', params); 
});