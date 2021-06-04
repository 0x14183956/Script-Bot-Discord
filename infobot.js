const Discord = require('discord.js');
const fs = require ('fs');

exports.run = (client, message, args) => {
    const { version } = require("discord.js");
    let cpuStat = require("cpu-stat");
    let os = require('os');
    let cpuLol;
    cpuStat.usagePercent(function(err, percent, seconds) {
    if (err) {
        return console.log(err);
    }
})
let db = JSON.parse(fs.readFileSync(`./serveur/${message.guild.id}.json`, "utf8"));
let config = require("./../../config.json")

    var infobot = new Discord.MessageEmbed()
        .setAuthor(`🔹 Bot info`)
        .setThumbnail(message.author.avatarURL)
        .addField("🔧 • __Versions__", "NodeJS : " + "`v12.14.1`" + "\n" + "DiscordJS : " + "`" + `v${version}` + "`" + "", true)
        .addField(`📃• Satistiques\n**Serveurs : ${client.guilds.cache.size}**\n**Mmebres :${client.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0)}**,\n**Salons : ${client.channels.cache.size}**`)
        .addField("🔧 • __Version du bot__", `${config.bot.version}`, true)
        .addField("📌 • __Développeur__", `${config.bot.owner}`, true)
        .addField("📌 • __Contributeur__", `${config.bot.dev}`, true)
        .addField("🔌 • __Système__", "Plateforme : " + "`" +  `${os.platform()}`+ "` \n Arch : " + "`" + `${os.arch()}` + "` \n CPU : " +  "`" + `${os.cpus().map(i => `${i.model}`)[0]}` + "`")
        .addField("💻 • __Processeur__", "RAM: " + "`" + `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}` + "MB` | Latence avec l'API :" + "`" + `${Math.round(client.ws.ping)}` + " ms`")
        .addField("📍 • __En ligne depuis__", (Math.round(client.uptime / (1000 * 60 * 60))) + ' heures  ' + (Math.round(client.uptime / (1000 * 60)) % 60) + ' minutes ' + (Math.round(client.uptime / 1000) % 60) + ' secondes ', true)
        .setColor(db.Color)
        .setImage(config.bot.image)
    message.channel.send(infobot)
}

exports.help = {
    name: 'botinfo',
        aliases: ['config' , 'settings'],
    category: 'Administration',
    description: "Avoir quelque info sur le bot",
}