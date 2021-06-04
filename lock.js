const Discord = require('discord.js');
const bot = new Discord.Client();
const ms = require("ms");
const oki = ":white_check_mark:"
const nope = ":x:";
const lock = ":closed_lock_with_key:";
const unlock = ":unlock:";

exports.run = async (client, message, [time, reason]) => {
  if (!client.lockit) { client.lockit = []; }
  let validUnlocks = ["release", "unlock", "u"];
  if (!time) { return message.reply(`Vous n'avez pas spécifié une durée corecte.`); }

  const Lockembed = new Discord.MessageEmbed()
    .setColor("#5b3475")
    .setTimestamp()
    .setDescription(`Le salon a bien été lock par <@${message.author.id}> pour une duré de: ${time}.`);
    if (reason != null) { Lockembed.addField("Raison : ", reason); }
    
    const Unlockembed = new Discord.MessageEmbed()
    .setColor("#5b3475")
    .setTimestamp()
    .setDescription(`La chaîne a été déverrouillée par le temps (<@${message.author.id}>).`);

  if (message.channel.permissionsFor(message.author.id).has("MUTE_MEMBERS") === false) { 
    const embed = new Discord.MessageEmbed()
      .setColor("#5b3475")
      .setTimestamp()
      .setDescription("Vous n'avez pas la permission de faire cela.");
    return message.channel.send({embed});  
  }  
  if (validUnlocks.includes(time)) {
    message.channel.createOverwrite(message.guild.id, { SEND_MESSAGES: null }).then(() => {
      message.channel.send({embed: Unlockembed});
      clearTimeout(client.lockit[message.channel.id]);
      delete client.lockit[message.channel.id];
    }).catch(error => { console.log(error); });
  } else {
    message.channel.createOverwrite(message.guild.id, { SEND_MESSAGES: false }).then(() => {
      message.channel.send({embed: Lockembed}).then(() => {
        client.lockit[message.channel.id] = setTimeout(() => {
          message.channel.createOverwrite(message.guild.id, {
            SEND_MESSAGES: null
          }).then(message.channel.send({embed: Unlockembed})).catch(console.error);
          delete client.lockit[message.channel.id];
        }, ms(time));
      }).catch(error => { console.log(error); });
    });
  }
};

exports.conf = {
  enabled: true,
  runIn: ["text"],
  aliases: ["ld", "lock"],
  permLevel: 2,
  botPerms: ["MANAGE_ROLES", "EMBED_LINKS", "ADMINISTRATOR"]
};

module.exports.help = {
  name:"lock",
  aliases: ['lk'],
}