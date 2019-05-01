const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
var pokemon = require('./pokedex');

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
	if (!message.content.startsWith("!") || message.author.bot) return;
	
	var pkmn = message.content.toString().toLowerCase();
	pkmn = pkmn.substring(1);
	message.reply("hi");
	/*for(var i=0;i<pokemon.length;i++){
			if(pkmn == pokemon[i].Name.toLowerCase()){
				var text = pokemon[i].Name;
				message.reply(text);
			}
		
	}*/
});
