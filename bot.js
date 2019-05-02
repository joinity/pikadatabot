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
     				.setAuthor(pokemon[i].Name, "https://img.pokemondb.net/sprites/black-white/normal/"+ pkmn +".png" )
      				.setColor(0xFF0000)
      				.addField("Stats", "Level" + pokemon[i].Level)
				.addField("\u200B","⧫ ATK: " + pokemon[i].Damage + "\r\n ⧫ HP: " + pokemon[i].Health + "\r\n ⧫ DEF: " + pokemon[i].Defense, true)
      				.addField("\u200B", "⧫ RANGE: " + pokemon[i].Range+ "\r\n ⧫ DPS: " + pokemon[i].DPS + "\r\n ⧫ MOVE SPEED: " + pokemon[i].MoveSpeed, true)
      				.addField("Skills", pokemon[i].Ability)
      				.setImage("https://img.pokemondb.net/sprites/black-white/normal/"+ pkmn +".png")
    				.setThumbnail("https://img.pokemondb.net/sprites/black-white/anim/normal/"+ pkmn +".gif");
				msg.channel.send({embed}).then(sentMessage => {
    sentMessage.delete(10000);

			}
		
	}
	
});
	
client.login(process.env.BOT_TOKEN);
