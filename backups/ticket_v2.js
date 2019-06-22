const Discord = require('discord.js');
const db = require("quick.db");

exports.run = async(bot, message, args) => {
  
  const serverStats = {
    guildID: '552275750376570880',
    ticketCategoryID: '588307940851843092'

}
  console.log('1')
if (message.author.bot) return;
    if (message.channel.type == 'text') {
        let active = await db.fetch(`support_${message.author.id}`);
        let guild = bot.guilds.get(serverStats.guildID);
        let channel, found = true;
      console.log('1_2')
        try {
            if (active) bot.channels.get(active.channelID).guild;
        } catch (e) {
            found = false;
        }
      console.log('2')
        if (!active || !found) {
          console.log('3')
            active = {};
            channel = await guild.createChannel(`${message.author.username}-${message.author.discriminator}`)
            channel.setParent(serverStats.ticketCategoryID)
            channel.setTopic(`/close para fechar o ticket | Support para ${message.author.tag} | ID: ${message.author.id}`)

            channel.overwritePermissions("552291562927947786", { //Role id (when someone join my server get this role with id <<, i dont know how to change it for @everyone. This will prevent users to see the channel, only admins will see!
                VIEW_CHANNEL: false,
                SEND_MESSAGES: false,
                ADD_REACTIONS: false
            });



            let author = message.author;
            const newChannel = new Discord.RichEmbed()
                .setColor('RANDOM')
                .setAuthor(author.tag, author.avatarURL)
                .setFooter('Ticket criado!')
                .addField('User', author)
                .addField('ID', author.id)
            await channel.send(newChannel);
            const newTicket = new Discord.RichEmbed()
                .setColor('RANDOM')
                .setAuthor(`Olá, ${author.username}`, author.avatarURL)
                .setFooter('Ticket criado!')
            await author.send(newTicket);
            active.channelID = channel.id;
            active.targetID = author.id;
        }
      console.log('4')
        channel = bot.channels.get(active.channelID);
        const dm = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setAuthor(`Obrigado, ${message.author.username}`, message.author.avatarURL)
            .setFooter(`A tua mensagem foi enviada - A staff vai te contactar em breve.`)
        await message.author.send(dm);
        if (message.content.startsWith(bot.prefix + 'close')) return;
        const embed5 = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setAuthor(message.author.tag, message.author.avatarURL)
            .setDescription(message.content)
            .setFooter(`Ticket Recebido - ${message.author.tag}`)
        await channel.send(embed5);
        db.set(`support_${message.author.id}`, active);
        db.set(`supportChannel_${channel.id}`, message.author.id);
        return;
    }
    let support = await db.fetch(`supportChannel_${message.channel.id}`);
    if (support) {
        support = await db.fetch(`support_${support}`);
        let supportUser = bot.users.get(support.targetID);
        if (!supportUser) return message.channel.delete();
        if (args[0] === 'close') {
            const complete = new Discord.RichEmbed()
                .setColor('RANDOM')
                .setAuthor(`Hey, ${supportUser.tag}`, supportUser.avatarURL)
                .setFooter('Ticket fechado -- Nebuloso')
                .setDescription('*O teu ticket foi marcado como fechado. Se o quiseres reabrir, ou criar um novo, por favor envia uma mensagem para o bot.*')
            supportUser.send(complete);
            message.channel.delete();
            db.delete(`support_${support.targetID}`);
            let inEmbed = new Discord.RichEmbed()
                .setTitle('Ticket fechado!')
                .addField('User de Suporte', `${supportUser.tag}`)
                .addField('Closer', message.author.tag)
                .setColor('RANDOM')
            const staffChannel = bot.channels.get('575890965059993600'); //Create a log channel and put id here
            staffChannel.send(inEmbed);
        }
        const embed4 = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setAuthor(message.author.tag, message.author.avatarURL)
            .setFooter(`Mensagem Recebida - Nebulous`)
            .setDescription(message.content)
        bot.users.get(support.targetID)
            .send(embed4);
        message.delete({
            timeout: 10000
        });
        embed4.setFooter(`Mensagem Enviada -- ${supportUser.tag}`)
            .setDescription(message.content);
        return message.channel.send(embed4);
    }
  };

module.exports.command = {
    name: 'ticket',
    description: 'Cria um ticket para pedir ajuda!',
    usage: 'ticket',
    category: 'sistema',
    enabled: true
}