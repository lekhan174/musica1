const { MessageEmbed } = require("discord.js")

module.exports = (client, guild) => {
    guild.members.fetch //guild.ownerID
  
  let embed = new MessageEmbed()
    .setTitle('**JOINED NEW SERVER**')
    .setColor(`${client.config.embedcolor}`)
    .setDescription("Hey, Developer look I've joined a new server!")
    .addField('**Server Name**', `${guild.name}`)
    .addField('**Server ID**', `${guild.id}`)
    .addField('**Member Count**', `${guild.memberCount}`)
    .addField('**Owner**', `<@${guild.ownerID}>`)
    .setThumbnail(guild.iconURL())
    .setFooter(`Thanks For Choosing Lyrical Music`, client.user.avatarURL())
    .setTimestamp();
  client.channels.cache.get(`${client.config.joinchannel}`).send(embed)
}