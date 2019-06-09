const Discord = require("discord.js");
const db = require("quick.db")
exports.run = async (client, message, args) => {
if(!message.member.roles.some(r => r.name === "Manager") || !message.member.roles.some(r => r.name === "Fundador") || !message.member.roles.some(r => r.name === "Administrador") | !message.member.roles.some(r => r.name === "S1mple Staff")) {
   let acc = message.guild.roles.find(r => r.name === "💳 Auto Claim Card");
  message.member.addRole(acc).catch(console.error);
  } else {
  message.reply("-_-")}
};

module.exports.command = {
    name: 'testcommand179324865'
} 