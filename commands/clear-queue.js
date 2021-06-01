const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'clear-queue',
    aliases: ['cq'],
    category: 'Music',
    utilisation: '{prefix}clear-queue',

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

        const onesong = new MessageEmbed()
        .setColor("#8d2aff")
        .setDescription(`${client.config.incorrect} There Is Only One Song In The Queue`)

        if (client.player.getQueue(message).tracks.length <= 1) {
            message.lineReply(onesong)
            return
        };

// -----------------------------------------------------------------------------------------------

        client.player.clearQueue(message);

        const embed = new MessageEmbed()
        .setDescription(`${client.config.correct} **The Queue Has Been Successfully Cleared**`)
        .setColor(`${client.config.embedcolor}`)

        message.lineReply(embed);

// -----------------------------------------------------------------------------------------------

        const commandlog = client.channels.cache.get(client.config.commandlog)
        commandlog.send(`${message.author.tag} (${message.author.id}) ran the **clear-queue** command`)
    },
};