const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
  if(!tomute) return message.channel.send("Svp, mettez une perssone a mute !");
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Vous n'avez pas les pemisions requise pour éfectuer cette commande !");
  if (tomute.id === message.author.id) return message.channel.send("Vous ne pouvez pas vous mute vous même !");  
  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Je ne peux pas mute cette perssone");

  let muterole = message.guild.roles.cache.find(role => role.name === 'muted');

  if(!muterole){
    try{
      muterole = await message.guild.roles.create({
        data: {
            name: 'muted',
            color: '#000000',
          },
      })
      message.guild.channels.cache.forEach(async (channel, id) => {
        await message.channel.createOverwrite(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }

  if(tomute.roles.cache.has(muterole.id)){
    return message.channel.send("Cette perssone est déjà mute !")
}
  let mutetime = args[1];
  if(!mutetime) return message.channel.send("Vous n'avez pas spécifié de temps");

  await(tomute.roles.add(muterole.id));
  message.reply(`<@${tomute.id}> a bien été mute pendant ${ms(ms(mutetime))}`);

  setTimeout(function(){
    tomute.roles.remove(muterole.id);
    message.channel.send(`<@${tomute.id}> a été demute`);
  }, ms(mutetime));

}

module.exports.help = {
  name: "mute"
}
