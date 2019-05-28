// NTY4ODE0OTEyNDk5ODc1ODkw.XLn2DA.jfDzLALqtJNxQoPK3brgyjpudcM
// Requires 

var queue = {};
const Discord  = require('discord.js');
const client = new Discord.Client();
const Canvas = require('canvas');
const snekfetch = require('sneckfetch');
const config = require('./config.json');
const fs = require('fs');
const http = require('http');
const prefix = config.prefix;
const express = require('express');
const app = express();
const moment = require('moment');                     
// Ligar Bot

app.get("/", (request, response) => {
      console.log(Date.now() + " Ping Received");
      response.sendStatus(200);
});
      app.listen(process.env.PORT);
      setInterval(() => {
      http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);
                                   
// Leitor de Comandos
        
client.on("message", message => {


let msg = message.content.toUpperCase();
let sender = message.author;
let args = message.content.slice(prefix.length).trim().split(' ');
let cmd = args.shift().toLowerCase();

try {
let commandFile = require (`./comandos/${cmd}.js`);
commandFile.run(client, message, args);
} catch (e) {
} finally {
      
}
});

// Auto-React (Sugestões)
          
  if(message.channel.id == "565997901050937355"){
        message.react('👍')
        message.react('👎')
};
          
// Welcome (S1mple)
          
client.on('guildMemberAdd'), member => {

  if(member.guild.id !== "552275750376570880") return;
  let avatar = member.user.avatarURL
  let embed = new Discord.RichEmbed()
  .setColor('#4169E1')
  .setThumbnail(message.guild.iconURL)
  .addDescription('xxxx')
  .addField('Teste1', moment.utc(user.createdAt).format('MM/DD/YYYY h:mm A'), true)
  .addField('Teste2', moment.utc(user.createdAt).format('MM/DD/YYYY h:mm A'), true)
  .setFooter('Proibido divulgação.')
  .setTimestamp()
client.channels.get('552318488018944010').send({embed})

});



// Login
  
client.on('ready', () => console.log("Pronto"));
client.login(config.token)   