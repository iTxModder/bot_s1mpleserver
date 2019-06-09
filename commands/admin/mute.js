const Discord = require("discord.js");
const ms = require("ms");
module.exports.run = async (bot, message, args) => {


  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Você não possui permissões suficientes.");
  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.reply("Não consegui encontrar este usuário.");
  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("Você não pode mutá-lo!");
  let reason = args.slice(2).join(" ");
  if(!reason) return message.reply("Por favor indique uma razão.");

  let muterole = message.guild.roles.find(`name`, "Silenciado");
  //start of create role
  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "Silenciado",
        color: "#000000",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
  //end of create role
  let mutetime = args[1];
  if(!mutetime) return message.reply("Você não especificou uma duração!");

  message.delete().catch(O_o=>{});

  try{
    await tomute.send(`Olá! Você quebrou as regras e foi mutado por ${mutetime}.`)
  }catch(e){
    message.channel.send(`Um usuário foi mutado... mas as suas mensagens no PV estão bloqueadas. Será mutado por: ${mutetime}`)
  }

  let muteembed = new Discord.RichEmbed()
  .setDescription(`Mute executado por ${message.author}`)
  .setColor("#0000000")
  .addField("Usuário Mutado:", tomute)
  .addField("Mutado em:", message.channel)
  .addField("Feito em:", message.createdAt)
  .addField("Duração:", mutetime)
  .addField("Razão:", reason);

  let channel = message.guild.channels.find(c => c.name === "📕┃s1mple bot");
  if(!channel) return message.reply("Não encontrei um canal de mod.logs");
  channel.send(muteembed);

  await(tomute.addRole(muterole.id));

  setTimeout(function(){
    tomute.removeRole(muterole.id);
  }, ms(mutetime));


//end of module
}

module.exports.command = {
    name: 'mute',
    description: 'Silencia um utilizador.',
    category: "admin",
    usage: ['mute <utilizador> <duração>'],
    enabled: true
}