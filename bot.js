const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
var pokemon = require('./pokedex');

client.on('ready', () => {
    console.log('I am ready!');
});

bot.on("message", msg => {
	let prefix = "!";
	if (!msg.content.startsWith(prefix)) return;

	if(msg.author.bot) return;

    if (msg.content == prefix+"ping") {
        msg.channel.sendMessage("!pong");
    }
    else if (msg.content == prefix+"<3"){
        msg.channel.sendMessage("I love you, Master!");
    }
	
	else if (msg.content.startsWith(prefix+"pokemon")){
		var pkmn = msg.content.toString().toLowerCase();
		pkmn = pkmn.substring(9);
		for(var i=0;i<pokemon.length;i++){
			if(pkmn == pokemon[i]._engName.toLowerCase() || pkmn == pokemon[i]._frName.toLowerCase() || pkmn == pokemon[i]._nb){
				var text = "__You selected__\n";
				text += "**N° "+pokemon[i]._nb+"** \n";
				text += "English name: **"+pokemon[i]._engName+"** \n";
	 			text += "French name: **"+pokemon[i]._frName+"** \n";
				text += "Type: **"+pokemon[i]._type+" "+pokemon[i]._type2+"**\n";
				text += "Catch Ratio: **"+pokemon[i]._catchRate+"**\n\n";
				text += "__Base Stats__\n";
				text += "HP: **"+pokemon[i]._baseStats._hp+"**\n";
				text += "Atk: **"+pokemon[i]._baseStats._atk+"**\n";
				text += "Def: **"+pokemon[i]._baseStats._def+"**\n";
				text += "S. Atk: **"+pokemon[i]._baseStats._sAtk+"**\n";
				text += "S. Def: **"+pokemon[i]._baseStats._sDef+"**\n";
				text += "Spd: **"+pokemon[i]._baseStats._spd+"**";
				msg.reply(text);
			}
		}
	}
});

