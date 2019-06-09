const fishes = require('./assets/json/fishy');
const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
function randomRange (min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
  let validsell = ['sell', 'vender'];
  let validinv = ['inv', 'inventário', 'inventario', 'inventory'];
  if (!args) {
const fishID = Math.floor(Math.random() * 10) + 1;
		let rarity;
		if (fishID < 5) rarity = 'lixo';
		else if (fishID < 8) rarity = 'comum';
		else if (fishID < 10) rarity = 'incomum';
		else rarity = 'raro';
		const fish = fishes[rarity];
		const worth = randomRange(fish.min, fish.max);
		return message.reply(`Apanhaste um ${fish.symbol}. Aposto que o consegues vender por ${worth} moons.`)
    if (rarity == 'lixo') {
      db.push(`fish_${message.author.id}`, 'lixo')
    } else {
      if (rarity == 'comum') {
        db.push(`fish_${message.author.id}`, 'comum')
      } else {
        if (rarity == 'incomum') {
          db.push(`fish_${message.author.id}`, 'incomum') 
        } else {
            if (rarity == 'raro') {
              db.push(`fish_${message.author.id}`, 'raro') }
        }
      }
    }
  } else {
    if (args[0] == validsell) {
      if (!args[1]) {
        message.reply(`Por favor utiliza *s!fish sell|vender lixo|comum|incomum|raro*`)
      } else {
        if (args[2] == 'lixo') {
          let rarity = 'lixo'
          let fish = fishes[rarity]
          let worth = randomRange(fish.min, fish.max);
          let fishininv = await db.fetch(`fish_${message.author.id}`, { target: 'lixo' }).then(i => {
    console.log(i);
            })
          db.subtract(fishininv, 1)
          db.add(`moons_${message.author.id}`, worth)
        } else {
            if (args[2] == 'comum') {
              let rarity = 'comum'
              let fish = fishes[rarity]
              let worth = randomRange(fish.min, fish.max);
              let fishininv = await db.fetch(`fish_${message.author.id}`, { target: 'comum' }).then(i => {
        console.log(i);
                })
              db.subtract(fishininv, 1)
              db.add(`moons_${message.author.id}`, worth)
          } else {
              if (args[2] == 'incomum') {
                let rarity = 'incomum'
                let fish = fishes[rarity]
                let worth = randomRange(fish.min, fish.max);
                let fishininv = await db.fetch(`fish_${message.author.id}`, { target: 'incomum' }).then(i => {
          console.log(i);
                  })
                db.subtract(fishininv, 1)
                db.add(`moons_${message.author.id}`, worth)
            } else {
                if (args[2] == 'raro') {
                  let rarity = 'raro'
                  let fish = fishes[rarity]
                  let worth = randomRange(fish.min, fish.max);
                  let fishininv = await db.fetch(`fish_${message.author.id}`, { target: 'raro' }).then(i => {
            console.log(i);
                    })
                  db.subtract(fishininv, 1)
                  db.add(`moons_${message.author.id}`, worth)
              }
            }
          }
        }
      }
    } else {
      if (args[0] == validinv) {
        let fishlix =  await db.fetch(`fish_lixo_${message.author.id}`)
        let fishlixref = fishes['lixo'];
        
        let fishcom =  await db.fetch(`fish_comum_${message.author.id}`)
        let fishcomref = fishes['comum'];
        
        let fishinc =  await db.fetch(`fish_incomum_${message.author.id}`)
        let fishincref = fishes['incomum'];
        
        let fishrar =  await db.fetch(`fish_raro_${message.author.id}`)
        let fishrarref = fishes['raro'];
        
        const embed = new Discord.RichEmbed()
        .setTitle(`Inventário de peixes de ${message.author.id}`)
        .setDescription(`Peixes:\n ${fishlixref.symbol} Lixo: ${fishlix}\n ${fishcomref.symbol} Comum: ${fishcom}\n ${fishlixref.symbol} Lixo: ${fishlix} `)
      }
    }
  }
}

module.exports.command = {
    name: 'fish',
    description: 'Pesca e vende os teus peixes!',
    category: "fun",
    usage: ['fish sell|inv'],
    enabled: true
}