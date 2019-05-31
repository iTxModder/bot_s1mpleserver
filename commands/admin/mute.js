const Discord = require("discord.js");
const ms = require("ms");
module.exports.run = async (bot, message, args) => {


  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Nop. #Sefudeu");
  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.reply("Não consegui encontrar esse utilizador.");
  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("Não o podes mutar!");
  let reason = args.slice(2).join(" ");
  if(!reason) return message.reply("Por favor indica a razão.");

  let muterole = message.guild.roles.find(`name`, "Silênciado");
  //start of create role
  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "Silênciado",
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
  if(!mutetime) return message.reply("Não especificas-te uma duração!");

  message.delete().catch(O_o=>{});

  try{
    await tomute.send(`Olá! Foste corno e foste mutado por ${mutetime}. Aprende com esta!`)
  }catch(e){
    message.channel.send(`Um utilizador foi mutado... mas as suas mensagens no PV estão bloqueadas. Vão ser bloqueadas por: ${mutetime}`)
  }

  let muteembed = new Discord.RichEmbed()
  .setDescription(`Mute executado por ${message.author}`)
  .setColor("#0000000")
  .addField("Utilizador Mutado:", tomute)
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
    description: 'Silência um utilizador.',
    category: "admin",
    usage: ['s!mute <utilizador> <duração>'],
    enabled: true
}