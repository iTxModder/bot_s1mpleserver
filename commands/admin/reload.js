module.exports.run = async (bot, message, args) => {
  //if(message.member.roles.some(r => r.name === "Manager") || message.member.roles.some(r => r.name === "Fundador") || message.member.roles.some(r => r.name === "Administrador")) {
const { readdirSync } = require('fs'); 
const { join } = require('path');

module.exports.run = async (bot, message, args) => {

  if(!bot.owners.includes(message.author.id)) return message.channel.send('<:zAlert:580520339705167872> **|** Apenas o dono do bot pode fazer isso! **|** <:zAlert:580520339705167872>');

  if(!args[0]) return message.channel.send('Por favor especifique um comando para reiniciar.');
  const commandName = args[0].toLowerCase();
  if(!bot.commands.get(commandName)) return message.channel.send('Esse comando não existe. Tente outra vez.');
  readdirSync(join(__dirname, '..')).forEach(f => {
    const files = readdirSync(join(__dirname,'..',f));
    if(files.includes(commandName + '.js')) {
      try {
        delete require.cache[require.resolve(`../${f}/${commandName}.js`)]; // usage !reload <name>
        bot.commands.delete(commandName);
        const pull = require(`../${f}/${commandName}.js`);
        bot.commands.set(commandName, pull);
        return message.channel.send(`<a:zLoading:583333775971319808> Reiniciado com sucesso ${commandName}.js!`);
      } catch(e) {
        return message.channel.send(`Não pude reiniciar: \`${args[0].toUpperCase()}\``);
      }
    }
  });
};
  //}
};


module.exports.command = {
    name: 'reload',
    description: 'Reinicia algum comando sem reiniciar o bot todo.',
    category: "admin",
    usage: ['reload [comando]'],
    enabled: true
}