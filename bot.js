const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
var pokemon = require('./pokedex');

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', msg => {
	if (!msg.content.startsWith("!") || msg.author.bot) return;
	var pkmn = msg.content.slice(1).split(/ +/);
	pkmn = pkmn.toString().toLowerCase();
	console.log(pkmn);
	for(var i=0;i<pokemon.length;i++){
			console.log(pokemon[i].Name.toLowerCase());
			if(pkmn == pokemon[i].Name.toLowerCase()){
				console.log('I am here');
				var text = pokemon[i].Name;
				msg.reply(text);
			}
		
	}
	
});
	
client.login(process.env.BOT_TOKEN);
