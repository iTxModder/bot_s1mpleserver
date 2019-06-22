const Discord = require('discord.js');

exports.run = async(bot, message, args) => {
    let msg = await message.channel.send(':loading: Gerando avatar...');
    let mentionedUser = message.mentions.users.first() || message.author;
    let avatar = 'https://discord.services/api/magik?url=' + mentionedUser.displayAvatarURL;
    let avatarEmbed = new Discord.RichEmbed()
        .setImage(avatar)
        .setColor('#a0e5ff')
        .setTitle('Magik')
        .setDescription('[Magik Link](' + avatar + ')');

    message.channel.send(avatarEmbed);
    msg.delete();
}


exports.command = {
    name: 'magik',
    permission: "Nenhuma",
    description: 'Magia do Houdini(tm)!',
    category: "fun",
    usage: ['magik <usuário>'],
    enabled: true
}