const lennys = ['( ͡° ͜ʖ ͡°)', '( ͠° ͟ʖ ͡°)', '( ͡~ ͜ʖ ͡°)', '( ͡ʘ ͜ʖ ͡ʘ)', '( ͡o ͜ʖ ͡o)', '(° ͜ʖ °)', '( ‾ʖ̫‾)', '( ಠ ͜ʖಠ)', '( ͡° ʖ̯ ͡°)', '( ͡ಥ ͜ʖ ͡ಥ)', '༼ ͡° ͜ʖ ͡° ༽', '(·̿Ĺ̯·̿ ̿)'];
module.exports.run = async (bot, message, args) => {
    var rand_num = Math.floor(Math.random() * lennys.length);
    var rand_val = lennys[rand_num];

    console.log(`${message.author.username} got a lenny number [${rand_num}]`);

    return message.channel.send(rand_val);
}


exports.command = {
    name: 'lenny',
    permission: "Nenhuma",
    description: 'Cara de lenny!',
    category: "fun",
    usage: ['lenny'],
    enabled: true
}