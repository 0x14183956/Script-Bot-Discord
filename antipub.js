const fs = require("fs");
const Discord = require('discord.js')





module.exports.run = async (client, message, args) => {
    let dab = JSON.parse(fs.readFileSync(`./serveur/${message.guild.id}.json`, "utf8"));
    let config = require("./../../config.json")
    if (!message.member.permissions.has("ADMINISTRATOR"))
    return message.channel.send(`Vous devez être **ADMINISTRATOR** pour effectuer cette commande, ${message.author.username}`);
  if(args[0] === "on") {
      message.channel.send("Antipub on")
      db.set("al_"+ message.guild.id , true)
  }
  if(args[0] === "off") {
    message.channel.send(":x: Antipub off")
    db.set("al_"+ message.guild.id , null)

}

};


module.exports.help = {
    name: "antipub",
    aliases: ['al' ],
    category: 'Administration',
    description: "Avoir quelque info sur le bot",
};