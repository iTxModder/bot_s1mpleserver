const Discord = require('discord.js')
const db = require('quick.db')
const fs = require('fs');

//{
//	"Auto Claim Card": {
//		"symbol": "💳",
//    "price": 2000
//	},
//	"S1mple Nitro Classic": {
//		"symbol": "👑",
//		"price": 100000
//	},
//	"color": {
//		"symbol": "🎨",
//		"price": 2000
//	},
//	"Boost XP (x3)": {
//		"symbol": "🆙",
//		"price": 1000
//	}
//}

module.exports.run = async (bot, message, args) => {
  
  let moons = await db.fetch(`moons_${message.author.id}`)
  let author = message.author.username
  let data = Date.now
  let s1mplestorechannel = message.guild.channels.find(`name`, "🐧 • s1mple store");
   
  //const name = args.join(' ');
  //      const file_content = fs.readFileSync('./assets/json/items.json', 'utf-8');
  //      const items = JSON.parse(file_content);
  //      const itemNames = Object.keys(items);
  //      const itemSymbol = items
        
  //if (moons <= 2000) {console.log('true' + moons)} else {console.log('false' + moons)}
  
  let embedchoice;
  
  //ITEMS
  let embedacc = new Discord.RichEmbed()
        .setAuthor("Loja do S1mple")
        .setColor(0xff0000)
        .addField('De certeza que queres comprar `💳 Auto Claim Card` por **2000** moons?', '✅ - Sim\n ❎ - Não')
  
  let embedsnc = new Discord.RichEmbed()
        .setAuthor("Loja do S1mple")
        .setColor(0xff0000)
        .addField('De certeza que queres comprar `👑 S1mple Nitro Classic` por **100000** moons?', '✅ - Sim\n ❎ - Não')
  
  let embedcol = new Discord.RichEmbed()
        .setAuthor("Loja do S1mple")
        .setColor(0xff0000)
        .addField('De certeza que queres comprar `🎨 color` por **2500** moons?', '✅ - Sim\n ❎ - Não')
  
    let embedbx3 = new Discord.RichEmbed()
        .setAuthor("Loja do S1mple")
        .setColor(0xff0000)
        .addField('De certeza que queres comprar `🆙 Boost XP (3x)` por **1000** moons?', '✅ - Sim\n ❎ - Não')
  //--------------------------------------------------
  // Recibos
    let reciboacc = new Discord.RichEmbed()
        .setAuthor("Loja do S1mple")
        .setColor(0xff0000)
        .addField(`O utilizador @${author} comprou **💳 Auto Claim Card**!`, 'Use `s!shop` para comprar items!')
		    .setTimestamp(message.createdAt)
    
    let recibosnc = new Discord.RichEmbed()
        .setAuthor("Loja do S1mple")
        .setColor(0xff0000)
        .addField(`O utilizador @${author} comprou **👑 S1mple Nitro Classic**!`, 'Use `s!shop` para comprar items!')
		    .setTimestamp(message.createdAt)
    
    let recibocol = new Discord.RichEmbed()
        .setAuthor("Loja do S1mple")
        .setColor(0xff0000)
        .addField(`O utilizador @${author} comprou **🎨 color**!`, 'Use `s!shop` para comprar items!')
		    .setTimestamp(message.createdAt)
    
    let recibobx3 = new Discord.RichEmbed()
        .setAuthor("Loja do S1mple")
        .setColor(0xff0000)
        .addField(`O utilizador @${author} comprou **🆙 Boost XP (3x)**!`, 'Use `s!shop` para comprar items!')
		    .setTimestamp(message.createdAt)
  //--------------------------------------------------

async function shopfunc() {
  console.log("1")
  let mainshopmsg = new Discord.RichEmbed()
        .setAuthor(`Loja do S1mple`)
        .setColor(0xff0000)
        .addField("Reage a uma das reacções para comprar esse item.", "--------------------")
        .addField("💳 - 💳 Auto Claim Card", "Preço: 2000 Moons")
        .addField("👑 - 👑 S1mple Nitro Classic", "Preço: 100000 Moons")
        .addField("🎨 - 🎨 color", "Preço: 2500 Moons")
        .addField("🆙 - 🆙 Boost XP (3x)", "Preço: 1000 Moons")
        //.addField("🗒️ - Info", "--------------------")
        //.addField("📊 - Leveling", "--------------------")
 let msg = await message.channel.send(mainshopmsg).then(sentEmbed => {
  
sentEmbed.react('💳').then(() => sentEmbed.react('👑')).then(() => sentEmbed.react('🎨')).then(() => console.log("2")).then(() => sentEmbed.react('🆙')).then(() => sentEmbed.react('❌'));//.then(() => sentEmbed.react('📋')).then(() => sentEmbed.react('📊'))
 message.delete({timeout: 1000});

  console.log("3")    

const filter = (reaction, user) => {
	return ['💳', '👑', '🎨', '🆙', '❌'].includes(reaction.emoji.name) && user.id === message.author.id;//, '🃏', '📟', '📁', '📋', '📊'
};

sentEmbed.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
	.then(collected => {
		const reaction = collected.first();

		if (reaction.emoji.name === '💳') {
      //embedchoice="embedeco"
      //console.log(embedchoice)
      sentEmbed.delete()
      //message.channel.send(embedeco)
      embedaccsend()
			//message.reply(embedeco);
		} else {
      if (reaction.emoji.name === '❌') {
              sentEmbed.delete()
      
      
    } else {
      if (reaction.emoji.name === '👑') {
        sentEmbed.delete()
        embedsncsend()
		  } else {
        if (reaction.emoji.name === '🎨') {
          sentEmbed.delete()
          embedcolsend()
        } else {
          if (reaction.emoji.name === '🆙') {
            sentEmbed.delete()
            embedbx3send()
          }}
      }}
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
  
  //  const no = bot.emojis.find(emoji => emoji.name === "✅");
  //const yes = bot.emojis.find(emoji => emoji.name === "❎");
  
  async function embedaccsend() {
    console.log(embedchoice)
 let msg = await message.channel.send(embedacc).then(sentEmbed2 => {
    sentEmbed2.react('✅').then(() => sentEmbed2.react('❎'));
   message.delete({timeout: 1000});

const filter = (reaction, user) => {
	return ['✅', '❎'].includes(reaction.emoji.name) && user.id === message.author.id;
};

sentEmbed2.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
	.then(collected => {
		const reaction = collected.first();
  
    if (reaction.emoji.name === '✅') { //sim
      sentEmbed2.delete()
      if (moons < 2000) {
        message.reply("<:errado:580518832939204628> **|** Você não tem moons suficientes.")
      } else {
        let acc = message.guild.roles.find(r => r.name === "💳 Auto Claim Card");
        if(message.member.roles.has(acc)) { message.reply("<:errado:580518832939204628> **|** Você já tem esse item!")
        } else {
        db.subtract(`moons_${message.author.id}`, 2000).then(message.member.addRole(acc).catch(console.error)).then(s1mplestorechannel.send(reciboacc)).then(message.reply('<a:AcceptGif:569565878551838750> Compra efetuada com sucesso!'))}
      }
    } else {
      if (reaction.emoji.name === '❎') { //não
        sentEmbed2.delete()
      shopfunc()
    }}
    console.log("error")
})
	.catch(collected => {
		console.log(`Coletadas ${collected.size}`);
    sentEmbed2.delete()
		message.reply('Tempo excedido');
	});
      });
  };
  //------------------------------------------------------------------------
  async function embedsncsend() {
    console.log(embedchoice)
 let msg = await message.channel.send(embedsnc).then(sentEmbed2 => {
    sentEmbed2.react('✅').then(() => sentEmbed2.react('❎'));
   message.delete({timeout: 1000});

const filter = (reaction, user) => {
	return ['✅', '❎'].includes(reaction.emoji.name) && user.id === message.author.id;
};

sentEmbed2.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
	.then(collected => {
		const reaction = collected.first();

		    if (reaction.emoji.name === '✅') { //sim
      sentEmbed2.delete()
      if (moons < 100000) {
        message.reply("<:errado:580518832939204628> **|** Você não tem moons suficientes.")
      } else {
        let snc = message.guild.roles.find(r => r.name === "👑 S1mple Nitro Classic");
        if(message.member.roles.has(snc)) return message.reply("<:errado:580518832939204628> **|** Você já tem esse item!")
        else {
        db.subtract(`moons_${message.author.id}`, 100000).then(message.member.addRole(snc).catch(console.error)).then(s1mplestorechannel.send(recibosnc)).then(message.reply('<a:AcceptGif:569565878551838750> Compra efetuada com sucesso!'))}

      }
    } else {
      if (reaction.emoji.name === '❎') { //não
        sentEmbed2.delete()
      shopfunc()
    } else {
    console.log("error")
    }}
})
	.catch(collected => {
		console.log(`Coletadas ${collected.size}`);
    sentEmbed2.delete()
		message.reply('Tempo excedido');
	});
      });
  };
  //------------------------------------------------------------------------------------
  async function embedcolsend() {
    console.log(embedchoice)
 let msg = await message.channel.send(embedcol).then(sentEmbed2 => {
    sentEmbed2.react('✅').then(() => sentEmbed2.react('❎'));
   message.delete({timeout: 1000});

const filter = (reaction, user) => {
	return ['✅', '❎'].includes(reaction.emoji.name) && user.id === message.author.id;
};

sentEmbed2.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
	.then(collected => {
		const reaction = collected.first();
  
    if (reaction.emoji.name === '✅') { //sim
      sentEmbed2.delete()
      if (moons < 2500) {
        message.reply("<:errado:580518832939204628> **|** Você não tem moons suficientes.")
      } else {
        db.subtract(`moons_${message.author.id}`, 2000).then(s1mplestorechannel.send(recibocol)).then(message.reply("<a:AcceptGif:569565878551838750> Compra efetuada com sucesso!\n Por favor use s!ticket e mande print do recibo em #🐧 • s1mple store para obter a sua cor."))
      }
    } else {
      if (reaction.emoji.name === '❎') { //não
        sentEmbed2.delete()
      shopfunc()
    }}
    console.log("error")
})
	.catch(collected => {
		console.log(`Coletadas ${collected.size}`);
    sentEmbed2.delete()
		message.reply('Tempo excedido');
	});
      });
  };
  //------------------------------------------------------------------------------------
  async function embedbx3send() {
    console.log(embedchoice)
 let msg = await message.channel.send(embedbx3).then(sentEmbed2 => {
    sentEmbed2.react('✅').then(() => sentEmbed2.react('❎'));
   message.delete({timeout: 1000});

const filter = (reaction, user) => {
	return ['✅', '❎'].includes(reaction.emoji.name) && user.id === message.author.id;
};

sentEmbed2.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
	.then(collected => {
		const reaction = collected.first();
  
    if (reaction.emoji.name === '✅') { //sim
      sentEmbed2.delete()
      if (moons < 1000) {
        message.reply("<:errado:580518832939204628> **|** Você não tem moons suficientes.")
      } else {
        let bx3 = message.guild.roles.find(r => r.name === "🆙 Boost XP (3x)");
        if(message.member.roles.has(bx3)) return message.reply("<:errado:580518832939204628> **|** Você já tem esse item!")
        else {
        db.subtract(`moons_${message.author.id}`, 2000).then(message.member.addRole(bx3).catch(console.error)).then(s1mplestorechannel.send(recibobx3)).then(message.reply('<a:AcceptGif:569565878551838750> Compra efetuada com sucesso!'))}

      }
    } else {
      if (reaction.emoji.name === '❎') { //não
        sentEmbed2.delete()
      shopfunc()
    }}
    console.log("error")
})
	.catch(collected => {
		console.log(`Coletadas ${collected.size}`);
    sentEmbed2.delete()
		message.reply('Tempo excedido');
	});
      });
  };
  
  shopfunc()
}


module.exports.command = {
    name: 'shop',
    aliases: ['mercado', 'loja'],
    description: 'Vê a loja e compra itens!',
    category: "Economia",
    usage: 'shop <item>',
    enabled: false
}