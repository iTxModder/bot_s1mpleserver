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
  let embedchoice;
  
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
        bot.commands.filter(cmd => cmd.command.category === "economia").map(cmd => embedeco.addField(cmd.command.name , `**${cmd.command.description}**`));
  //--------------------------------------------------
  let embedfun = new Discord.RichEmbed()
        .setAuthor("Lista de Comandos")
        .setColor(0xff0000)
        bot.commands.filter(cmd => cmd.command.category === "fun").map(cmd => embedfun.addField(cmd.command.name , `**${cmd.command.description}**`));
  //--------------------------------------------------
  let embedsys = new Discord.RichEmbed()
        .setAuthor("Lista de Comandos")
        .setColor(0xff0000)
        bot.commands.filter(cmd => cmd.command.category === "sistema").map(cmd => embedsys.addField(cmd.command.name , `**${cmd.command.description}**`));
  //--------------------------------------------------
  let embedout = new Discord.RichEmbed()
        .setAuthor("Lista de Comandos")
        .setColor(0xff0000)
        bot.commands.filter(cmd => cmd.command.category === "outros").map(cmd => embedout.addField(cmd.command.name , `**${cmd.command.description}**`));
  //--------------------------------------------------
  let embedinf = new Discord.RichEmbed()
        .setAuthor("Lista de Comandos")
        .setColor(0xff0000)
        bot.commands.filter(cmd => cmd.command.category === "info").map(cmd => embedinf.addField(cmd.command.name , `**${cmd.command.description}**`));
  //--------------------------------------------------
  let embedlev = new Discord.RichEmbed()
        .setAuthor("Lista de Comandos")
        .setColor(0xff0000)
        bot.commands.filter(cmd => cmd.command.category === "leveling").map(cmd => embedlev.addField(cmd.command.name , `**${cmd.command.description}**`));
  //--------------------------------------------------

