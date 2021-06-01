const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'nowplaying',
    aliases: ['np'],
    category: 'Music',
    utilisation: '{prefix}nowplaying',

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

        const track = client.player.nowPlaying(message);
        const filters = [];

// -----------------------------------------------------------------------------------------------

        Object.keys(client.player.getQueue(message).filters).forEach((filterName) => client.player.getQueue(message).filters[filterName]) ? filters.push(filterName) : false;

        const embed = new MessageEmbed()

        .setTitle(`${track.title}`)
        .setColor(`${client.config.embedcolor}`)
        .setFooter(`Thanks For Choosing Lyrical Music!`, `${client.user.avatarURL()}`)
        .addField(`Channel`, `${track.author}`, true)
        .addField(`Requested By`, `<@${message.author.id}>`, true)
        .addField(`From Playlist`, `${track.fromPlaylist ? 'Yes' : 'No'}`, true)
        .addField(`Views`, `${track.views}`,true)
        .addField(`Duration`, `${track.duration}`,true)
        .addField(`Filters activated`, `${filters.length + '/' + client.filters.length}`, true)
        .addField(`Volume`, `${client.player.getQueue(message).volume}`, true)
        .addField(`Repeat Mode`,`${client.player.getQueue(message).repeatMode ? 'Yes' : 'No'}`, true)
        .addField(`Currently Paused`, `${client.player.getQueue(message).paused ? 'Yes' : 'No'}`, true)
        .addField(`Progress Bar`, `${client.player.createProgressBar(message, { timecodes: true })}`, true)
        .setTimestamp()

        message.lineReply(embed)

// -----------------------------------------------------------------------------------------------

        const commandlog = client.channels.cache.get(client.config.commandlog)
        commandlog.send(`${message.author.tag} (${message.author.id}) ran the **nowplaying** command`)
    }
};