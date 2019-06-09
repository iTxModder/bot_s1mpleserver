const db = require('quick.db');

module.exports.run = async (bot, message, args) => {
db.createWebview('password', process.env.PORT);
}

module.exports.command = {
    name: 'webview',
    description: 'Cria uma webview da db do server!',
    category: "dev",
    usage: 'webview',
    enabled: true
}