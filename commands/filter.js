const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'filter',
    aliases: ["f"],
    category: 'Music',
    utilisation: '{prefix}filter [filter name]',

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

        const noargs0  = new MessageEmbed()
        .setColor(`${client.config.embedcolor}`)
        .setDescription(`${client.config.incorrect} **Please Specify A Valid Filter To Enable Or Disable**`)

        if (!args[0]) {
            message.lineReply(noargs0)
            return
        }

// -----------------------------------------------------------------------------------------------

        const filterToUpdate = client.filters.find((x) => x.toLowerCase() === args[0].toLowerCase());

        const nofilter = new MessageEmbed()
        .setColor(`${client.config.embedcolor}`)
        .setDescription(`${client.config.incorrect} **This Filter Doesn't Exist, Try For Example (8D, Vibrato, Pulsator...)**`)

        if (!filterToUpdate) {
            message.lineReply(nofilter)
            return
        }

// -----------------------------------------------------------------------------------------------

        const filtersUpdated = {};

        filtersUpdated[filterToUpdate] = client.player.getQueue(message).filters[filterToUpdate] ? false : true;

// -----------------------------------------------------------------------------------------------

        client.player.setFilters(message, filtersUpdated);

        const enable = new MessageEmbed()
        .setTitle(`${filterToUpdate} Filter Added`)
        .setDescription(`${client.config.correct} **I'm adding ${filterToUpdate} filter to the music, please wait...**\n\`\`\`fix\nNote - The Longer The Music, The More Time It Will Take.\`\`\`\n**Filter Enabled By -** <@${message.author.id}>\nYou can **Disable** The Filter By Using The Same Command Again!`)
        .setColor(`${client.config.embedcolor}`)
        .setFooter(`Thanks For Choosing Lyrical Music!`)
        .setTimestamp()
        
        const disable = new MessageEmbed()
        .setTitle(`${filterToUpdate} Filter Removed`)
        .setDescription(`${client.config.correct} **I'm removing ${filterToUpdate} filter to the music, please wait...**\n\`\`\`fix\nNote - The Longer The Music, The More Time It Will Take.\`\`\`\n**Filter Disabled By -** <@${message.author.id}>\nYou can **Enable** The Filter By Using The Same Command Again!`)
        .setColor(`${client.config.embedcolor}`)
        .setFooter(`Thanks For Choosing Lyrical Music!`)
        .setTimestamp()

        if (filtersUpdated[filterToUpdate]) message.lineReply(enable);
        else message.lineReply(disable);
    
// -----------------------------------------------------------------------------------------------

        const commandlog = client.channels.cache.get(client.config.commandlog)
        commandlog.send(`${message.author.tag} (${message.author.id}) ran the **filter** command`)
    },
};
