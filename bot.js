const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
var pokemon = require('./pokedex');

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
	if (!message.content.startsWith("!") || message.author.bot) return;
	
   	 if (msg.content == prefix+"ping") {
        msg.channel.sendMessage("!pong");
    	}
	var pkmn = message.content.slice(1).split(/ +/);
	pkmn = pkmn.content.toString().toLowerCase();
	for(var i=0;i<pokemon.length;i++){
			if(pkmn == pokemon[i].Name.toLowerCase()){
				var text = "__You selected__\n";
				text += "**N° "+pokemon[i].Name+"** \n";
				text += "Type: **"+pokemon[i].Type+"** \n";
	 			text += "Level: **"+pokemon[i].Level+"** \n";
				text += "Health: **"+pokemon[i].Health+"** \n";
				text += "Damage: **"+pokemon[i].Damage+"**\n\n";
				message.reply(text);
			}
		
	}
});
