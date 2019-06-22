const Discord = module.require('discord.js');
  
var fortunes = [
    "**🎱 Sim**",
    "**🎱 Não**",
    "**🎱 Talvez**",
    "**🎱 Não sei, tente mais tarde**",
    "**🎱 Depende...**",
    "**🎱 Não sei, seu corno.**",
    "**🎱 TEU CU**",
    "**🎱 VÁ SI FUDE, CARA**",
];


module.exports.run = async (bot, message, args) => {
  
if(!args[0]){
  return message.channel.send(`<:Errado:454383164652257292> ${message.author} ` + "**| Por favor, insira uma pergunta que você gostaria que eu respondesse**")
}
  if (args[0]) message.channel.send(fortunes[Math.floor(Math.random() * fortunes.length)]);
else message.channel.send("<:Errado:454383164652257292>" + "**| **ToU Tã0 D406Ad0 Qu3 Já Nã0 53i 13r :(");
}

exports.command = {
    name: '8ball',
    permission: "Nenhuma",
    description: 'Obtém uma resposta a uma pergunta!',
    category: "fun",
    usage: ['8ball <pergunta>'],
    enabled: true
}