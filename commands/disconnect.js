const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'disconnect',
    aliases: ["leave", "dc"],
    category: 'Music',
    utilisation: '{prefix}leave',

    async execute(client, message) {
        let channel = message.member.voice.channel;

        const notinvc = new MessageEmbed()

        .setColor(`${client.config.embedcolor}`)
        .setDescription(`${client.config.incorrect} **You Are Not In A Voice Channel**`)
    
        if(!message.member.voice.channel) {
            message.lineReply(notinvc)
            return
        }; 

// -----------------------------------------------------------------------------------------------

        const iamnotinvc = new MessageEmbed()
        .setColor(`${client.config.embedcolor}`)
        .setDescription(`${client.config.incorrect} **I Am Not In Any Voice Channel**`)

        if (!message.guild.me.voice.channel) {
            message.lineReply(iamnotinvc)
            return
        }

// -----------------------------------------------------------------------------------------------

        await message.guild.me.voice.channel.leave();

        const Embed = new MessageEmbed()
        .setDescription(`${client.config.correct} **Left The Voice Channel**`)
        .setColor(`${client.config.embedcolor}`)

        message.lineReply(Embed)

// -----------------------------------------------------------------------------------------------

        const commandlog = client.channels.cache.get(client.config.commandlog)
        commandlog.send(`${message.author.tag} (${message.author.id}) ran the **disconnect** command`)
    }
};