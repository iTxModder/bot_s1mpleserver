const db = require("quick.db")
exports.run = async(client, message, args) => {
if(message.member.roles.some(r => r.name === "Manager") || message.member.roles.some(r => r.name === "Fundador") || message.member.roles.some(r => r.name === "Administrador")) {
  db.set(`lastdaily_${message.author.id}`, Date(2019,5,12));
  let lastrep = await db.fetch(`lastrep_${message.author.id}`)
  db.set(`lastrep_${message.author.id}`, Date(2019,5,12));
  db.set(`lastwork_${message.author.id}`, Date(2019,5,12));
  message.reply("<:certo:580518832611786753> **|** Manual Override Command executado!")
  } else {
  message.reply("<:errado:580518832939204628> **|** Não tens permissão para fazer isso!")}
};

module.exports.command = {
    name: 'manualoverridecommand',
    description: 'Manual overide',
    enabled: true
} 