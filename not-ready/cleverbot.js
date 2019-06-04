var Cleverbot = require('cleverbot-node');
var Slave = new Cleverbot();
var ent = require('entities');
var antiSpam = {};
var chalk = require('chalk')
	,clk = new chalk.constructor({enabled: true})
const cWarn = clk.bgYellow.black;
const cError = clk.bgRed.black;
const cDebug = clk.bgWhite.black;
const cGreen = clk.bold.green;
const cGrey = clk.bold.grey;
const cYellow = clk.bold.yellow;
const cBlue = clk.bold.blue;
const cRed = clk.bold.red;
const cServer = clk.bold.magenta;
const cUYellow = clk.bold.underline.yellow;
const cBgGreen = clk.bgGreen.black;


setInterval(() => antiSpam = {},3600000);

exports.
  = function(bot, message) {
	var text;
	if (!message.channel.isPrivate) text = (message.cleanContent.split(' ').length > 1) ? message.cleanContent.substring(message.cleanContent.indexOf(' ') + 1).replace('@', '') : false;
	else text = message.content;
	if (text) {
		if (!antiSpam.hasOwnProperty(message.author.id)) antiSpam[message.author.id] = text;
		else {
			if (antiSpam[message.author.id] == text) return;
			else antiSpam[message.author.id] = text;
		}
		if (!message.channel.isPrivate) console.log(cServer(message.channel.server.name) + " > " + cGreen(message.author.username) + " > " + cYellow("@" + bot.user.username) + " " + message.cleanContent.replace("@" + bot.user.username, "").replace(" ", "").replace(/\n/g, " "));
		else console.log(cGreen(message.author.username) + " > " + cYellow("@" + bot.user.username) + " " + message.cleanContent.replace("@" + bot.user.username, "").replace(/\n/g, " "));
		bot.startTyping(message.channel);
		Cleverbot.prepare(() => {
			Slave.write(text, resp=>{
				if (/\|/g.test(resp.message)) {
					resp.message = resp.message.replace(/\|/g, '\\u'); //replace | with \u
					resp.message = resp.message.replace(/\\u([\d\w]{4})/gi, (match, grp) => { //unescape unicode
						return String.fromCharCode(parseInt(grp, 16));
					});
				}
				if (!resp.message || !ent.decodeHTML(resp.message)) {
					bot.sendMessage(message, '⚠ Nada foi retribuído! Reiniciando o cleverbot...');
					delete require.cache[require.resolve("cleverbot-node")];
					Cleverbot = require('cleverbot-node');
					Slave = new Cleverbot();
					console.log(cWarn(" WARN ") + " Cleverbot retribuiu nada");
				} else bot.sendMessage(message, '💬 ' + ent.decodeHTML(resp.message));
			});
		});
		bot.stopTyping(message.channel);
	} else {
		if (!antiSpam.hasOwnProperty(message.author.id)) antiSpam[message.author.id] = "";
		else {
			if (antiSpam[message.author.id] == "") return;
			else antiSpam[message.author.id] = "";
		}
		if (!message.channel.isPrivate) console.log(cServer(message.channel.server.name) + " > " + cGreen(message.author.username) + " > " + cYellow("@" + bot.user.username) + " " + message.cleanContent.replace("@" + bot.user.username, "").replace(" ", "").replace(/\n/g, " "));
		else console.log(cGreen(message.author.username) + " > " + cYellow("@" + bot.user.username) + " " + message.cleanContent.replace("@" + bot.user.username, "").replace(/\n/g, " "));
		bot.sendMessage(message, 'Sim?');
	}
};