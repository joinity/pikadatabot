const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
var pokemon = require('./pokedex');

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', msg => {
	
	if (msg.content.startsWith("!")){
msg.author.send("Sorry I was replaced by my Master.. If you want to know things about a specific Pokemon in the game check out https://www.pkmnlegends.com/pokedex.php");

	}
	
	
});
	
client.login(process.env.BOT_TOKEN);
