const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'stop',
    aliases: ['dc'],
    category: 'Music',
    utilisation: '{prefix}stop',

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

        client.player.setRepeatMode(message, false);
        const success = client.player.stop(message);

        const embed = new MessageEmbed()
        .setDescription(`${client.config.correct} **Stopped The Music**`)
        .setColor(`${client.config.embedcolor}`)

        if (success) message.lineReply(embed);

// -----------------------------------------------------------------------------------------------

        const commandlog = client.channels.cache.get(client.config.commandlog)
        commandlog.send(`${message.author.tag} (${message.author.id}) ran the **stop** command`)
    },
};