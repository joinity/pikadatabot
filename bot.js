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
			
			if(pkmn == pokemon[i].Name.toLowerCase()){
				var text = "__You selected__\n";
				text += "**N° "+pokemon[i].Name+"** \n";
				text += "Type: **"+pokemon[i].Type+"** \n";
	 			text += "Level: **"+pokemon[i].Level+"** \n";
				text += "Health: **"+pokemon[i].Health+"** \n";
				text += "Damage: **"+pokemon[i].Damage"**\n\n";
				msg.reply(text);
				msg.reply(text);
			}
		
	}
	
});
	
client.login(process.env.BOT_TOKEN);
