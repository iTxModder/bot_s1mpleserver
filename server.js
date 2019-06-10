const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const db = require('quick.db');
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
//bot.commands = new Discord.Collection();
const { token, prefix, owners } = require('./botconfig.json');
const {Collection } = require('discord.js');
const { readdirSync } = require('fs');

//Express
const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Recebido");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

bot.commands = new Collection();
bot.aliases = new Collection();
bot.prefix = prefix;
bot.owners = owners;

console.log(bot.owners)

// Now Comes the command handler 
//const loadCommands = module.exports.loadCommands = (dir = "./commands/") => {
  //  fs.readdir(dir, (error, files) => {                   // Reading the Dir
    //    if (error) return console.log(error);                    

      //  files.forEach((file) => {                       // reading Files from each dir
        //    if (fs.lstatSync(dir + file).isDirectory()) {
          //      loadCommands(dir + file + "/");
            //    return;
            //}

            //delete require.cache[require.resolve(`${dir}${file}`)];

            //let props = require(`${dir}${file}`); // defining props for each file for each dir
            //console.log( props )

            //bot.commands.set(props.command.name, props); // giving name to the command

            //if (props.command.aliases)  props.command.aliases.forEach(alias => { 
              //  bot.aliases.set(alias, props.command.name); // giving aliases to the command [second name]
            //});
       // });
    //});
//};
//loadCommands(); // loading the commands 

const load = dirs => {
  const commands = readdirSync(`./commands/${dirs}/`).filter(d => d.endsWith('.js'));
  for (const file of commands) {
    const pull = require(`./commands/${dirs}/${file}`);
    bot.commands.set(pull.command.name, pull);
    console.log(pull)
    if (pull.command.aliases) pull.command.aliases.forEach(a => bot.aliases.set(a, pull.command.name));
  }
};
const commandsDir = readdirSync('./commands/');
commandsDir.forEach(x => load(x));


const activities_list = [
    "Estás perdido? s!help", 
    "Se quiseres música usa o S1mple Music",
    "coisas pela janela", 
    "café pela boca abaixo",
	"o que o DarkenLight Mage me disser pra fazer"
    ];

bot.on("ready", async () => {
  console.log(`${bot.user.username} está online em ${bot.guilds.size} servers!`);
  //bot.user.setActivity("Estás perdido? s!help", {type: "STREAMING"});
  setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); // generates a random number between 1 and the length of the activities array list (in this case 5).
        bot.user.setActivity(activities_list[index]); // sets bot's activities to one of the phrases in the arraylist.
    }, 10000);

});


	  // dont do anything if error occurs
	  // if this occurs bot probably can't send images or messages
  
//bot.on("message", async message => {
//  if(message.author.bot) return;
//  if(message.channel.type === "dm") return;
  
//  let prefix = (botconfig.prefix)
//  let messageArray = message.content.split(" ");
//  let cmd = messageArray[0];
//  let args = messageArray.slice(1);
//  let commandfile = bot.commands.get(cmd.slice(prefix.length));
//  if(commandfile) commandfile.run(bot,message,args);

//});


    
//bot.on("message", async message => {
  //let prefix = (botconfig.prefix)
//  let args = message.content.slice(prefix.length).trim().split(/ +/g);
//let cmd = args.shift().toLowerCase();
//let command;

//if (bot.commands.has(cmd)) {
  //  command = bot.commands.get(cmd);
//} else if (bot.aliases.has(cmd)) {
  //  command = bot.commands.get(bot.aliases.get(cmd));
//}

  
  
  //  if (!message.content.startsWith(prefix)) return;
  

    //if (message.content.startsWith('<@568814912499875890>')) {
      //message.channel.send("teste")
    //};
      
    //if (command) {
    // The Below line will check if the command is enabled or else it will give a message that command is disabled and the user cannot use it 
      //  if (message.author.id !== "472720369346936842" && !command.command.enabled) return message.channel.send(`${message.author.username} Desculpa. O comando foi desativado!!`);
    //}
//try {
  //  command.run(bot, message, args);

//} catch (e) {
//}
  
  
	  // if this occurs bot probably can't send images or messages
  
bot.on('message', async message => {

  
  if(message.author.bot || message.channel.type !== 'text') return;


  const args = message.content.slice(bot.prefix.length).trim().split(/ +/g);
  const cmd = args.shift().toLowerCase();

  if(!message.content.startsWith(bot.prefix)) return;
  const commandfile = bot.commands.get(cmd) || bot.commands.get(bot.aliases.get(cmd));
  if(commandfile) { if(!bot.owners.includes(message.author.id) && !commandfile.command.enabled) return message.channel.send(`${message.author.username} Desculpa. O comando foi desativado!!`);

    
  }
  try {
    commandfile.run(bot, message, args);
  } catch (e) {}


  
  //Sistema de xp
  var profile = await db.fetch(`xp_${message.author.id}`)
  var level = await db.fetch(`xplevel_${message.author.id}`)
  var xplevelmax = await db.fetch(`xplevelmax_${message.author.id}`)
  if (xplevelmax === null) await db.set(`xplevelmax_${message.author.id}`, 100);
  if (xplevelmax === 0) await db.set(`xplevelmax_${message.author.id}`, 100);
  let amountxp = (Math.floor(Math.random() * 7) + 3  )
  //db.add(`xp_${message.author.id}`, amountxp)
  if(message.member.roles.some(r => r.name === "🆙 Boost XP (3x)")) {
		let boostedxp = (amountxp * 3)
	db.add(`xp_${message.author.id}`, boostedxp)
	} else {db.add(`xp_${message.author.id}`, amountxp)}
  //If user xp higher than 100 add level
  if (profile + 10 > xplevelmax) {
    await db.add(`xplevel_${message.author.id}`, 1)
    await db.set(`xp_${message.author.id}`, 0)
    await db.add(`xplevelmax_${message.author.id}`, 50)
    message.reply(`Subiste de nível!! Estás agora no nível: ${level}`)
    
  }
  
	
});                                        
                                               
   


bot.login(botconfig.token).catch(e => console.log(e));