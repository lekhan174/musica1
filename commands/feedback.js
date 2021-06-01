const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'feedback',
    aliases: ["fb"],
    category: 'General',
    utilisation: '{prefix}feedback [feedback]',

    execute(client, message, args) {
        const fbChannel = "849025101894254643";

        const fb = args.join(" ");
        if(!fb) {
            const nofeedback = new MessageEmbed()
            .setColor(`${client.config.embedcolor}`)
            .setDescription(`${client.config.incorrect} **Please Enter A FeedBack**`)

            return message.lineReply(nofeedback)
        }

// -----------------------------------------------------------------------------------------------

        const embed = new MessageEmbed()
        .setAuthor("Lyrical Music Feedback", `${client.user.avatarURL()}`)
        .setColor(`${client.config.embedcolor}`)
        .setThumbnail(`${message.author.avatarURL()}`)
        .addField("Author", `\`${message.author.tag}\``)
        .addField("Feedback", `\`${fb}\``)
        .addField("On The Server", `\`${message.guild.name}\``)
        .setFooter("Thanks For Choosing Lyrical Music", `${client.user.avatarURL()}`)
        .setTimestamp()

        message.client.channels.cache.get(fbChannel).send(embed);
        message.lineReply(`${client.config.correct} **Your Feedback Has Been Submitted Successfully**`)

// -----------------------------------------------------------------------------------------------

        const successembed = new MessageEmbed()
        .setAuthor(`Lyrical Music Feedback`, `${client.user.avatarURL()}`)
        .setTitle("Success!")
        .setColor(`${client.config.embedcolor}`)
        .setDescription(` Your **Feedback** is submitted successfully!`)
        .addField("Join Our Support Server", `Click Here To Join Our **[Support Server](https://discord.gg/EzDnZSPRxf)**`)

        message.author.send(successembed)

// -----------------------------------------------------------------------------------------------

        const commandlog = client.channels.cache.get(client.config.commandlog)
        commandlog.send(`${message.author.tag} (${message.author.id}) ran the **feedback** command`)
    }
};