const Discord = require('discord.js'), // This will be used for creating embed
      arraySort = require('array-sort'), // This will be used for sorting arrays
      table = require('table'); // This will be used for preparing the output to a table
     const send = require('quick.hook'); // This will be used for creating & sending webhooks

// We can call our command handler here
exports.run = async (client, message, args, tools) => {
    // Be sure to call this in async, as we will be fetching the invites of the guild

    // First, we need to fetch the invites
    let moons = await message.guild.fetchInvites().catch(error => { // This will store all of the invites into the variable
        // If an error is catched, it will run this...
        return message.channel.send('Desculpa, Não tenho permissão para ver os convites. :/');
    }) // This will store all of the invites into the variable

    // Next, we can turn invites into an array
    moons = moons.array();

    // Now, using arraySort, we can sort the array by 'uses'
    arraySort(moons, 'uses', { reverse: true }); // Be sure to enable 'reverse'

    // Next, we need to go through each invite on the server, to format it for a table
    let possiblemoons = [['User', 'Uses']]; // Each array object is a rown in the array, we can start up by setting the header as 'User' & 'Uses'
    moons.forEach(function(moons) {
        possiblemoons.push([moons.inviter.username, moons.uses]); // This will then push 2 items into another row
    })

    // Create the output embed
    const embed = new Discord.RichEmbed()
        .setColor(0xCB5A5E)
        .addField('Top de Moons', `\`\`\`${table.table(possiblemoons)}\`\`\``); // This will be the field holding the leaderboard
        // Be sure to put the table in a codeblock for proper formatting

    // Now, we can send the embed to chat - Instead of a regular message, we can use quick.hook
    send(message.channel, embed, {
        name: 'Top de moons do Servidor',
        icon: 'https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/trophy-128.png'
    })
    
}

module.exports.command = {
    name: 'top',
    aliases: ['leaderboard'],
    description: 'Veja os mais ricos do servidor!',
    category: "Economia",
    usage: 's!top',
    enabled: false
}