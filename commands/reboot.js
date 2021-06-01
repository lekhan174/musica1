const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'reboot',
    aliases: ['rb'],
    category: ['Owner-Only'],
    utilisation: '{prefix}reboot',

    async execute (client, message, args) {
        if(message.author.id != "686607245747945495") {
            return message.lineReply("Only Bot Owner Can Use This Command")
        }

        const embed  = new MessageEmbed()
        .setDescription(`${client.config.correct} Restarting Bot!`)
        .setColor(`${client.config.embedcolor}`)
        
        await message.lineReply(embed)
        process.exit();
    } 
}