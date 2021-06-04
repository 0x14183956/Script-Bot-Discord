const fs = require("fs");
const Discord = require('discord.js')





module.exports.run = async (client, message, args) => {
    let dab = JSON.parse(fs.readFileSync(`./serveur/${message.guild.id}.json`, "utf8"));
    let config = require("./../../config.json")
    let authorized = [`${config.bot.owner}` , `${config.bot.owner2}` , `${config.bot.owner3}` , `${message.guild.ownerID}`]
    if(!authorized.includes(message.author.id)) return message.channel.send(" `ERREUR` Vous n'avez pas la couronne du serveur.")

  if(args[0] === "on") {
      message.channel.send(" L' Anti webhook est maintenant activé")
      db.set("antiwb_"+ message.guild.id , true)
  }
  if(args[0] === "off") {
    message.channel.send(":x: L' Anti webhook est maintenant désactivé")
    db.set("antiwb_"+ message.guild.id , null)

}

};


module.exports.help = {
    name: "antiwebhook",
    aliases: ['antiwb' ],
    category: 'Administration',
    description: "Avoir quelque info sur le bot",
  };