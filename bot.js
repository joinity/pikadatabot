const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require("fs");
var pokemon = require('./pokedex');

client.on('ready', () => {
    console.log('I am ready!');
});
client.on('message', message => {
	if (!message.content.startsWith("!") || message.author.bot) return;
	
	const name = message.content.slice(1).split(/ +/);
	var pkmn = name.content.toString().toLowerCase();
	for(var i=0;i<pokemon.length;i++){
			if(pkmn == pokemon[i].Name.toLowerCase()){
				var text = "__You selected__\n";
				text += "**N° "+pokemon[i].Name+"** \n";
				text += "Type: **"+pokemon[i].Type+"** \n";
	 			text += "Level: **"+pokemon[i].Level+"** \n";
				text += "Health: **"+pokemon[i].Health+"** \n";
				text += "Damage: **"+pokemon[i].Damage"**\n\n";
				msg.reply(text);
			}
		}
	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
