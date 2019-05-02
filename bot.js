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
				const embed = new Discord.RichEmbed()
      .setAuthor(pokemon[i], "LVL" + pokemon[i].Level)
      .setColor(0xFF0000)
      .addField("Stats", " ATK: " + pokemon[i].Damage + "\r\n ⧫ HP: " + pokemon[i].Health + "\r\n ⧫ DEF: " + pokemon[i].Defense, true)
      .addField("\u200B", " RANGE: " + pokemon[i].Range+ "\r\n ⧫ DPS: " + pokemon[i].DPS + "\r\n ⧫ MOVE SPEED: " + pokemon[i].MoveSpeed, true)
      .addField("Skills", pokemon[i].Ability)
      .setImage("https://lh3.googleusercontent.com/rA0lKRGI_-bP-Jj4nkVc5lm6WJfO3nYlAz089otvQnLeevIoao1CTvaU0l0dqnnWIvLZTSOTaEwj6W04IZSRHQz3NYWiePtJnW3bANh54aI=w120", 2, 2)
    message.channel.send(embed);

			}
		
	}
	
});
	
client.login(process.env.BOT_TOKEN);
