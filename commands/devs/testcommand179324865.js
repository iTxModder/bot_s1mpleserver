const Discord = require("discord.js");
exports.run = async (client, message, args) => {
if(!message.member.roles.some(r => r.name === "Manager") || !message.member.roles.some(r => r.name === "Fundador") || !message.member.roles.some(r => r.name === "Administrador") | !message.member.roles.some(r => r.name === "S1mple Staff")) {
   message.channel.send('a')
  } else {
  message.reply("-_-")}
};

module.exports.command = {
    name: 'testcommand179324865'
} 