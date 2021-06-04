const { MessageEmbed } = require("discord.js"), 
fs = require("fs");
const pagination = require('discord.js-pagination');

module.exports.run = async (client, message, args) => {
    if(!message.guild) return;
    let db = JSON.parse(fs.readFileSync(`./serveur/${message.guild.id}.json`, "utf8"));
    let config = require("./../../config.json")

    const help = new MessageEmbed()
    .setAuthor(`🔹 Help`)
    .setImage(config.bot.image)
    .setDescription(`• Hey salut ** ${message.author}**\n• Total serveurs : \`${client.guilds.cache.size}\`\n• Total membres :  \`${client.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0)}\`,\n • Total channels : \`${client.channels.cache.size}\`  \n • Version : \`${config.bot.version}\`\n• Préfix du bot sur ${message.guild} : \`${db.prefix}\`\n• Commands : \`${client.commands.size}\` `)
    .setColor(db.color)

    const administratif = new MessageEmbed()
    .setAuthor(`🔹 Administratif`)
    .setColor(db.color)
    .setDescription(`Partie administratif du Bot, dont seul les admin peux modifier / interagir avec les commandes de cette catégorie.
    
> [Liste des commandes]`)

.addField("`prefix`", `Alias : \`setprefix\`\n - Permet de changer le prefixe du bot`)
.addField("`settings`" , `Alias :  \`config\`\n - Permet d'avoir quelque info sur le bot.`)
.addField("`dm`" , `Alias :  \`mp\`\n - Permet d'envoyer des mp avec le bot.`)
.addField("`say`" , `Alias :  \`❌\`\n - Faire dire n'importe quoi au bot.`)
.addField("`poll`" , `Alias :  \`sondage\`\n - Faire un sondage.`)

const serveur = new MessageEmbed()
.setAuthor(`🔹 Gestion de serveur`)
.setColor(db.color)
.setDescription(`Partie Gestion de serveur, les personnes ayant les permissions administrateur sur les serveurs ou est présent le bot pourront utiliser les commandes de cette catégorie.
    
> [Liste des commandes]`)
.addField("`giveaway`", `Alias : \`gstart\`,\`giveawaystart\` \n - Permet d'afficher le panel de configuration des giveaways.`)
.addField("`reroll`", `Alias : \`greroll\`,\`giveawayreroll\`\n - Re-sélectionne un gagnant du dernier giveaway.`)
.addField("`statut`", `Alias : \`spanel\`,\`statutpanel\`\n - Permet d'afficher le panel de configuration des Custom Status.`)
.addField("`tempchannel`", `Alias : \`tpanel\`,\`configtempo\`,\`tempo\`\n - Permet d'afficher le panel de configuration des salon temporaires.`)
.addField("`membercount`", `[Alias:](iroo://iroo.bot) \`cpanel\`,\`mbpanel\`,\`membercounterpanel\`\n - Permet d'afficher le panel de configuration des salons temporaires.`)
.addField("`logs`", `Alias : \`lpanel\`,\`logspanel\`\n - Permet d'afficher le panel de configuration des logs. (Non terminée)`)
.addField("`autorole`", `Alias : \`apanel\`,\`autorolepanel\`\n - Permet d'afficher le panel de configuration de l'autorole.`)

const moderation = new MessageEmbed()
.setAuthor(`🔹 Modération`)
.setColor(db.color)
.setDescription(`Partie Modération de serveur, les personnes ayant les rôles préfinis sur les serveurs ou est présent le bot pourront utiliser les commandes de cette catégorie.
    
> [Liste des commandes](https://iroo.Bot)`)
.addField("`mpanel`", `Alias : \`mods\`,\`modspanel\` \n - Permet d'afficher le panel de configuration des modérateurs.`)
.addField("`mute`", `Alias : \`m\`,\n - Retirer la permissions de parler dans tout les salons textuels.`)
.addField("`unmute`", `Alias : \`um\`\n - Redonne la permissions de parler dans tout les salons textuels.`)
.addField("`ban`", `Alias : \`b\` \n - Bannis la personne.`)
.addField("`unban`", `Alias : \`ub\`\n - Débannir une personne`)
.addField("`renew`", `Alias : \`purge\`,\`boom\`\n - Permet de supprimer et recrée le salon ou est écris la commande`)
.addField("`voicemove`", `Alias : \`vm\`,\`voicem\`\n - Déplace toutes les personnes du salon vers un autre salon`)
.addField("`clear`", `Alias : \`purge\`\n - Suprime le nombre de message que vous vouler`)
.addField("`slowmode`", `Alias : \`slow\`\n - Active le slow mode dans le salon`)
.addField("`lock`", `Alias : \`lk\`\n - Bloque le salon pour un temps donné`)
.addField("`unlock`", `Alias : \`unlk\`\n - Débloque le salon pour un temps donné`)
.addField("`lock-all`", `Alias : \`lkall\`\n - Ferme tout les salons du server`)
.addField("`warn`", `Alias : \`wrn\`\n - Warn un membre`)

const fun = new MessageEmbed()
.setAuthor(`🔹  fun`)
.setColor(db.color)
.setDescription(`C'est des catégories non-utile au serveur, c'est pour le fun tout le monde peux les utiliser.
    
> [Liste des commandes]`)
.addField("`kiss`", `Alias : \`❌\` \n - Fais un bisous.`)
.addField("`fight`", `Alias : \`❌\` \n - Combat une personne`)
.addField("`hug`", `Alias : \`❌\` \n - Fais un calin a une personne.`)
.addField("`8ball`", `Alias : \`❌\` \n - Il y a de grandes chances que je vous insulte!.`)
.addField("`pic`" , `Alias : \`pp\`, \`avatar\` \n - Obtenez votre propre avatar ou celui de quelqu'un d'autre.`)
.addField("`calc`" , `Alias : \`calcule\`, \`math\` \n - Resoudre des calcules simples`)
.addField("`love`" , `Alias : \`lc\` \n - A combien en t'aime ?.`)
.addField("`gif`" , `Alias : \`tenor\` \n - Fournissez une requête et je vous retournerai un gif!.`)
.addField("`cat`" , `Alias : \`❌\` \n - Donne une image random de chat!.`)
.addField("`dog`" , `Alias : \`❌\` \n - Donne une image random de chien!.`)
.addField("`koala`" , `Alias : \`❌\` \n - Donne une image random de koala!.`)
.addField("`trivia`" , `Alias : \`trv\` \n - Quiz pour un developer`)
.addField("`panda`" , `Alias : \`❌\` \n -  Donne une image random de panda`)
.addField("`punsh`" , `Alias : \`❌\` \n - Fraper un membre`)
.addField("`flip`" , `Alias : \`coin\` \n - Lance une pièce`)
.addField("`traduction`" , `Alias : \`trad\` \n - Traduction des message que vous ecrivez avec n'importe quel langue`)

const util = new MessageEmbed()
.setAuthor(`🔹  utilitaires`)
.setColor(db.color)
.setDescription(`C'est des catégories utile au serveur, certains commande sont accesible a tout le monde.
    
> [Liste des commandes]`)
.addField("`vc`", `Alias : \`vocalmembers\`,\`voicemember\` \n - Obtenez le nombre de personne en vocal ainsi que le nombre de personne sur le serveur.`)
.addField("`la`", `Alias : \`listeadmin\` \n - Liste de toutes les personnes ayant la permissions administrateur sur le serveur`)
.addField("`lrm`", `Alias : \`listerolemembers\` \n - Obtenez la liste de personne dans un rôle`)
.addField("`help`", `Alias : \`aide\` \n - Affiche la liste des commandes`)
.addField("`ping`" , `Alias : \`❌\` \n - Affiche le ping du bot et de l'api discord`)
.addField("`embed`" , `Alias : \`❌\` \n - Ecrire en embed`)
.addField("`server-pic`" , `Alias : \`sp\` \n - Donne la pdp du server`)
.addField("`server-info`" , `Alias : \`si\` \n - Donne des infos sur le server`)
.addField("`ancien`" , `Alias : \`oldest\` \n - Donne la personne la plus ancienne du server`)
.addField("`recent`" , `Alias : \`yougest\` \n - Donne la personne la plus jeune du server`)
.addField("`addbot`" , `Alias : \`invite\` \n - Donne l'invitation du bot`)
.addField("`total-ban`" , `Alias : \`bans\` \n - Liste des membres / bot ban sur le serveur `)
.addField("`stats`" , `Alias : \`info\`, \`ui\` \n - Donne des infos sur une personne`)

const nsfw = new MessageEmbed()
.setAuthor(`🔹 Nsfw`)
.addField("`4k`" , `Alias : \`❌\` \n - 4k`)
.addField("`neko`" , `Alias : \`❌\` \n - neko`)
.addField("`anal`" , `Alias : \`❌\` \n - anal`)
.addField("`ass`" , `Alias : \`❌\` \n - ass`)
.addField("`boobs`" , `Alias : \`❌\` \n - boobs`)
.addField("`hentai`" , `Alias : \`❌\` \n - hentai`)
.addField("`porngif`" , `Alias : \`pgif\` \n - prongif`)
.addField("`pussy`" , `Alias : \`❌\` \n - pussy`)


.setColor(db.color)
.setDescription(`C'est des catégories non-utile au serveur, c'est pour le fun tout le monde peux les utiliser.
    
> [Liste des commandes]`)
const owner = new MessageEmbed()
.setAuthor(`🔹 Owner`)
.setColor(db.color)
.setDescription(`Partie Owner du Bot, dont seul l'owner peux modifier / interagir avec les commandes de cette catégorie.

> [Liste des commandes]`)
.addField("`server-list`" , `Alias : \`slt\` \n - Donne les serveurs ou ce trouve le bot`)
.addField("`setavatar`", `Alias : \`botavatar\`\n - Permet de changer la photo de profil du bot`)
.addField("`setname`", `Alias : \`botname\`\n - Permet de changer le pseudonyme du Bot`)
.addField("`stream`", `Alias : \`play\`,\`watch\`,\`listen\`,\`setstream\`,\`activity\`\n - Permet de changer l'activité du Bot`)
.addField("`color`", `Alias : \`colorembed\`,\`theme\`\n - Permet de définir une couleur au embed du Bot.`)
.addField("`eval`", `Alias : \`❌\` \n - ❌ `)
.addField("`down`" , `Alias : \`shutdown\` \n - Eteint le bot`)

    const pages = [
        help,
        util,
        fun,
        nsfw,
      serveur,
      moderation,
      administratif,
      owner
]

const emojiList = ["⏪", "⏩"];

const timeout = '120000';

pagination(message, pages, emojiList, timeout)
};


module.exports.help = {
    name: "help",
    aliases: ['aide','commands'],
    category: 'Administration',
    description: "Obtenez les informations de votre abonnement ",
  };