const { MessageEmbed } = require("discord.js")
const { JsonDatabase, YamlDatabase } = require("wio.db");
const db = new JsonDatabase("myDatabase");
const yamldb = new YamlDatabase("myDatabase");

module.exports = {
    name: 'filters',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}filters',

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

        const filtersStatuses = [[], []];

        let prefix = db.get(`prefix_${message.guild.id}`)
        if(prefix === null) prefix = client.config.default_prefix;

// -----------------------------------------------------------------------------------------------

        client.filters.forEach((filterName) => {
            const array = filtersStatuses[0].length > filtersStatuses[1].length ? filtersStatuses[1] : filtersStatuses[0];
            array.push(filterName.charAt(0).toUpperCase() + filterName.slice(1) + " : " + (client.player.getQueue(message).filters[filterName] ? `${client.config.correct}` : `${client.config.incorrect}`));
        });

        const embed = new MessageEmbed()
        .setColor(`${client.config.embedcolor}`)
        .setDescription(`List of all filters enabled or disabled.\nUse \`${prefix}filter\` to add a filter to a song.`)
        .addField(`Filters`, `${filtersStatuses[0].join('\n')}`, true)
        .addField(`** **`, `${filtersStatuses[1].join('\n')}`, true)
        .setFooter(`Thanks For Choosing Lyrical Music!`)
        .setTimestamp()

        message.lineReply(embed)

// -----------------------------------------------------------------------------------------------

        const commandlog = client.channels.cache.get(client.config.commandlog)
        commandlog.send(`${message.author.tag} (${message.author.id}) ran the **filters** command`)
    }
};