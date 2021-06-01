const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'join',
    aliases: ["j"],
    category: 'Music',
    utilisation: '{prefix}join',

    async execute(client, message) {
        
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

        const samechannel = new MessageEmbed()
        .setColor(`${client.config.embedcolor}`)
        .setDescription(`${client.config.incorrect} **I Am Already In Your Voice Channel**`)

        if (message.guild.me.voice.channel && message.member.voice.channel.id == message.guild.me.voice.channel.id) {
            message.lineReply(samechannel)
            return
        }

// -----------------------------------------------------------------------------------------------

        await message.member.voice.channel.join()

        const joinembed = new MessageEmbed()
        .setDescription(`${client.config.correct} **Joined The Voice Channel**`)
        .setColor(`${client.config.embedcolor}`)
    
        message.lineReply(joinembed);

// -----------------------------------------------------------------------------------------------

        const commandlog = client.channels.cache.get(client.config.commandlog)
        commandlog.send(`${message.author.tag} (${message.author.id}) ran the **join** command`)
    }
};