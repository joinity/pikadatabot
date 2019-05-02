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
				msg.channel.send("WIP");
				const embed = new Discord.RichEmbed()
				.setAuthor("Author", "https://lh3.googleusercontent.com/rA0lKRGI_-bP-Jj4nkVc5lm6WJfO3nYlAz089otvQnLeevIoao1CTvaU0l0dqnnWIvLZTSOTaEwj6W04IZSRHQz3NYWiePtJnW3bANh54aI=w120")
      .setColor(0xFF0000)
      .addField("<:stats:545991150486421514> Stats", "⧫ ATK: " + "variable" + "\r\n ⧫ HP: " + "variable" + "\r\n ⧫ DEF: " + "variable", true)
      .addField("\u200B", "⧫ CRIT RATE: " + "variable" + "\r\n ⧫ CRIT DMG: " + "variable" + "\r\n ⧫ AGI: " + "variable", true)
      .addField("<:skills:545991578355761152> Skills", "Skill descriptions")
      .setImage("https://lh3.googleusercontent.com/rA0lKRGI_-bP-Jj4nkVc5lm6WJfO3nYlAz089otvQnLeevIoao1CTvaU0l0dqnnWIvLZTSOTaEwj6W04IZSRHQz3NYWiePtJnW3bANh54aI=w120", 2, 2)
      .setThumbnail("https://lh3.googleusercontent.com/rA0lKRGI_-bP-Jj4nkVc5lm6WJfO3nYlAz089otvQnLeevIoao1CTvaU0l0dqnnWIvLZTSOTaEwj6W04IZSRHQz3NYWiePtJnW3bANh54aI=w120")
      .setFooter("Footer", "https://lh3.googleusercontent.com/rA0lKRGI_-bP-Jj4nkVc5lm6WJfO3nYlAz089otvQnLeevIoao1CTvaU0l0dqnnWIvLZTSOTaEwj6W04IZSRHQz3NYWiePtJnW3bANh54aI=w120");
				/*
     				.setAuthor(pokemon[i].Name)
      				.setColor(0xFF0000)
      				.addField("Stats", "LVL" + pokemon[i].Level + " ATK: " + pokemon[i].Damage + "\r\n ⧫ HP: " + pokemon[i].Health + "\r\n ⧫ DEF: " + pokemon[i].Defense, true)
      				.addField("\u200B", " RANGE: " + pokemon[i].Range+ "\r\n ⧫ DPS: " + pokemon[i].DPS + "\r\n ⧫ MOVE SPEED: " + pokemon[i].MoveSpeed, true)
      				.addField("Skills", pokemon[i].Ability)
      				.setImage("https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.pokewiki.de%2Fimages%2Fthumb%2F6%2F6c%2FSugimori_025.png%2F250px-Sugimori_025.png&imgrefurl=https%3A%2F%2Fwww.pokewiki.de%2FPikachu&docid=IoMwWOt4siFKgM&tbnid=4I4v8PsJini_DM%3A&vet=10ahUKEwjTvpXv5PzhAhUOFRQKHT-mAM8QMwg_KAAwAA..i&w=250&h=234&bih=927&biw=958&q=pikachu&ved=0ahUKEwjTvpXv5PzhAhUOFRQKHT-mAM8QMwg_KAAwAA&iact=mrc&uact=8", 2, 2);
    				*/
				msg.channel.send(embed);

			}
		
	}
	
});
	
client.login(process.env.BOT_TOKEN);
