const Discord = require("discord.js");
const db = require("quick.db")
exports.run = async (bot, message, args) => {
if(!message.member.roles.some(r => r.name === "Manager") || !message.member.roles.some(r => r.name === "Fundador") || !message.member.roles.some(r => r.name === "Administrador") | !message.member.roles.some(r => r.name === "S1mple Staff")) {
  if(message.member.roles.some(r=>["🏅       Personas", "🏅       FSociety", "🥇       Central da Goiaba", "🥈       Uchiha", "🥉       Gold Thieves"].includes(r.name)) ) {
 if(message.member.roles.some(r=>["🏅       Personas"].includes(r.name)) ) {
   var club = message.guild.roles.find('name', "🏅       Personas")
 } else {
    if(message.member.roles.some(r=>["🏅       FSociety"].includes(r.name)) ) {
     var club = message.guild.roles.find('name', "🏅       FSociety")
 } else {
     if(message.member.roles.some(r=>["🥇       Central da Goiaba"].includes(r.name)) ) {
       var club = message.guild.roles.find('name', "🥇       Central da Goiaba")
     } else {
       if(message.member.roles.some(r=>["🥈       Uchiha"].includes(r.name)) ) {
         var club = message.guild.roles.find('name', "🥈       Uchiha")
     } else {
         if(message.member.roles.some(r=>["🥉       Gold Thieves"].includes(r.name)) ) {
           var club = message.guild.roles.find('name', "🥉       Gold Thieves")
           }
         }
       }
     }
   }
  }
  db.set(`meta_${club}`, null)
  } else {
  message.reply("-_-")}
};

module.exports.command = {
    name: 'testcommand179324865'
} 