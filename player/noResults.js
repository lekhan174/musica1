const { MessageEmbed } = require("discord.js");

module.exports = (client, message, query) => {
    const embed  = new MessageEmbed()
    .setDescription(`${client.config.incorrect} **No Results Found On Youtube For \'${query}\'**`)
    .setColor(`${client.config.embedcolor}`)

    message.lineReply(embed);
}