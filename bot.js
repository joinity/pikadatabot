const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
var pokemon = require('./pokedex');

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', msg => {
	
	if (msg.content.startsWith("!")){
					const embed = new Discord.RichEmbed()
					.setAuthor("PikaDataBot", "https://img.pokemondb.net/sprites/black-white/normal/"+ pikachu +".png" )
					.setColor(0xFF0000)
					.addField("Sorry I was replaced by my Master.. If you want to know things about a specific Pokemon in the game check out https://www.pkmnlegends.com/pokedex.php") 
					.setThumbnail("https://img.pokemondb.net/sprites/black-white/anim/normal/"+ pikachu +".gif");
					msg.author.send("embed");

	}
	
});
	
client.login(process.env.BOT_TOKEN);
