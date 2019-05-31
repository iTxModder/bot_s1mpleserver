const Discord = require('discord.js');
const fs = require("fs")

module.exports.run = async (bot, message, args) => {
    if(message.member.roles.some(r => r.name === "Manager") || message.member.roles.some(r => r.name === "Fundador") || message.member.roles.some(r => r.name === "Administrador")) {

        var user_collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id);

        message.channel.send(`Coletor de mensagem criado, a tua próxima mensagem será enviada a todos os servers em que ${bot.user.username} está.`);

        user_collector.on('collect', c_msg => {
            var user_msgarray = user_collector.collected.array();

            if (user_msgarray[0].content === 'abort') {
                user_collector.stop('forced')
                return;
            }

            if (!user_msgarray[1]) {
                user_collector.collected.deleteAll();
                message.channel.send(`**Mensagem global gerada:**\n\n${user_msgarray[0]}\n\n` +
                    "**Queres mandar a mensagem global? (y/n)**")
            } else {
                switch (user_msgarray[1].content) {
                    case 'y':
                        {
                            var allguilds = bot.guilds.array();
                            var guildsucess = 0;
                            var channels_sent = 0;
                            var online_total = 0;
                            console.log('\n--------------------------------')
                            for (let i = 0; i < allguilds.length; i++) {

                                // Verify all the members in all guilds
                                var user_inserver = allguilds[i].members.array();
                                for (let j = 0; j < user_inserver.length; j++) {
                                    var is_online = user_inserver[j].presence.status;
                                    if (is_online !== 'offline') {
                                        online_total++;
                                    }
                                }

                                // Verify all the channels in all guilds
                                var allchannels_fromguilds = allguilds[i].channels.array();;
                                for (let j = 0; j < allchannels_fromguilds.length; j++) {

                                    // Filter only text channels
                                    if (allchannels_fromguilds[j].type === 'text') {
                                        allchannels_fromguilds[j].send(user_msgarray[0].content)
                                        channels_sent++;
                                    }

                                    console.log(`SERVER[${i}] SUCESSO: [${allguilds[i]}] - Mensagem enviada para [${allchannels_fromguilds.length}] canais de texto.`);
                                    console.log('--------------------------------')
                                  let log1 = (`SERVER[${i}] SUCESSO: [${allguilds[i]}] - Mensagem enviada para [${allchannels_fromguilds.length}] canais de texto.`)
                                    fs.writeFile('alerts.txt', `${log1}`)
                                }
                                guildsucess++;
                            }

                            message.channel.send(new Discord.RichEmbed()
                                .setTitle('Detalhes da Mensagem global')
                                .addField('Utilizadores online atingidos', online_total)
                                .addField('Servers atingidos', guildsucess)
                                .addField('Canais de texto atingidos', channels_sent)
                                .addField('Info', 'Para mais informação, vê os logs do bot.')
                                .setColor("#FFFF00"));

                            console.log(`Potenciais [${online_total}] membros atingidos em [${guildsucess}] server.`);

                            user_collector.stop('sucess');
                        }
                        break;
                    case 'n':
                        user_collector.stop('abort');
                        break;
                    default:
                        user_collector.stop('invalid');
                        break;
                }
            }
        })

        user_collector.on('end', (msg, reason) => {
            switch (reason) {
                case 'sucess':
                    return message.channel.send('Mensagem enviada com sucesso.');
                case 'abort':
                    return message.channel.send('Mensagem abortada.');
                case 'invalid':
                    return message.channel.send('Resposta inválida. Iniciando o ***ARMAGEDDON***');
                case 'forced':
                    return message.channel.send('A mensagem suicidou-se...');
                default:
                    return message.channel.send('Erro de lógica. Por favor elimine as antas irracionais deste local.');
            }
        })
    } else {
        return message.channel.send(new Discord.RichEmbed()
            .setDescription("**Você não tem permissão para usar este comando.**")
            .setColor('#FF0000'));
    }
}

module.exports.command = {
    name: 'globalmsg',
    permission: "Admin",
    category: 'admin',
    description: 'Lança uma mensagem global.',
    enabled: true
}