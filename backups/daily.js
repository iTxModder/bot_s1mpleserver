const db = require('quick.db')
const ms = require('parse-ms')

exports.run = async(bot, message, args) => {

let cooldown = 8.64e+7
let amount = 500
let amount2 = 400
let amount3 = 395
let amount4 = 375
let amount5 = 350
let amount6 = 300
let amount7 = 250
let amount8 = 200
let amount9 = 150
let amount10 = 100
let amount11 = 50

let lastdaily = await db.fetch(`lastdaily_${message.author.id}`)
if(lastdaily !== null && cooldown - (Date.now() - lastdaily) > 0) {
    let timeObj = ms(cooldown - (Date.now() - lastdaily));

    message.channel.send(`<:errado:580518832939204628> **|** Você já pegou suas moons diárias. Você precisa esperar **${timeObj.hours}h ${timeObj.minutes}m ${timeObj.seconds}s** `)

} else { 
if(message.member.roles.some(a => a.name === "👑 S1mple Nitro Classic")){
message.channel.send(`<a:economia:580518832792272916> **|** Você recebeu suas ${amount9} moons diarias.
<:certo:580518832611786753> **|** Como você é 👑 S1mple Nitro Classic ganhou mais &{amount} moons!`)

    db.set(`lastdaily_${message.author.id}`, Date.now());
    db.add(`moons_${message.author.id}`, amount)

} else { 
    if(message.member.roles.some(b => b.name === "🍁 Herald")){
    message.channel.send(`<a:economia:580518832792272916> **|** Você recebeu suas ${amount8} moons diarias.`)
    
        db.set(`lastdaily_${message.author.id}`, Date.now());
        db.add(`moons_${message.author.id}`, 200)
     
} else { 
    if(message.member.roles.some(c => c.name === "🌷 Gladiator")){
    message.channel.send(`<a:economia:580518832792272916> **|** Você recebeu suas ${amount7} moons diarias.`)
    
        db.set(`lastdaily_${message.author.id}`, Date.now());
        db.add(`moons_${message.author.id}`, 250)
    
    } else { 
        if(message.member.roles.some(d => d.name === "🥀 Legend")){
        message.channel.send(`<a:economia:580518832792272916> **|** Você recebeu suas ${amount6} moons diarias.`)
        
            db.set(`lastdaily_${message.author.id}`, Date.now());
            db.add(`moons_${message.author.id}`, 300)
            
        } else { 
            if(message.member.roles.some(e => e.name === "🌺 Ancion")){
            message.channel.send(`<a:economia:580518832792272916> **|** Você recebeu suas ${amount5} moons diarias.`)
            
                db.set(`lastdaily_${message.author.id}`, Date.now());
                db.add(`moons_${message.author.id}`, 350)
                
            } else { 
                if(message.member.roles.some(f => f.name === "🌻 Divine")){
                message.channel.send(`<a:economia:580518832792272916> **|** Você recebeu suas ${amount4} moons diarias.`)
                
                    db.set(`lastdaily_${message.author.id}`, Date.now());
                    db.add(`moons_${message.author.id}`, 375)
                    
                } else { 
                    if(message.member.roles.some(g => g.name === "🌹 Supreme")){
                    message.channel.send(`<a:economia:580518832792272916> **|** Você recebeu suas ${amount3} moons diarias.`)
                    
                        db.set(`lastdaily_${message.author.id}`, Date.now());
                        db.add(`moons_${message.author.id}`, 395)
                        
                    } else { 
                        if(message.member.roles.some(h => h.name === "💸 Contributor")){
                        message.channel.send(`<a:economia:580518832792272916> **|** Você recebeu suas ${amount2} moons diarias.`)
                        
                            db.set(`lastdaily_${message.author.id}`, Date.now());
                            db.add(`moons_${message.author.id}`, 400)
                            
                        } else { 
                            if(message.member.roles.some(i => i.name === "👑 S1mple Nitro Classic")){
                            message.channel.send(`<a:economia:580518832792272916> **|** Você recebeu suas ${amount} moons diarias.`)
                            
                                db.set(`lastdaily_${message.author.id}`, Date.now());
                                db.add(`moons_${message.author.id}`, 450)
                                
                            } else { 
                                if(message.member.roles.find(j => j.name === "new bubble popper")){
                                message.channel.send(`<a:economia:580518832792272916> **|** Você recebeu suas ${amount8} moons diarias.`)
                                
                                    db.set(`lastdaily_${message.author.id}`, Date.now());
                                    db.add(`moons_${message.author.id}`, 15)
                                    
                                } else { 
                                    if(message.member.roles.find(k => k.name === "members")){
                                    message.channel.send(`<a:economia:580518832792272916> **|** Você recebeu suas ${amount8} moons diarias.`)
                                    
                                        db.set(`lastdaily_${message.author.id}`, Date.now());
                                        db.add(`moons_${message.author.id}`, 10)
                                        
                                        
                                    }}}}}}}}}}}}
    
}



module.exports.help = {
    name: 'daily',
    description: 'Pegue sua recompensa diária',
    usage: 's!daily'
}