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
				
const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setTitle('Some title')
	.setURL('https://discord.js.org/')
	.setAuthor('Some name', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
	.setDescription('Some description here')
	.setThumbnail('https://i.imgur.com/wSTFkRM.png')
	.addField('Regular field title', 'Some value here')
	.addBlankField()
	.addField('Inline field title', 'Some value here', true)
	.addField('Inline field title', 'Some value here', true)
	.addField('Inline field title', 'Some value here', true)
	.setImage('https://i.imgur.com/wSTFkRM.png')
	.setTimestamp()
	.setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');

msg.channel.send(exampleEmbed);
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
