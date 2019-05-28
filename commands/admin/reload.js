const Botconfig = require("../../botconfig.json");
const fs = require('fs')
exports.run = (bot, message, args) => {
  if(message.member.roles.some(r => r.name === "Manager") || message.member.roles.some(r => r.name === "Fundador") || message.member.roles.some(r => r.name === "Moderador Plus")) {
                      

const loadCommands = module.exports.loadCommands = (dir = "./commands/") => {
  message.reply(`<a:AcceptGif:569565878551838750> **|** Todos os comandos bot foram reiniciado com sucesso.`)
    fs.readdir(dir, (error, files) => {                   // Reading the Dir
        if (error) return console.log(error);                    

        files.forEach((file) => {                       // reading Files from each dir
            if (fs.lstatSync(dir + file).isDirectory()) {
                loadCommands(dir + file + "/");
                return;
            }

            delete require.cache[require.resolve(`${dir}${file}`)];

            let props = require(`${dir}${file}`); // defining props for each file for each dir
            console.log('Reload' + props )

            bot.commands.set(props.command.name, props); // giving name to the command

            if (props.command.aliases)  props.command.aliases.forEach(alias => { 
                bot.aliases.set(alias, props.command.name); // giving aliases to the command [second name]
            });
        });
    });
};
loadCommands(); 
  }
};


module.exports.command = {
    name: 'reload',
    description: 'Reinicia algum comando sem reiniciar o bot todo.',
    category: "admin",
    usage: ['s!reload [comando]'],
    enabled: false
}