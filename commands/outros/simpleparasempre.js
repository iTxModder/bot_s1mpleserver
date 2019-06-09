const Discord = require('discord.js');
const db = require('quick.db');
//const ms = require("parse-ms");

module.exports.run = async (bot, message, args) => {
  const embed = new Discord.RichEmbed()
  .setAuthor("S1mple Server")
  .setDescription("Por favor mandem este convite para os seus amigos para o server poder continuar!\n Lembrem-se que quando chegarmos aos 1000 membros haverá um ***SUPER SORTEIO!!***\n Invite: https://discord.gg/mr8QA4B")
  message.channel.send(embed)
  }

module.exports.command = {
    name: 'S1mpleParaSempre',
    aliases: ["SimpleParaSempre"],
    description: 'Suprise!',
    usage: 'simpleparasempre',
    category: "outros",
    enabled: true
}