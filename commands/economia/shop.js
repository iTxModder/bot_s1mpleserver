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
  
let cooldown = 600000	
let bx3duration = await db.fetch(`bx3duration_${message.author.id}`)
if(bx3duration !== null && cooldown - (Date.now() - bx3duration) > 0);
   
  //const name = args.join(' ');
  //      const file_content = fs.readFileSync('./assets/json/items.json', 'utf-8');
  //      const items = JSON.parse(file_content);
  //      const itemNames = Object.keys(items);
  //      const itemSymbol = items
        
  //if (moons <= 2000) {console.log('true' + moons)} else {console.log('false' + moons)}
  
  let embedchoice;
  
  //ITEMS
  // Cards
  let embedacc = new Discord.RichEmbed()
        .setAuthor("Loja do S1mple")
        .setColor(0xff0000)
        .addField('De certeza que queres comprar `💳 Auto Claim Card` por **25000** moons?', '✅ - Sim\n ❎ - Não')
  let embeddcc = new Discord.RichEmbed()
        .setAuthor("Loja do S1mple")
        .setColor(0xff0000)
        .addField('De certeza que queres comprar `💳 Discount Card` por **20000** moons?', '✅ - Sim\n ❎ - Não')
  let embedntc = new Discord.RichEmbed()
        .setAuthor("Loja do S1mple")
        .setColor(0xff0000)
        .addField('De certeza que queres comprar `💳 Nitro Card` por **30000** moons?', '✅ - Sim\n ❎ - Não')
  let embedsmc = new Discord.RichEmbed()
        .setAuthor("Loja do S1mple")
        .setColor(0xff0000)
        .addField('De certeza que queres comprar `💳 S1mple Card` por **50000** moons?', '✅ - Sim\n ❎ - Não')
  
  // ---------------------------------------------------------------------------
  // CARGOS
  let embedsnc = new Discord.RichEmbed()
        .setAuthor("Loja do S1mple")
        .setColor(0xff0000)
        .addField('De certeza que queres comprar `🌠 StarLight` por **1000000** moons?', '✅ - Sim\n ❎ - Não')
  let embedcon = new Discord.RichEmbed()
        .setAuthor("Loja do S1mple")
        .setColor(0xff0000)
        .addField('De certeza que queres comprar `❄️ Senpai` por **500000** moons?', '✅ - Sim\n ❎ - Não')
  let embedsup = new Discord.RichEmbed()
        .setAuthor("Loja do S1mple")
        .setColor(0xff0000)
        .addField('De certeza que queres comprar `🌹 Supreme` por **400000** moons?', '✅ - Sim\n ❎ - Não')
  let embeddiv = new Discord.RichEmbed()
        .setAuthor("Loja do S1mple")
        .setColor(0xff0000)
        .addField('De certeza que queres comprar `🌻 Divine` por **350000** moons?', '✅ - Sim\n ❎ - Não')
  let embedans = new Discord.RichEmbed()
        .setAuthor("Loja do S1mple")
        .setColor(0xff0000)
        .addField('De certeza que queres comprar `🌺 Ancion` por **300000** moons?', '✅ - Sim\n ❎ - Não')
  let embedleg = new Discord.RichEmbed()
        .setAuthor("Loja do S1mple")
        .setColor(0xff0000)
        .addField('De certeza que queres comprar `🥀 Legend` por **250000** moons?', '✅ - Sim\n ❎ - Não')
  let embedgla = new Discord.RichEmbed()
        .setAuthor("Loja do S1mple")
        .setColor(0xff0000)
        .addField('De certeza que queres comprar `🌷 Gladiator` por **150000** moons?', '✅ - Sim\n ❎ - Não')
  let embedher = new Discord.RichEmbed()
        .setAuthor("Loja do S1mple")
        .setColor(0xff0000)
        .addField('De certeza que queres comprar `🍁 Herald` por **10000** moons?', '✅ - Sim\n ❎ - Não')
  //----------------------------------------------------------------------------
  
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
  // CARDS
    let reciboacc = new Discord.RichEmbed()
        .setAuthor("Loja do S1mple")
        .setColor(0xff0000)
        .addField(`O utilizador @${author} comprou **💳 Auto Claim Card**!`, 'Use `s!shop` para comprar items!')
		    .setTimestamp(message.createdAt)
    let recibodcc = new Discord.RichEmbed()
        .setAuthor("Loja do S1mple")
        .setColor(0xff0000)
        .addField(`O utilizador @${author} comprou **💳 Discount Card**!`, 'Use `s!shop` para comprar items!')
		    .setTimestamp(message.createdAt)
    let recibontc = new Discord.RichEmbed()
        .setAuthor("Loja do S1mple")
        .setColor(0xff0000)
        .addField(`O utilizador @${author} comprou **💳 Nitro Card**!`, 'Use `s!shop` para comprar items!')
		    .setTimestamp(message.createdAt)
    let recibosmc = new Discord.RichEmbed()
        .setAuthor("Loja do S1mple")
        .setColor(0xff0000)
        .addField(`O utilizador @${author} comprou **💳 S1mple Card**!`, 'Use `s!shop` para comprar items!')
		    .setTimestamp(message.createdAt)
  //------------------------------------------------------------------------------------------------- 
  // CARGOS
    let recibosnc = new Discord.RichEmbed()
        .setAuthor("Loja do S1mple")
        .setColor(0xff0000)
        .addField(`O utilizador @${author} comprou **🌠 StarLight**!`, 'Use `s!shop` para comprar items!')
		    .setTimestamp(message.createdAt)
    let recibocon = new Discord.RichEmbed()
        .setAuthor("Loja do S1mple")
        .setColor(0xff0000)
        .addField(`O utilizador @${author} comprou **❄️ Senpai**!`, 'Use `s!shop` para comprar items!')
		    .setTimestamp(message.createdAt)
    let recibosup = new Discord.RichEmbed()
        .setAuthor("Loja do S1mple")
        .setColor(0xff0000)
        .addField(`O utilizador @${author} comprou **🌹 Supreme**!`, 'Use `s!shop` para comprar items!')
		    .setTimestamp(message.createdAt)
    let recibodiv = new Discord.RichEmbed()
        .setAuthor("Loja do S1mple")
        .setColor(0xff0000)
        .addField(`O utilizador @${author} comprou **🌻 Divine**!`, 'Use `s!shop` para comprar items!')
		    .setTimestamp(message.createdAt)
    let reciboans = new Discord.RichEmbed()
        .setAuthor("Loja do S1mple")
        .setColor(0xff0000)
        .addField(`O utilizador @${author} comprou **🌺 Ancion**!`, 'Use `s!shop` para comprar items!')
		    .setTimestamp(message.createdAt)
    let reciboleg = new Discord.RichEmbed()
        .setAuthor("Loja do S1mple")
        .setColor(0xff0000)
        .addField(`O utilizador @${author} comprou **🥀 Legend**!`, 'Use `s!shop` para comprar items!')
		    .setTimestamp(message.createdAt)
    let recibogla = new Discord.RichEmbed()
        .setAuthor("Loja do S1mple")
        .setColor(0xff0000)
        .addField(`O utilizador @${author} comprou **🌷 Gladiator**!`, 'Use `s!shop` para comprar items!')
		    .setTimestamp(message.createdAt)
    let reciboher = new Discord.RichEmbed()
        .setAuthor("Loja do S1mple")
        .setColor(0xff0000)
        .addField(`O utilizador @${author} comprou **🍁 Herald**!`, 'Use `s!shop` para comprar items!')
		    .setTimestamp(message.createdAt)
  //-------------------------------------------------------------------------------------------------
    
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
        .addField("💳 - 💳 Cards", "Vê os Cards disponíveis")
        .addField("👑 - 👑 Cargos Especiais", "Vê os Cargos Especiais disponíveis")
        .addField("🎨 - 🎨 color", "Preço: 2500 Moons")
        .addField("🆙 - 🆙 Boost XP (3x) - 10 horas", "Preço: 10000 Moons")
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
      sentEmbed.delete()
      shopsubcardfunc()
		} else {
      if (reaction.emoji.name === '❌') {
              sentEmbed.delete()     
    } else {
      if (reaction.emoji.name === '👑') {
        sentEmbed.delete()
        shopsubrolefunc()
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
  
  //------------------------------------------------- Sub Menu Functions -------------------------------------------------------------------------------
async function shopsubcardfunc() {
  console.log("1")
  let mainshopmsg = new Discord.RichEmbed()
        .setAuthor(`Loja do S1mple`)
        .setColor(0xff0000)
        .addField("Reage a uma das reacções para comprar esse item.", "--------------------")
        .addField("1⃣ - 💳 Auto Claim Card", "Preço: 25000 Moons")
        .addField("2⃣ - 💳 Discount Card", "Preço: 20000 Moons")
        .addField("3⃣ - 💳 Nitro Card", "Preço: 30000 Moons")
        .addField("4⃣ - 💳 S1mple Card", "Preço: 50000 Moons")
        //.addField("🗒️ - Info", "--------------------")
        //.addField("📊 - Leveling", "--------------------")
 let msg = await message.channel.send(mainshopmsg).then(sentEmbed => {
  
sentEmbed.react('1⃣').then(() => sentEmbed.react('2⃣')).then(() => sentEmbed.react('3⃣')).then(() => console.log("2")).then(() => sentEmbed.react('4⃣')).then(() => sentEmbed.react('❌'));//.then(() => sentEmbed.react('📋')).then(() => sentEmbed.react('📊'))
 message.delete({timeout: 1000});

  console.log("3")    

const filter = (reaction, user) => {
	return ['1⃣', '2⃣', '3⃣', '4⃣', '❌'].includes(reaction.emoji.name) && user.id === message.author.id;//, '🃏', '📟', '📁', '📋', '📊'
};

sentEmbed.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
	.then(collected => {
		const reaction = collected.first();

		if (reaction.emoji.name === '1⃣') {
      //embedchoice="embedeco"
      //console.log(embedchoice)
      sentEmbed.delete()
      //message.channel.send(embedeco)
      embedaccsend()
			//message.reply(embedeco);
		} else {
      if (reaction.emoji.name === '❌') {
              sentEmbed.delete()
              shopfunc()
      
    } else {
      if (reaction.emoji.name === '2⃣') {
        sentEmbed.delete()
        embeddccsend()
		  } else {
        if (reaction.emoji.name === '3⃣') {
          sentEmbed.delete()
          embedntcsend()
        } else {
          if (reaction.emoji.name === '4⃣') {
            sentEmbed.delete()
            embedsmcsend()
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
  
  async function shopsubrolefunc() {
  console.log("1")
  let mainshopmsg = new Discord.RichEmbed()
        .setAuthor(`Loja do S1mple`)
        .setColor(0xff0000)
        .addField("Reage a uma das reacções para comprar esse item.", "--------------------")
        .addField("1⃣ - 🌠 StarLight", "Preço: 1000000 Moons")
        .addField("2⃣ - ❄️ Senpai", "Preço: 50000 Moons")
        .addField("3⃣ - 🌹 Supreme", "Preço: 40000 Moons")
        .addField("4⃣ - 🌻 Divine", "Preço: 35000 Moons")
        .addField("5⃣ - 🌺 Ancion", "Preço: 30000 Moons")
        .addField("6⃣ - 🥀 Legend", "Preço: 25000 Moons")
        .addField("7⃣ - 🌷 Gladiator", "Preço: 15000 Moons")
        .addField("8⃣ - 🍁 Herald", "Preço: 10000 Moons")
        //.addField("🗒️ - Info", "--------------------")
        //.addField("📊 - Leveling", "--------------------")
 let msg = await message.channel.send(mainshopmsg).then(sentEmbed => {
  
sentEmbed.react('1⃣').then(() => sentEmbed.react('2⃣')).then(() => sentEmbed.react('3⃣')).then(() => console.log("2")).then(() => sentEmbed.react('4⃣')).then(() => sentEmbed.react('5⃣')).then(() => sentEmbed.react('6⃣')).then(() => sentEmbed.react('7⃣')).then(() => sentEmbed.react('8⃣')).then(() => sentEmbed.react('❌'));//.then(() => sentEmbed.react('📋')).then(() => sentEmbed.react('📊'))
 message.delete({timeout: 1000});

  console.log("3")    

const filter = (reaction, user) => {
	return ['1⃣', '2⃣', '3⃣', '4⃣', '5⃣', '6⃣', '7⃣', '8⃣', '❌'].includes(reaction.emoji.name) && user.id === message.author.id;//, '🃏', '📟', '📁', '📋', '📊'
};

sentEmbed.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
	.then(collected => {
		const reaction = collected.first();

		if (reaction.emoji.name === '1⃣') {
      //embedchoice="embedeco"
      //console.log(embedchoice)
      sentEmbed.delete()
      //message.channel.send(embedeco)
      embedsncsend()
			//message.reply(embedeco);
		} else {
      if (reaction.emoji.name === '❌') {
              sentEmbed.delete()
              shopfunc()
      
    } else {
      if (reaction.emoji.name === '2⃣') {
        sentEmbed.delete()
        embedconsend()
		  } else {
        if (reaction.emoji.name === '3⃣') {
          sentEmbed.delete()
          embedsupsend()
        } else {
          if (reaction.emoji.name === '4⃣') {
            sentEmbed.delete()
            embeddivsend()
          } else {
            if (reaction.emoji.name === '5⃣') {
            sentEmbed.delete()
            embedanssend()
            } else {
              if (reaction.emoji.name === '6⃣') {
            sentEmbed.delete()
            embedlegsend()
              } else {
                if (reaction.emoji.name === '7⃣') {
            sentEmbed.delete()
            embedglasend()
                } else {
                  if (reaction.emoji.name === '8⃣') {
            sentEmbed.delete()
            embedhersend()
                    }
                  }
                }
              }
            }
          }
        }
      }
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
  //------------------------------------------------- Each Item functions -------------------------------------------------------------------------------
  
  //-------------------------------- CARDS ----------------------------------------------------------------
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
      if (moons < 25000) {
        message.reply("<:errado:580518832939204628> **|** Você não tem moons suficientes.")
      } else {
        let acc = message.guild.roles.find(r => r.name === "💳 Auto Claim Card");
        if(message.member.roles.exists('name', acc)) { message.reply("<:errado:580518832939204628> **|** Você já tem esse item!")
        } else {
        db.subtract(`moons_${message.author.id}`, 25000).then(message.member.addRole(acc).catch(console.error)).then(s1mplestorechannel.send(reciboacc)).then(message.reply('<a:AcceptGif:569565878551838750> Compra efetuada com sucesso!'))}
      }
    } else {
      if (reaction.emoji.name === '❎') { //não
        sentEmbed2.delete()
      shopsubcardfunc()
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
  
  async function embeddccsend() {
    console.log(embedchoice)
 let msg = await message.channel.send(embeddcc).then(sentEmbed2 => {
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
      if (moons < 20000) {
        message.reply("<:errado:580518832939204628> **|** Você não tem moons suficientes.")
      } else {
        let dcc = message.guild.roles.find(r => r.name === "💳 Discount Card");
        if(message.member.roles.has(dcc)) { message.reply("<:errado:580518832939204628> **|** Você já tem esse item!")
        } else {
        db.subtract(`moons_${message.author.id}`, 20000).then(message.member.addRole(dcc).catch(console.error)).then(s1mplestorechannel.send(recibodcc)).then(message.reply('<a:AcceptGif:569565878551838750> Compra efetuada com sucesso!'))}
      }
    } else {
      if (reaction.emoji.name === '❎') { //não
        sentEmbed2.delete()
      shopsubcardfunc()
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
  
  async function embedntcsend() {
    console.log(embedchoice)
 let msg = await message.channel.send(embedntc).then(sentEmbed2 => {
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
      if (moons < 30000) {
        message.reply("<:errado:580518832939204628> **|** Você não tem moons suficientes.")
      } else {
        let ntc = message.guild.roles.find(r => r.name === "💳 Nitro Card");
        if(message.member.roles.has(ntc)) { message.reply("<:errado:580518832939204628> **|** Você já tem esse item!")
        } else {
        db.subtract(`moons_${message.author.id}`, 30000).then(message.member.addRole(ntc).catch(console.error)).then(s1mplestorechannel.send(recibontc)).then(message.reply('<a:AcceptGif:569565878551838750> Compra efetuada com sucesso!'))}
      }
    } else {
      if (reaction.emoji.name === '❎') { //não
        sentEmbed2.delete()
      shopsubcardfunc()
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
  
  async function embedsmcsend() {
    console.log(embedchoice)
 let msg = await message.channel.send(embedsmc).then(sentEmbed2 => {
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
      if (moons < 50000) {
        message.reply("<:errado:580518832939204628> **|** Você não tem moons suficientes.")
      } else {
        let spc = message.guild.roles.find(r => r.name === "💳 S1mple Card");
        if(message.member.roles.has(spc)) { message.reply("<:errado:580518832939204628> **|** Você já tem esse item!")
        } else {
        db.subtract(`moons_${message.author.id}`, 25000).then(message.member.addRole(spc).catch(console.error)).then(s1mplestorechannel.send(recibosmc)).then(message.reply('<a:AcceptGif:569565878551838750> Compra efetuada com sucesso!'))}
      }
    } else {
      if (reaction.emoji.name === '❎') { //não
        sentEmbed2.delete()
      shopsubcardfunc()
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
  //-----------------------------END CARD FUNCTIONS--------------------------------------------------------
  //-------------------------------- CARGOS ----------------------------------------------------------------
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
      if (moons < 1000000) {
        message.reply("<:errado:580518832939204628> **|** Você não tem moons suficientes.")
      } else {
        let snc = message.guild.roles.find(r => r.name === "🌠 StarLight");
        if(message.member.roles.has(snc)) return message.reply("<:errado:580518832939204628> **|** Você já tem esse item!")
        else {
        db.subtract(`moons_${message.author.id}`, 1000000).then(message.member.addRole(snc).catch(console.error)).then(s1mplestorechannel.send(recibosnc)).then(message.reply('<a:AcceptGif:569565878551838750> Compra efetuada com sucesso!'))}

      }
    } else {
      if (reaction.emoji.name === '❎') { //não
        sentEmbed2.delete()
      shopsubrolefunc()
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
  async function embedconsend() {
    console.log(embedchoice)
 let msg = await message.channel.send(embedcon).then(sentEmbed2 => {
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
      if (moons < 50000) {
        message.reply("<:errado:580518832939204628> **|** Você não tem moons suficientes.")
      } else {
        let con = message.guild.roles.find(r => r.name === "❄️ Senpai");
        if(message.member.roles.has(con)) return message.reply("<:errado:580518832939204628> **|** Você já tem esse item!")
        else {
        db.subtract(`moons_${message.author.id}`, 50000).then(message.member.addRole(con).catch(console.error)).then(s1mplestorechannel.send(recibosnc)).then(message.reply('<a:AcceptGif:569565878551838750> Compra efetuada com sucesso!'))}

      }
    } else {
      if (reaction.emoji.name === '❎') { //não
        sentEmbed2.delete()
      shopsubrolefunc()
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
  async function embedsupsend() {
    console.log(embedchoice)
 let msg = await message.channel.send(embedsup).then(sentEmbed2 => {
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
      if (moons < 40000) {
        message.reply("<:errado:580518832939204628> **|** Você não tem moons suficientes.")
      } else {
        let sup = message.guild.roles.find(r => r.name === "🌹 Supreme");
        if(message.member.roles.has(sup)) return message.reply("<:errado:580518832939204628> **|** Você já tem esse item!")
        else {
        db.subtract(`moons_${message.author.id}`, 40000).then(message.member.addRole(sup).catch(console.error)).then(s1mplestorechannel.send(recibosnc)).then(message.reply('<a:AcceptGif:569565878551838750> Compra efetuada com sucesso!'))}

      }
    } else {
      if (reaction.emoji.name === '❎') { //não
        sentEmbed2.delete()
      shopsubrolefunc()
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
  async function embeddivsend() {
    console.log(embedchoice)
 let msg = await message.channel.send(embeddiv).then(sentEmbed2 => {
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
      if (moons < 35000) {
        message.reply("<:errado:580518832939204628> **|** Você não tem moons suficientes.")
      } else {
        let div = message.guild.roles.find(r => r.name === "🌻 Divine");
        if(message.member.roles.has(div)) return message.reply("<:errado:580518832939204628> **|** Você já tem esse item!")
        else {
        db.subtract(`moons_${message.author.id}`, 35000).then(message.member.addRole(div).catch(console.error)).then(s1mplestorechannel.send(recibosnc)).then(message.reply('<a:AcceptGif:569565878551838750> Compra efetuada com sucesso!'))}

      }
    } else {
      if (reaction.emoji.name === '❎') { //não
        sentEmbed2.delete()
      shopsubrolefunc()
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
  async function embedanssend() {
    console.log(embedchoice)
 let msg = await message.channel.send(embedans).then(sentEmbed2 => {
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
      if (moons < 30000) {
        message.reply("<:errado:580518832939204628> **|** Você não tem moons suficientes.")
      } else {
        let ans = message.guild.roles.find(r => r.name === "🌺 Ancion");
        if(message.member.roles.has(ans)) return message.reply("<:errado:580518832939204628> **|** Você já tem esse item!")
        else {
        db.subtract(`moons_${message.author.id}`, 30000).then(message.member.addRole(ans).catch(console.error)).then(s1mplestorechannel.send(recibosnc)).then(message.reply('<a:AcceptGif:569565878551838750> Compra efetuada com sucesso!'))}

      }
    } else {
      if (reaction.emoji.name === '❎') { //não
        sentEmbed2.delete()
      shopsubrolefunc()
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
  async function embedglasend() {
    console.log(embedchoice)
 let msg = await message.channel.send(embedgla).then(sentEmbed2 => {
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
      if (moons < 15000) {
        message.reply("<:errado:580518832939204628> **|** Você não tem moons suficientes.")
      } else {
        let gla = message.guild.roles.find(r => r.name === "🌷 Gladiator");
        if(message.member.roles.has(gla)) return message.reply("<:errado:580518832939204628> **|** Você já tem esse item!")
        else {
        db.subtract(`moons_${message.author.id}`, 15000).then(message.member.addRole(gla).catch(console.error)).then(s1mplestorechannel.send(recibosnc)).then(message.reply('<a:AcceptGif:569565878551838750> Compra efetuada com sucesso!'))}

      }
    } else {
      if (reaction.emoji.name === '❎') { //não
        sentEmbed2.delete()
      shopsubrolefunc()
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
  async function embedhersend() {
    console.log(embedchoice)
 let msg = await message.channel.send(embedher).then(sentEmbed2 => {
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
      if (moons < 10000) {
        message.reply("<:errado:580518832939204628> **|** Você não tem moons suficientes.")
      } else {
        let her = message.guild.roles.find(r => r.name === "🍁 Herald");
        if(message.member.roles.has(her)) return message.reply("<:errado:580518832939204628> **|** Você já tem esse item!")
        else {
        db.subtract(`moons_${message.author.id}`, 10000).then(message.member.addRole(her).catch(console.error)).then(s1mplestorechannel.send(recibosnc)).then(message.reply('<a:AcceptGif:569565878551838750> Compra efetuada com sucesso!'))}

      }
    } else {
      if (reaction.emoji.name === '❎') { //não
        sentEmbed2.delete()
      shopsubrolefunc()
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
  async function embedlegsend() {
    console.log(embedchoice)
 let msg = await message.channel.send(embedleg).then(sentEmbed2 => {
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
      if (moons < 25000) {
        message.reply("<:errado:580518832939204628> **|** Você não tem moons suficientes.")
      } else {
        let leg = message.guild.roles.find(r => r.name === "🥀 Legend");
        if(message.member.roles.has(leg)) return message.reply("<:errado:580518832939204628> **|** Você já tem esse item!")
        else {
        db.subtract(`moons_${message.author.id}`, 25000).then(message.member.addRole(leg).catch(console.error)).then(s1mplestorechannel.send(recibosnc)).then(message.reply('<a:AcceptGif:569565878551838750> Compra efetuada com sucesso!'))}

      }
    } else {
      if (reaction.emoji.name === '❎') { //não
        sentEmbed2.delete()
      shopsubrolefunc()
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
  //-----------------------------END CARGO FUNCTIONS--------------------------------------------------------
  
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
      if (moons < 10000) {
        message.reply("<:errado:580518832939204628> **|** Você não tem moons suficientes.")
      } else {
        let bx3 = message.guild.roles.find(r => r.name === "🆙 Boost XP (3x)");
        if(message.member.roles.has(bx3)) return message.reply("<:errado:580518832939204628> **|** Você já tem esse item!")
        else {
        db.subtract(`moons_${message.author.id}`, 10000).then(message.member.addRole(bx3).catch(console.error)).then(s1mplestorechannel.send(recibobx3)).then(message.reply('<a:AcceptGif:569565878551838750> Compra efetuada com sucesso!'))}
        db.set(`bx3duration_${message.author.id}`, Date.now());
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
  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------
  
  shopfunc()
}


module.exports.command = {
    name: 'shop',
    aliases: ['mercado', 'loja'],
    description: 'Vê a loja e compra itens!',
    category: "Economia",
    usage: 'shop',
    enabled: true
}