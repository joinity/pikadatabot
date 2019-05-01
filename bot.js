const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require("fs");
var pokemon = require('./pokedex');

client.on('ready', () => {
    console.log('I am ready!');
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
