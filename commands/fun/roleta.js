const db = require("quick.db")
const ms = require("parse-ms")
module.exports.run = async (bot, message, args) => {
  let cooldown = 600000
  let lastroleta = await db.fetch(`lastroleta_${message.author.id}`)
    let timeObj = ms(cooldown - (Date.now() - lastroleta));
    if(lastroleta !== null && cooldown - (Date.now() - lastroleta) > 0) { 
      message.channel.send(`😴 EH LÁ!. O teclado até pegou fogo!:fire: Tem que esperar **${timeObj.hours}h ${timeObj.minutes}m ${timeObj.seconds}s** `)
     } else {
    const randomNumber = Math.floor(Math.random() * (6 - 1) + 1);
    // console.log(randomNumber);
    if(randomNumber==2){
        message.reply("Morreu 💀");
      db.subtract(`moons_${message.author.id}`, 100)
        message.channel.send("<:Ferc:559356192774684694> Foram **retiradas** 100 moons pela tua ressureição.")
      db.set(`lastroleta_${message.author.id}`, Date.now()); 
    }else{
        message.reply("Sobreviveu 😃");
      db.add(`moons_${message.author.id}`, 100)
        message.reply("<:Ferc:559356192774684694> Parabéns. **ganhou** 100 moons pela tua sorte.")
      db.set(`lastroleta_${message.author.id}`, Date.now()); 
    }
  }
}



module.exports.command = {
    name: 'roleta',
    description: 'Tente a sua sorte,e ganha (ou perde) moons!',
    category: "fun",
    usage: ['s!roleta'],
    enabled: true
}