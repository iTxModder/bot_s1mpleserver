const Discord = require('discord.js');
const canvas = require('canvas');
const db = require('quick.db');
const path = require('path')
 
module.exports.run = async (bot, message, args) => {
const Canvas = canvas.createCanvas(700, 250);
const ctx = canvas.getContext('2d');
  
var al=db.fetch(`xplevel_${message.author.id}`);
var start=4.72;
var cw=context.canvas.width/2;
var ch=context.canvas.height/2;
var diff;
  
  
function progressBar(){
diff=(al/100)*Math.PI*2;
context.clearRect(0,0,400,200);
context.beginPath();
context.arc(cw,ch,50,0,2*Math.PI,false);
context.fillStyle='#FFF';
context.fill();
context.strokeStyle='#e7f2ba';
context.stroke();
context.fillStyle='#000';
context.strokeStyle='#b3cf3c';
context.textAlign='center';
context.lineWidth=15;
context.font = '10pt Verdana';
context.beginPath();
context.arc(cw,ch,50,start,diff+start,false);
context.stroke();
context.fillText(al+'%',cw+2,ch+6);
if(al>=56){
clearTimeout(bar);
}
 
}
 
var bar=setInterval(progressBar,50);
}

module.exports.command = {
    name: 'testecanvasbar',
    //description: 'Veja o seu profile!',
    category: "teste",
    usage: 's!testecanvasbar',
    enabled: false
}