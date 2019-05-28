const Discord = require('discord.js');
const db = require('quick.db');
const ms = require("parse-ms")

exports.run = async (client, message, args) => {
    if (!message.guild.member(client.user).hasPermission("SEND_MESSAGES")) return message.author.send('<:errado:580518832939204628> **|** Não tenho permissão para enviar mensagens. Por favor tente outra vez quando tiver a permissão!');

    let slots = ["🍎", "🍌", "🍒", "🍓", "🍈"];
    let result1 = Math.floor((Math.random() * slots.length));
    let result2 = Math.floor((Math.random() * slots.length));
    let result3 = Math.floor((Math.random() * slots.length));
    let name = message.author.displayName;
    let aicon = message.author.displayAvatarURL;
    
    let TotalMoons;
    let moons = await db.fetch(`moons_${message.author.id}`)
    if (moons === null) db.set(`moons_${message.author.id}`, 0);
    else TotalMoons = moons;
    if (TotalMoons === undefined) TotalMoons = 1;
    let amount = parseInt(args.join(' '));
        
  
  let cooldown = 600000
  let lastslots = await db.fetch(`lastslots_${message.author.id}`)
    let timeObj = ms(cooldown - (Date.now() - lastslots));
    if(lastslots !== null && cooldown - (Date.now() - lastslots) > 0) { 
    message.channel.send(`😴 EH LÁ!. O teclado até pegou fogo!:fire: Tem que esperar **${timeObj.hours}h ${timeObj.minutes}m ${timeObj.seconds}s** `)
     } else {
    
  if (!args.length) {let amount = 100}
  if (amount < 100) return message.channel.send("<:errado:580518832939204628> **|** O valor mínimo de apostas é de **100** moons.")
  if (amount > TotalMoons) {message.channel.send("<:errado:580518832939204628> **|** Você não tem moons suficientes.")
                             } else {

    if (slots[result1] === slots[result2] && slots[result3]) {
    db.add(`moons_${message.author.id}`, (amount * 2)).then(i => {
        let wEmbed = new Discord.RichEmbed()
            .setFooter("Ganhou!!!!!", aicon)
            .setTitle(':slot_machine:Slots:slot_machine:')
            .addField('Result:', slots[result1] + slots[result2] + slots[result3], true)
            .setColor("#f4e842");
        message.channel.send(wEmbed);
      })
    } else {
    db.subtract(`moons_${message.author.id}`, (amount)).then(i => {
        let embed = new Discord.RichEmbed()
            .setFooter('Perdeu!', aicon)
            .setTitle(':slot_machine:Slots:slot_machine:')
            .addField('Result', slots[result1] + slots[result2] + slots[result3], true)
            .setColor("#f4e842");
        message.channel.send(embed);
          })
    }
                             }
       db.set(`lastslots_${message.author.id}`, Date.now()); 
     }
}

exports.command = {
    name: 'slots',
    description: 'Aposta na slotmachine do server e ganha moons!',
    category: "fun",
    usage: ['s!slots <quantia>'],
    enabled: true
}
