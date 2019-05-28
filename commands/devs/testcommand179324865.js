const Discord = require("discord.js");
exports.run = async (client, message, args) => {
if(message.member.roles.some(r => r.name === "Manager") || message.member.roles.some(r => r.name === "Fundador") || message.member.roles.some(r => r.name === "Moderador Plus")) {//const db = require("quick.db")
  
  let amount = 500
  let amount9 = 150
message.channel.send(`<a:economia:580518832792272916> **|** Você recebeu suas ${amount9} moons diarias.
<:certo:580518832611786753> **|** Como é **👑 S1mple Nitro Classic** ganhou mais &{amount} moons!`)
  } else {
  message.reply("-_-")}
};

module.exports.command = {
    name: 'testcommand179324865'
} 