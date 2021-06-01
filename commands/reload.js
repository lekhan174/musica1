const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'reload',
    aliases: ['r'],
    category: ['Owner-Only'],
    utilisation: '{prefix}reload',

    execute(client, message, args) {
        if(message.author.id != "686607245747945495") {
            return message.lineReply("Only Bot Owner Can Use This Command")
        }
        
        let command = args[0].toLowerCase();

        try{
            delete require.cache[require.resolve(`./${command}.js`)];
            client.commands.delete(command);

            const pull = require(`./${command}.js`);
            client.commands.set(command, pull);

            const embed = new MessageEmbed()
            .setDescription(`${client.config.correct} **Done Reloading ${command}**`)
            .setColor(`${client.config.embedcolor}`)

            return message.lineReply(embed);
        } catch (error) {
            return message.lineReply(`Error Reloading **${command}**: \`\`\`${error.message}\`\`\``);
        }
    }
}