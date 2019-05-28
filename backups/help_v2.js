//module.exports = {
//  run: (client, message, args) => {
 
//   let embed = {
//      color: 0xB1103C,
//      title: 'Lista de Comandos S1mple',     
//      description: '**Esses são todos os comandos disponíveis do S1mple**.',
//      footer: {
//        text: 'Não se esqueça de votar no S1mple ajudando nossa divulgação.'
//      },
//      fields: []
//    }

   
//    client.commands.forEach(command => {
//      embed.fields.push(
//        {
//        name: `**${command.help.name}**`,
//        value: `**Descrição**: ${command.help.description}\n**Como Usar**: ${command.help.usage}`
//        }
//      )
//    })

 
//    message.author.send({ embed: embed })
//      .then(() => message.react(':white_check_mark:'))
//      .catch(() => message.reply('Enviei na sua DM. :envelope_with_arrow:'))
//  }
//}

const Discord = require("discord.js");

exports.run = async (bot, message, args, tools, con) => {
    let help = new Discord.RichEmbed()
        .setAuthor("Lista de comandos")
        .setColor(0xff0000)
        .addField("Economia", `${bot.commands.filter(cmd => cmd.command.category === 'economia').map(cmd => `\`${cmd.command.name}\``).join(", ")}`, true)
        .addField("Diversão", `${bot.commands.filter(cmd => cmd.command.category === 'fun').map(cmd => `\`${cmd.command.name}\``).join(", ")}`, true)
        .addField("Sistema", `${bot.commands.filter(cmd => cmd.command.category === 'sistema').map(cmd => `\`${cmd.command.name}\``).join(", ")}`, true)
        .addField("Outros", `${bot.commands.filter(cmd => cmd.command.category === 'outros').map(cmd => `\`${cmd.command.name}\``).join(", ")}`, true)
        .addField("Info", `${bot.commands.filter(cmd => cmd.command.category === 'info').map(cmd => `\`${cmd.command.name}\``).join(", ")}`, true)
        .addField("Leveling", `${bot.commands.filter(cmd => cmd.command.category === 'leveling').map(cmd => `\`${cmd.command.name}\``).join(", ")}`, true);

  
  let embedeco = new Discord.RichEmbed()
        .setAuthor("Lista de Comandos")
        .setColor(0xff0000)
        .addField("Economia", `${bot.commands.filter(cmd => cmd.command.category === 'economia').map(cmd => `\`${cmd.command.name}\``).join(", ")}`, true);
  //--------------------------------------------------
  let embedfun = new Discord.RichEmbed()
        .setAuthor("Lista de Comandos")
        .setColor(0xff0000)
        .addField("Diversão", `${bot.commands.filter(cmd => cmd.command.category === 'fun').map(cmd => `\`${cmd.command.name}\``).join(", ")}`, true);
  //--------------------------------------------------
  let embedsys = new Discord.RichEmbed()
        .setAuthor("Lista de Comandos")
        .setColor(0xff0000)
        .addField("Sistema", `${bot.commands.filter(cmd => cmd.command.category === 'sistema').map(cmd => `\`${cmd.command.name}\``).join(", ")}`, true);
  //--------------------------------------------------
  let embedout = new Discord.RichEmbed()
        .setAuthor("Lista de Comandos")
        .setColor(0xff0000)
        .addField("Outros", `${bot.commands.filter(cmd => cmd.command.category === 'outros').map(cmd => `\`${cmd.command.name}\``).join(", ")}`, true);
  //--------------------------------------------------
  let embedinf = new Discord.RichEmbed()
        .setAuthor("Lista de Comandos")
        .setColor(0xff0000)
        .addField("Info", `${bot.commands.filter(cmd => cmd.command.category === 'info').map(cmd => `\`${cmd.command.name}\``).join(", ")}`, true);
  //--------------------------------------------------
  let embedlev = new Discord.RichEmbed()
        .setAuthor("Lista de Comandos")
        .setColor(0xff0000)
        .addField("Leveling", `${bot.commands.filter(cmd => cmd.command.category === 'leveling').map(cmd => `\`${cmd.command.name}\``).join(", ")}`, true);
  //--------------------------------------------------

async function helpfunc() {
  console.log("1")
  let mainhelpmsg = new Discord.RichEmbed()
        .setAuthor("Lista de Comandos")
        .setColor(0xff0000)
        .addField("Reage a uma das reacções para ver os comandos.")
        .addField("💵 - Economia")
        .addField("🃏 - Diversão")
        .addField("📟 - Sistema")
        .addField("🗂️ - Outros")
        .addField("🗒️ - Info")
        .addField("📊 - Leveling")
 let msg = await message.channel.send(mainhelpmsg).then(function (msg) {
  
message.react('💵').then(() => message.react('🃏')).then(() => message.react('📟')).then(() => console.log("2")).then(() => message.react('📁')).then(() => message.react('📋')).then(() => message.react('📊'));
 message.delete({timeout: 1000});
 }).catch(function(error) {
  console.log(error);
        });
  console.log("3")    

const filter = (reaction, user) => {
	return ['💵', '🃏', '📟', '📁', '📋', '📊'].includes(reaction.emoji.name) && user.id === message.author.id;
};

message.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
	.then(collected => {
		const reaction = collected.first();

		if (reaction.emoji.name === '💵') {
      message.delete()
			message.reply(embedeco);
		} else {
      if (reaction.emoji.name === '🃏') {
        message.delete()
			message.reply(embedfun);
		} else {
            if (reaction.emoji.name === '📟') {
              message.delete()
			message.reply(embedsys);
		} else {
            if (reaction.emoji.name === '📁') {
              message.delete()
			message.reply(embedout);
		} else {
            if (reaction.emoji.name === '📋') {
              message.delete()
			message.reply(embedinf);
		} else {
            if (reaction.emoji.name === '📊') {
              message.delete()
			message.reply(embedlev);
		} else {
      
      
		}}}}}}
	})
	.catch(collected => {
		console.log(`Coletadas ${collected.size}.`);
		message.reply('Tempo excedido.');
	});

                                                       
  
  function helpalreadyfunc() {
    message.react('🔙')

const filter = (reaction, user) => {
	return ['🔙'].includes(reaction.emoji.name) && user.id === message.author.id;
};

message.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
	.then(collected => {
		const reaction = collected.first();

		if (reaction.emoji.name === '🔙') {
			message.delete;
      helpfunc()
	}
})
	.catch(collected => {
		console.log(`Coletadas ${collected.size}`);
		message.reply('Tempo excedido');
	});
  }
  
}
  helpfunc()
}
 module.exports.command = {
    name: 'help',
    description: 'Todos os comandos disponiveis',
    category: "sistema",
    usage: 's!help',
    enabled: true
}