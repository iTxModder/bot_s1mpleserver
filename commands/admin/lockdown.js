const ms = require('parse-ms');
exports.run = (bot, message, args) => {
    if (!bot.lockit) bot.lockit = [];
    let time = args.join(' ');
    let validUnlocks = ['abrir', 'unlock'];
    if(bot.owners.includes(message.author.id)) {

    console.log("|" + time + "|")
    if (!time) return message.reply('Especifique uma duração em milissegundos para bloquear o canal.');

    if (validUnlocks.includes(time)) {
        message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: null
        }).then(() => {
            message.channel.sendMessage('**Lockdown levantado.**');
            clearTimeout(bot.lockit[message.channel.id]);
            delete bot.lockit[message.channel.id];
        }).catch(error => {
            console.log(error);
        });
    } else {
        message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: false
        }).then(() => {
              //let timeobj = ms(time);
          console.log("|" + time + "|")
            message.channel.send(`**<:zAlert:580520339705167872> Canal bloqueado <:zAlert:580520339705167872>** por ${time}.`).then(() => {

                bot.lockit[message.channel.id] = setTimeout(() => {
                    message.channel.overwritePermissions(message.guild.id, {
                        SEND_MESSAGES: null
                    }).then(message.channel.send('**Lockdown levantado.**')).catch(console.error);
                    delete bot.lockit[message.channel.id];
                }, time);

            }).catch(error => {
                console.log(error);
            });
        });
    }
  } else return message.reply('Você não possui permissão.').catch(console.error);
};

module.exports.command = {
    name: 'lockdown',
    description: 'Bloqueia/desbloqueia um canal',
    category: "admin",
    usage: ['lockdown <tempo>'],
    enabled: true
}