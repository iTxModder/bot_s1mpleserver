const Discord = require('discord.js');
const Canvas = require('canvas');
const db = require('quick.db');
const path = require('path')

//-------------------------
//var assets = require("../../assets");
//var express = require("express");

//var app = express();
//app.use("/assets", assets);
//-------------------------

const applyText = (canvas, text) => {
	const ctx = canvas.getContext('2d');

	// Declare a base size of the font
	let fontSize = 70;

	do {
		// Assign the font to the context and decrement it so it can be measured again
		ctx.font = `${fontSize -= 10}px sans-serif`;
		// Compare pixel width of the text to the canvas minus the approximate avatar size
	} while (ctx.measureText(text).width > canvas.width - 300);

	// Return the result to use in the actual canvas
	return ctx.font;
};

module.exports.run = async (bot, message, args) => {
  console.log("2")
  let userlevel = await db.fetch(`xplevel_${message.author.id}`)
 if (userlevel === null) await db.set(`xplevel_${message.author.id}`, 0);
  
const member = message.author
const membername = member.username

//quick.db
  let rep = await db.fetch(`rep_${message.author.id}`)
//--------------------------------

	const canvas = Canvas.createCanvas(800, 800);
	const ctx = canvas.getContext('2d');
  
//  const { Image } = require('canvas')
//  const img = new Image()
//img.onload = () => ctx.drawImage(img, 0, 0)
//img.onerror = err => { throw err }
//img.src = 'https://discordjs.guide/assets/img/2vsIPEP.3f295fd2.png'
console.log("3")
  const backgroundimg = path.resolve('./assets/wallpaper.png')
	const background = await Canvas.loadImage(backgroundimg); //__dirname + '/assets/wallpaper.png'
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
console.log("3_2")
	ctx.strokeStyle = '#74037b';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);
  
  //toprectangle
  ctx.fillStyle = 'rgb(22, 22, 22)';
  ctx.fillRect(0, 0, 800, 200);
  
  //retangulorep
  ctx.fillStyle = '#0066CC'
  ctx.fillRect(canvas.width / 1.16, canvas.height / 5.3, 105, 40);
  
	// Slightly smaller text placed above the member's display name
	ctx.font = '28px sans-serif';
	ctx.fillStyle = '#ffffff';
	ctx.fillText(`Nome: ${membername}`, canvas.width / 3.5, canvas.height / 15);

	// Add an exclamation point here and below
	ctx.font = '33px sans-serif';//applyText(canvas, `${member.displayName}!`);
	ctx.fillStyle = '#ffffff';
	ctx.fillText(`REP: ${rep}`, canvas.width / 1.16, canvas.height / 4.3);

	ctx.beginPath();
	ctx.arc(100, 100, 100, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.clip();

	const avatar = await Canvas.loadImage(member.displayAvatarURL);
	ctx.drawImage(avatar, 1, 1, 200, 200);

	const attachment = new Discord.Attachment(canvas.toBuffer(), 'profile.png');

  //message.channel.send("Trying...")
  console.log("4");
	
  message.channel.send(`Perfil de ${member}!`, attachment);
}

module.exports.command = {
    name: 'profile',
    description: 'Veja o seu profile!',
    category: "teste",
    usage: 's!profile',
    enabled: false
}