const { MessageEmbed } = require("discord.js")

module.exports = (client, guild) => {
    guild.members.fetch //guild.ownerID
  
    let embed = new MessageEmbed()
        .setTitle('**LEFT A SERVER**')
        .setColor(`${client.config.embedcolor}`)
        .setDescription("Hey, Developer look I've been kicked from a server!")
        .addField('**Server Name**', `${guild.name}`)
        .addField('**Server ID**', `${guild.id}`)
        .addField('**Member Count**', `${guild.memberCount}`)
        .addField('**Owner**', `<@${guild.ownerID}>`)
        .setThumbnail(guild.iconURL())
        .setFooter(`Thanks For Choosing Lyrical Music`, client.user.avatarURL())
        .setTimestamp();
    // const channel = client.channels.cache.get(`${client.config.leavechannel}`)
    // channel.send(embed)
}
