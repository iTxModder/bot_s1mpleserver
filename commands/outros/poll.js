const Discord = require('discord.js');

exports.run = async (bot, message, args, ops) => {

	if (!message.member.roles.find("name", "@everyone")) { //Whatever role you want, I pick @everyone because everyone can use this command
		message.channel.send('<:errado:580518832939204628> **|** Não podes usar este comando.');
		return;
	}
  
  const no = bot.emojis.find(emoji => emoji.name === "✅");
  const yes = bot.emojis.find(emoji => emoji.name === "❎");
  
    // Check for input
    if (!args[0]) return message.channel.send('<:Ferc:559356192774684694> Usagem própria: s!poll <questão>');
    
    // Create Embed
    const embed = new Discord.RichEmbed()
        .setColor("#ffffff") //To change color do .setcolor("#fffff")
        .setFooter('Use as reações pra votar.')
        .setDescription(args.join(' '))
        .setTitle(`Poll criada por ${message.author.username}`);
        
    let msg = await message.channel.send(embed)
        .then(function (msg) {
            msg.react(bot.emojis.get('576519013174345738'));
            msg.react(bot.emojis.get('576519060909457408')); // You can only add two reacts
            message.delete({timeout: 1000});
            }).catch(function(error) {
            console.log(error);
        });
};

module.exports.command = {
    name: 'poll',
    description: 'Faz uma votação.',
    category: "outros",
    usage: ['s!poll <questão>'],
    enabled: true
}