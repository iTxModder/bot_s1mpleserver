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
  if(message.member.roles.some(r => r.name === "Manager") || message.member.roles.some(r => r.name === "Fundador") || message.member.roles.some(r => r.name === "Moderador Plus")) {    
  }
  let embedchoice;
  
    let help = new Discord.RichEmbed()
        .setAuthor("<a:StaffGif:552356390807535616> Lista de comandos <a:StaffGif:552356390807535616>")
        .setColor(0xff0000)
        .addField("Economia", `${bot.commands.filter(cmd => cmd.command.category === 'economia').map(cmd => `\`${cmd.command.name}\``).join(", ")}`, true)
        .addField("Diversão", `${bot.commands.filter(cmd => cmd.command.category === 'fun').map(cmd => `\`${cmd.command.name}\``).join(", ")}`, true)
        .addField("Sistema", `${bot.commands.filter(cmd => cmd.command.category === 'sistema').map(cmd => `\`${cmd.command.name}\``).join(", ")}`, true)
        .addField("Outros", `${bot.commands.filter(cmd => cmd.command.category === 'outros').map(cmd => `\`${cmd.command.name}\``).join(", ")}`, true)
        .addField("Info", `${bot.commands.filter(cmd => cmd.command.category === 'info').map(cmd => `\`${cmd.command.name}\``).join(", ")}`, true)
        .addField("Leveling", `${bot.commands.filter(cmd => cmd.command.category === 'leveling').map(cmd => `\`${cmd.command.name}\``).join(", ")}`, true);

  
  let embedadm = new Discord.RichEmbed()
        .setAuthor("Lista de Comandos")
        .setColor(0xff0000)
        bot.commands.filter(cmd => cmd.command.category === "admin").map(cmd => embedadm.addField(cmd.command.name , `**${cmd.command.description}**`));
  
  let embedtes = new Discord.RichEmbed()
        .setAuthor("Lista de Comandos")
        .setColor(0xff0000)
        bot.commands.filter(cmd => cmd.command.category === "teste").map(cmd => embedadm.addField(cmd.command.name , `**${cmd.command.description}**`));
  //--------------------------------------------------

async function helpfunc() {
  console.log("1")
  let mainhelpmsg = new Discord.RichEmbed()
        .setAuthor(`Lista de Comandos`)
        .setColor(0xff0000)
        .addField("Reage a uma das reacções para ver os comandos.", "--------------------")
        .addField("👮🏽 - Admin", "--------------------")
        .addField("📑 - Teste", "--------------------")
        //.addField("📟 - Sistema", "--------------------")
        //.addField("🗂️ - Outros", "--------------------")
        //.addField("🗒️ - Info", "--------------------")
        //.addField("📊 - Leveling", "--------------------")
 let msg = await message.channel.send(mainhelpmsg).then(sentEmbed => {
  
sentEmbed.react('👮🏽').then(() => sentEmbed.react('📑')).then(() => sentEmbed.react('❌'));//.then(() => sentEmbed.react('📟')).then(() => console.log("2")).then(() => sentEmbed.react('📁')).then(() => sentEmbed.react('📋')).then(() => sentEmbed.react('📊'))
 message.delete({timeout: 1000});

  console.log("3")    

const filter = (reaction, user) => {
	return ['👮🏽', '📑', '❌'].includes(reaction.emoji.name) && user.id === message.author.id;//, '🃏', '📟', '📁', '📋', '📊'
};

sentEmbed.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
	.then(collected => {
		const reaction = collected.first();

		if (reaction.emoji.name === '👮🏽') {
      //embedchoice="embedeco"
      //console.log(embedchoice)
      sentEmbed.delete()
      //message.channel.send(embedeco)
      embedadmsend()
			//message.reply(embedeco);
		} else {
      if (reaction.emoji.name === '❌') {
              sentEmbed.delete()
      
      
    } else {
      if (reaction.emoji.name === '📑') {
        sentEmbed.delete()
        embedtessend()
			sentEmbed.edit(embedtes)}}
    }
	})
	.catch(collected => {
		console.log(`Coletadas ${collected.size}.`)
    sentEmbed.delete()
		message.reply('Tempo excedido.').then(sentEmbed.delete())
   }).catch(function(error) {
  console.log(error)
        })
	})  
}
  async function embedadmsend() {
    console.log(embedchoice)
 let msg = await message.channel.send(embedadm).then(sentEmbed2 => {
    sentEmbed2.react('🔙');
   message.delete({timeout: 1000});

const filter = (reaction, user) => {
	return ['🔙'].includes(reaction.emoji.name) && user.id === message.author.id;
};

sentEmbed2.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
	.then(collected => {
		const reaction = collected.first();

		if (reaction.emoji.name === '🔙') {
      console.log("delete")
      sentEmbed2.delete()
      helpfunc()
	} else {
    console.log("error")
  }
})
	.catch(collected => {
		console.log(`Coletadas ${collected.size}`);
    sentEmbed2.delete()
		message.reply('Tempo excedido');
	});
      });
  };
  async function embedtessend() {
    console.log(embedchoice)
 let msg = await message.channel.send(embedtes).then(sentEmbed2 => {
    sentEmbed2.react('🔙');
   message.delete({timeout: 1000});

const filter = (reaction, user) => {
	return ['🔙'].includes(reaction.emoji.name) && user.id === message.author.id;
};

sentEmbed2.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
	.then(collected => {
		const reaction = collected.first();

		if (reaction.emoji.name === '🔙') {
      console.log("delete")
      sentEmbed2.delete()
      helpfunc()
	} else {
    console.log("error")
  }
})
	.catch(collected => {
		console.log(`Coletadas ${collected.size}`);
    sentEmbed2.delete()
		message.reply('Tempo excedido');
	});
      });
  };
  
  helpfunc()
}
 module.exports.command = {
    name: 'staffhelp',
    description: 'Todos os comandos disponiveis para staff',
    category: "admin",
    usage: 's!staffhelp',
    enabled: true
}