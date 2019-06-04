const Discord = require("discord.js");
const db = require('quick.db');
var sortBy = require('array-sort-by');
var currencyFormatter = require('currency-formatter'); //For currency
var fs = require('fs'); //FileSystem

exports.run = async (bot, message, args) => {
const resp = await db.startsWith('moons', { sort: '.data'});
resp.length = 10;
let finalOutput = ' ';
for (var i in resp) {
    var us = bot.users.get(resp[i].ID.split("_")[1])
    //moons_${us.id}
    let Moonsdisplay;
    let TotalMoons;
    let moons = await db.fetch(`moons_${us.id}`)
    if (moons === null) db.set(`moons_${us.id}`, 0);
    else TotalMoons = moons;
    if (TotalMoons === undefined) TotalMoons = 0;
    let amount = parseInt(args.join(' '));
    
  if (TotalMoons > 1000000) { Moonsdisplay = 'Infinitas' } else {Moonsdisplay = TotalMoons}
    var usermoons = Moonsdisplay;
    finalOutput += `**${bot.users.get(resp[i].ID.split("_")[1]).tag}**` + ' ' + usermoons + ` moons \n`; // ~-~ Moons: ${resp[i].data} 
    let msgtosend = await sortBy(finalOutput, item => 'desc:' + item)
  }
  message.channel.send({
      embed: {
        "description": finalOutput,
        "title": 'Top de Moons',
        "color": 16777215
      }
  })
}
module.exports.command = {
    name: 'topmoons',
    aliases: ['leaderboard'],
    description: 'Veja os mais ricos do servidor!',
    category: "Economia",
    usage: 's!topmoons',
    enabled: false
}