const db = require('quick.db')
module.exports.run = async (bot, message, args) => {
  

    window.ckrole = async function() {
let cooldown = 600000		
let bx2duration = await db.fetch(`bx2duration_${message.author.id}`)	
if(bx2duration !== null && cooldown - (Date.now() - bx2duration) < 0) {
	let bx2 = message.guild.roles.find(r => r.name === "💳 Boost Card ( 2x )");
	message.member.removeRole(bx2).catch(console.error)
}
let bx3duration = await db.fetch(`bx3duration_${message.author.id}`)	
if(bx3duration !== null && cooldown - (Date.now() - bx3duration) < 0) {
	let bx3 = message.guild.roles.find(r => r.name === "💳 Boost Card ( 3x )");
	message.member.removeRole(bx3).catch(console.error)
}
			};
}