const { MessageEmbed } = require("discord.js");

module.exports = (client, message, query, tracks) => {
    const embed = new MessageEmbed()
    .setDescription('You Didn\'t Provide A Valid Response\nPlease Send The Ccommand Again')
    .setColor(`${client.config.embedcolor}`)

    message.lineReply(embed);
};