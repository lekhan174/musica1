const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'resume',
    aliases: ["r"],
    category: 'Music',
    utilisation: '{prefix}resume',

    execute(client, message) {
        
        const notinvc = new MessageEmbed()

        .setColor(`${client.config.embedcolor}`)
        .setDescription(`${client.config.incorrect} **You Are Not In A Voice Channel**`)
    
        if(!message.member.voice.channel) {
            message.lineReply(notinvc)
            return
        };

// -----------------------------------------------------------------------------------------------
        
        const notsamechannel = new MessageEmbed()
        .setColor(`${client.config.embedcolor}`)
        .setDescription(`${client.config.incorrect} **You Are Not In The Same Voice Channel**`)

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) {
            message.lineReply(notsamechannel)
            return
        };

// -----------------------------------------------------------------------------------------------

        const nomusic = new MessageEmbed()
        .setColor(`${client.config.embedcolor}`)
        .setDescription(`${client.config.incorrect} **No Music Curently Playing**`)

        if (!client.player.getQueue(message)) {
            message.lineReply(nomusic)
            return
        };

// -----------------------------------------------------------------------------------------------

        const notpaused = new MessageEmbed()
        .setColor(`${client.config.embedcolor}`)
        .setDescription(`${client.config.incorrect} **The Music Is Not Paused**`)

        if (!client.player.getQueue(message).paused) {
            message.lineReply(notpaused)
            return
        }

// -----------------------------------------------------------------------------------------------

        const success = client.player.resume(message);

        const embed = new MessageEmbed()
        .setDescription(`${client.config.correct} **Song ${client.player.getQueue(message).playing.title} Resumed**`)
        .setColor(`${client.config.embedcolor}`)

        if (success) message.lineReply(embed);

// -----------------------------------------------------------------------------------------------

        const commandlog = client.channels.cache.get(client.config.commandlog)
        commandlog.send(`${message.author.tag} (${message.author.id}) ran the **resume** command`)
    },
};