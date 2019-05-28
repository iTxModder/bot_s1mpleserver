const db = require('quick.db')
const ms = require('parse-ms')

exports.run = async(bot, message, args) => {
  let moons = await db.fetch(`moons_${message.author.id}`, { sort:true, sortBy: '.data'})
  let content = "";
  
  for (let i = 0; i < moons.lenght; i++) {
    let user = bot.users.get(moons[i].ID.split('_')[2]).username
    
    content += `${i+1}. ${user} ~ ${moons[i].data}$\n`
  }
  
}

module.exports.help = {
    name: 'top',
    name2: 'leaderboard',
    description: 'Veja os mais ricos do servidor!',
    usage: 's!top'
}