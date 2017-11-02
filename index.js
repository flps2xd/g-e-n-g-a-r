const Discord = require('discord.js')
const client = new Discord.Client()
const prefix = "gg" 
client.on("ready", () => {
  console.log(`Em funcionamento!!!! total de ${client.channels.size} Canais, em ${client.guilds.size} servers, um total de ${client.users.size} usuarios.`)
})
 
 
client.login("Mzc1NzEwMjk5Mjk2MjM1NTMz.DN0JJg.R6XRRPMmpgzOofVy9AFN9fBGc5c")
 
 
client.on("message", (message) => {
    if (message.author.bot) return;
    if (message.channel.type !== 'text') return;
    if (!message.content.startsWith("gg")) return
 
  if (message.content.startsWith("gg" + "kobra")) {
    message.channel.sendMessage("lixo")
  }
});

