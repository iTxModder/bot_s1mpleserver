const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();

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


bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

// Now Comes the command handler 
const loadCommands = module.exports.loadCommands = (dir = "./commands/") => {
    fs.readdir(dir, (error, files) => {                   // Reading the Dir
        if (error) return console.log(error);                    

        files.forEach((file) => {                       // reading Files from each dir
            if (fs.lstatSync(dir + file).isDirectory()) {
                loadCommands(dir + file + "/");
                return;
            }

            delete require.cache[require.resolve(`${dir}${file}`)];

            let props = require(`${dir}${file}`); // defining props for each file for each dir

            bot.commands.set(props.command.name, props); // giving name to the command

            if (props.command.aliases)  props.command.aliases.forEach(alias => { 
                bot.aliases.set(alias, props.command.name); // giving aliases to the command [second name]
            });
        });
    });
};
loadCommands(); // loading the commands 


bot.on("ready", async () => {
  console.log(`${bot.user.username} está online em ${bot.guilds.size} servers!`);
  bot.user.setActivity("⚒️ MANUTENÇÃO ⚒️", {type: "STREAMING"});

});

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

bot.on("message", async message => {
  let prefix = (botconfig.prefix)
  let args = message.content.slice(prefix.length).trim().split(/ +/g);
let cmd = args.shift().toLowerCase();
let command;

if (bot.commands.has(cmd)) {
    command = bot.commands.get(cmd);
} else if (bot.aliases.has(cmd)) {
    command = bot.commands.get(bot.aliases.get(cmd));
}

    if (!message.content.startsWith(prefix)) return;

    if (command) {
    // The Below line will check if the command is enabled or else it will give a message that command is disabled and the user cannot use it 
        if (message.author.id !== "472720369346936842" && !command.command.enabled) return message.channel.send(`${message.author.username} Desculpa. O comando foi desativado!!`);
    }
try {
    command.run(bot, message, args);

} catch (e) {
}
}),

bot.login(botconfig.token)