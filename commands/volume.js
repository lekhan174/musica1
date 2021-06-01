const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'volume',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}volume [1-100]',

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

        const invalid = new MessageEmbed()
        .setColor(`${client.config.embedcolor}`)
        .setDescription(`${client.config.incorrect} **Please Enter A Valid Number (Between 1 And 100)**`)

        if (!args[0] || isNaN(args[0]) || args[0] === 'Infinity') {
            message.lineReply(invalid)
            return
        }

// -----------------------------------------------------------------------------------------------

        const morethan100 = new MessageEmbed()
        .setColor(`${client.config.embedcolor}`)
        .setDescription(`${client.config.incorrect} **Please Enter A Valid Number (Between 1 And 100)**`)

        if (Math.round(parseInt(args[0])) < 1 || Math.round(parseInt(args[0])) > 100) {
            message.lineReply(morethan100)
            return
        }

// -----------------------------------------------------------------------------------------------

        const success = client.player.setVolume(message, parseInt(args[0]));

        const embed = new MessageEmbed()
        .setDescription(`${client.config.correct} **Volume Set To ${parseInt(args[0])}%**`)
        .setColor(`${client.config.embedcolor}`)

        if (success) message.lineReply(success);

// -----------------------------------------------------------------------------------------------

        const commandlog = client.channels.cache.get(client.config.commandlog)
        commandlog.send(`${message.author.tag} (${message.author.id}) ran the **volume** command`)
    },
};