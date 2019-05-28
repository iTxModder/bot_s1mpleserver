const Discord = require("discord.js");
const db = require('quick.db');
var currencyFormatter = require('currency-formatter'); //For currency
var fs = require('fs'); //FileSystem
const serverid = '552275750376570880'

exports.run = async (client, message, args, ops) => {
  var moons = new db.table(`TOTAL_MOONS`);
  moons.startsWith(`moons_${message.author.id}`, {
    sort: '.data'
  }).then(resp => {
    resp.length = 15;

    let title = 'Top de moons';
    var finalLb = "";
    var i = 0;
    for (i in resp) {
      finalLb += `**${client.users.get(resp[i].ID.split('_')[1]).username}** - \`${resp[i].data}moons\`\n`;
    }

    message.channel.send({
      embed: {
        "description": finalLb,
        "title": title,
        "color": 16777215
      }
    })
  });
}
module.exports.command = {
    name: 'top',
    aliases: ['leaderboard'],
    description: 'Veja os mais ricos do servidor!',
    category: "Economia",
    usage: 's!top',
    enabled: false
}