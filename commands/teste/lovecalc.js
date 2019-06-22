const { get } = require("snekfetch");
const { MessageEmbed } = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if (!message.mentions.members.size) return message.reply("Ó CORNO! COMO É QUE RAIO EU VOU SABER O QUANTO ALGUÉM SE AMA SE TU NÃO DIZES QUEM?"); //Response Can Be Refined 😂
  console.log(message.member.displayName)
  console.log()
    const data = await get(`https://love-calculator.p.mashape.com/getPercentage?fname=${message.member.displayName}&sname=${message.mentions.members.first().displayName}`).set("X-Mashape-Key", 'dfd532fe10mshc33900bd3e9e8a3p1e03abjsn6f73834039de');
    const embed = new MessageEmbed()
      .setThumbnail("http://images6.fanpop.com/image/answers/3317000/3317487_1375024940496.53res_300_202.jpg")
      .addField("Namorado", data.body.fname)
      .addField("Namorada", data.body.sname)
      .addField("Percentagem de Amor", data.body.percentage)
      .setFooter(data.body.result)
      .setColor(0xFF0000);
      
    message.channel.send({ embed });
  }

exports.command = {
    name: 'lovecalc',
    permission: "Nenhuma",
    description: 'Vê se dois usuários são um casal escondido! ( ಠ ͜ʖಠ)',
    category: "fun",
    usage: ['lovecalc<usuário>'],
    enabled: true
}