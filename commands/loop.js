const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'loop',
    aliases: ['lp', 'repeat'],
    category: 'Music',
    utilisation: '{prefix}loop',

    execute(client, message, args) {

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

        if (client.player.getQueue(message).repeatMode) {
            client.player.setRepeatMode(message, false);

            const embed = new MessageEmbed()
            .setColor(`${client.config.embedcolor}`)
            .setDescription(`${client.config.correct} Loop Is Now **Disabled**`)

            message.lineReply(embed);

// -----------------------------------------------------------------------------------------------
        } else {

            client.player.setRepeatMode(message, true);

            const embed = new MessageEmbed()
            .setColor(`${client.config.embedcolor}`)
            .setDescription(`${client.config.correct} Loop Is Now **Enabled**`)

            message.lineReply(embed);
        };

// -----------------------------------------------------------------------------------------------

        const commandlog = client.channels.cache.get(client.config.commandlog)
        commandlog.send(`${message.author.tag} (${message.author.id}) ran the **loop** command`)
    },
};

// if (args.join(" ").toLowerCase() === 'queue') {
//             if (client.player.getQueue(message).loopMode) {
//                 client.player.setLoopMode(message, false);
//                 return message.lineReply(`Repeat mode **disabled** !`);
//             } else {
//                 client.player.setLoopMode(message, true);
//                 return message.lineReply(`Repeat mode **enabled** the whole queue will be repeated endlessly !`);
//             };
//         }