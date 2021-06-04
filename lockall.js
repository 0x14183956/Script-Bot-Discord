const Discord = require('discord.js');
const client = new Discord.Client();
const oki = ":white_check_mark:";
const nope = ":x:";
const lock = ":closed_lock_with_key:";
const unlock = ":unlock:";

module.exports.run = async (client, message, args) => {
  
  
    if (message.channel.permissionsFor(message.author.id).has("ADMINISTRATOR") === false) { 
      const embed = new Discord.MessageEmbed()
        .setColor("#5b3475")
        .setTimestamp()
        .setDescription(`Tu n'as pas de permission`);
      return message.channel.send({embed});  
    }  
  
    message.guild.channels.cache.forEach(c => {
      c.createOverwrite(message.guild.id, { SEND_MESSAGES: false })
        })
        const Lockembed = new Discord.MessageEmbed()
      .setColor("#5b3475")
      .setTimestamp()
      .setDescription(`Toutes les chaînes ont été verrouillées par <@${message.author.id}>.`);
      return message.channel.send(Lockembed)
    } 
      
    module.exports.help = {
      name: "lockall",
      category: 'mods',
      description: "Vérouille tout les salon",
      aliases: ['lkall'],
  
    };
      
  