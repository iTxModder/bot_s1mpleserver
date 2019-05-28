const Discord = require("discord.js");

exports.run = (bot, message, args) => {
let role = message.mentions.roles.first() || message.guild.roles.get(args[0]) || message.guild.roles.find(role => role.name === args.join(' '));

    if (!role) role = message.member.highestRole;
        const roleinfo = new Discord.RichEmbed()
        .setColor(role.hexColor)
        .setTitle(`Role: ${role.name}`)
        .addField('Members', role.members.size, true)
        .addField('Cor', role.hexColor, true)
        .addField('Criada Em', role.createdAt.toDateString(), true)
        .addField('Editada', role.editable.toString(), true)
        .addField('Managed', role.managed.toString(), true)
        .addField('ID', role.id, true);
        message.channel.send(roleinfo) 
};


module.exports.command = {
    name: 'roleinfo',
    description: 'Mostra as informações de uma role',
    category: "sistema",
    usage: ['s!roleinfo <role>'],
    enabled: true
}