async function helpfunc() {
  console.log("1")
  let mainhelpmsg = new Discord.RichEmbed()
        .setAuthor("Lista de Comandos")
        .setColor(0xff0000)
        .addField("Reage a uma das reacções para ver os comandos.", "--------------------")
        .addField("💵 - Economia", "--------------------")
        .addField("🃏 - Diversão", "--------------------")
        .addField("📟 - Sistema", "--------------------")
        .addField("🗂️ - Outros", "--------------------")
        .addField("🗒️ - Info", "--------------------")
        .addField("📊 - Leveling", "--------------------")
 let msg = await message.channel.send(mainhelpmsg).then(sentEmbed => {
  
sentEmbed.react('💵').then(() => sentEmbed.react('🃏')).then(() => sentEmbed.react('📟')).then(() => console.log("2")).then(() => sentEmbed.react('📁')).then(() => sentEmbed.react('📋')).then(() => sentEmbed.react('📊')).then(() => sentEmbed.react('❌'));
 message.delete({timeout: 1000});

  console.log("3")    

const filter = (reaction, user) => {
	return ['💵', '🃏', '📟', '📁', '📋', '📊', '❌'].includes(reaction.emoji.name) && user.id === message.author.id;
};

sentEmbed.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
	.then(collected => {
		const reaction = collected.first();

		if (reaction.emoji.name === '💵') {
      //embedchoice="embedeco"
      //console.log(embedchoice)
      sentEmbed.delete()
      //message.channel.send(embedeco)
      embedecosend()
			//message.reply(embedeco);
		} else {
      if (reaction.emoji.name === '🃏') {
        sentEmbed.delete()
        embedfunsend()
			sentEmbed.edit(embedfun);
		} else {
            if (reaction.emoji.name === '📟') {
              sentEmbed.delete()
        embedsyssend()
              
			sentEmbed.edit(embedsys);
		} else {
            if (reaction.emoji.name === '📁') {
              sentEmbed.delete()
        embedoutsend()
			sentEmbed.edit(embedout);
		} else {
            if (reaction.emoji.name === '📋') {
             sentEmbed.delete()
        embedinfsend()
			sentEmbed.edit(embedinf);
		} else {
            if (reaction.emoji.name === '📊') {
              sentEmbed.delete()
        embedlevsend()
			sentEmbed.edit(embedlev);
		} else {
      if (reaction.emoji.name === '❌') {
              sentEmbed.delete()
      
      
		}}}}}}}
	})
	.catch(collected => {
		console.log(`Coletadas ${collected.size}.`)
    sentEmbed.delete();
		message.reply('Tempo excedido.').then(sentEmbed.delete())
   }).catch(function(error) {
  console.log(error)
        })
	})  
}
  async function embedecosend() {
    console.log(embedchoice)
 let msg = await message.channel.send(embedeco).then(sentEmbed2 => {
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
  
  //---------------------
  async function embedsyssend() {
    console.log(embedchoice)
 let msg = await message.channel.send(embedsys).then(sentEmbed => {
    sentEmbed.react('🔙');
   message.delete({timeout: 1000});

const filter = (reaction, user) => {
	return ['🔙'].includes(reaction.emoji.name) && user.id === message.author.id;
};

sentEmbed.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
	.then(collected => {
		const reaction = collected.first();

		if (reaction.emoji.name === '🔙') {
      console.log("delete")
      sentEmbed.delete()
      helpfunc()
	} else {
    console.log("error")
  }
})
	.catch(collected => {
		console.log(`Coletadas ${collected.size}`);
  sentEmbed.delete()
		message.reply('Tempo excedido');
	});
      });
  };
  //---------------------
  async function embedfunsend() {
    console.log(embedchoice)
 let msg = await message.channel.send(embedfun).then(sentEmbed3 => {
    sentEmbed3.react('🔙');
   message.delete({timeout: 1000});

const filter = (reaction, user) => {
	return ['🔙'].includes(reaction.emoji.name) && user.id === message.author.id;
};

sentEmbed3.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
	.then(collected => {
		const reaction = collected.first();

		if (reaction.emoji.name === '🔙') {
      console.log("delete")
      sentEmbed3.delete()
      helpfunc()
	} else {
    console.log("error")
  }
})
	.catch(collected => {
		console.log(`Coletadas ${collected.size}`);
    sentEmbed3.delete()
		message.reply('Tempo excedido');
	});
      });
  };
    //---------------------
  async function embedoutsend() {
    console.log(embedchoice)
 let msg = await message.channel.send(embedout).then(sentEmbed => {
    sentEmbed.react('🔙');
   message.delete({timeout: 1000});

const filter = (reaction, user) => {
	return ['🔙'].includes(reaction.emoji.name) && user.id === message.author.id;
};

sentEmbed.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
	.then(collected => {
		const reaction = collected.first();

		if (reaction.emoji.name === '🔙') {
      console.log("delete")
      sentEmbed.delete()
      helpfunc()
	} else {
    console.log("error")
  }
})
	.catch(collected => {
		console.log(`Coletadas ${collected.size}`);
    sentEmbed.delete()
		message.reply('Tempo excedido');
	});
      });
  };
    //---------------------
  async function embedinfsend() {
    console.log(embedchoice)
 let msg = await message.channel.send(embedinf).then(sentEmbed => {
    sentEmbed.react('🔙');
   message.delete({timeout: 1000});

const filter = (reaction, user) => {
	return ['🔙'].includes(reaction.emoji.name) && user.id === message.author.id;
};

sentEmbed.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
	.then(collected => {
		const reaction = collected.first();

		if (reaction.emoji.name === '🔙') {
      console.log("delete")
      sentEmbed.delete()
      helpfunc()
	} else {
    console.log("error")
  }
})
	.catch(collected => {
		console.log(`Coletadas ${collected.size}`);
    sentEmbed.delete()
		message.reply('Tempo excedido');
	});
      });
  };
    //---------------------
  async function embedlevsend() {
    console.log(embedchoice)
 let msg = await message.channel.send(embedlev).then(sentEmbed => {
    sentEmbed.react('🔙');
   message.delete({timeout: 1000});

const filter = (reaction, user) => {
	return ['🔙'].includes(reaction.emoji.name) && user.id === message.author.id;
};

sentEmbed.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
	.then(collected => {
		const reaction = collected.first();

		if (reaction.emoji.name === '🔙') {
      console.log("delete")
      sentEmbed.delete()
      helpfunc()
	} else {
    console.log("error")
  }
})
	.catch(collected => {
		console.log(`Coletadas ${collected.size}`);
    sentEmbed.delete()
		message.reply('Tempo excedido');
	});
      });
  };
  
  helpfunc()
}
 module.exports.command = {
    name: 'help',
    description: 'Todos os comandos disponiveis',
    category: "sistema",
    usage: 's!help',
    enabled: true
}