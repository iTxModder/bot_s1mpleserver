exports.run = (bot, message, args) => {
  if(message.member.roles.some(a => a.name === "Fundador") || message.member.roles.some(a => a.name === "Administrador") || message.member.roles.some(a => a.name === "Manager") || message.member.roles.some(a => a.name === "Funcionário")){
  if(!args || args.size < 1) return message.reply("<:errado:580518832939204628> **|** Por favor especifique o comando para reiniciar.");
  const commandName = args[0];
  // Check if the command exists and is valid
      console.log(commandName)
    if (!commandName) return message.reply("<:errado:580518832939204628> **|** Por favor especifique o comando para reiniciar.");
    
    
    
    if (commandName = 'all') {
      message.channel.send("<a:Loading:396601065019277314> Reiniciando bot...")
      bot.destroy().then(bot.login(Botconfig.token))
      console.log(commandName)
      message.reply(`<a:AcceptGif:569565878551838750> **|** O bot foi reiniciado com sucesso.`)
    } else {
  
      if(!bot.commands.has(commandName)) {
    return message.reply("<:errado:580518832939204628> **|** O comando não existe.");
  }
  // the path is relative to the *current folder*, so just ./filename.js
  delete require.cache[require.resolve(`./${commandName}.js`)];
  // We also need to delete and reload the command from the client.commands Enmap
  bot.commands.delete(commandName);
  const props = require(`./${commandName}.js`);
  bot.commands.set(commandName, props);
  message.reply(`<:certo:580518832611786753> **|** O comando ${commandName} foi reiniciado.`);
    };
  } else {
  message.reply("<:errado:580518832939204628> **|** Tu não tens permissão para fazer isso!")}
};
