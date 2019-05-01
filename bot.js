const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
var pokemon = require('./pokedex');

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', msg => {
	if (!msg.content.startsWith("!") || msg.author.bot) return;
	console.log(msg);
	var pkmn = msg.content.slice(1).split(/ +/);
	console.log(pkmn);
	pkmn = pkmn.toString().toLowerCase();
	console.log(pkmn);
	for(var i=0;i<pokemon.length;i++){
			if(pkmn == pokemon[i].Name.toLowerCase()){
				console.log('I am here');
				var text = pokemon[i].Name;
				msg.reply(text);
			}
		
	}
	
});
	
client.login(process.env.BOT_TOKEN);
