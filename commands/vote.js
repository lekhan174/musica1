const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'vote',
    aliases: ["v"],
    category: 'General',
    utilisation: '{prefix}vote',

    execute(client, message) {
        let vote = new MessageEmbed()
        .setTitle(`Voting Links of Vocal Bots`)
        .addField("<a:Arrow:825940032769884171> **__Vote Us On Top.gg__**", `<a:Links:823556331554078780> **[Vote Me](https://top.gg/bot/819523401207119872/vote)**`)
        .addField("<a:Arrow:825940032769884171> **__Vote Us On DBL__**", `<a:Links:823556331554078780> **Vocal 1 -** **[Vote Me](https://discord.ly/vocal-1)**\n<a:Links:823556331554078780> **Vocal 2 -** **[Vote Me](https://discord.ly/vocal-2)**\n<a:Links:823556331554078780> **Vocal 3 -** **[Vote Me](https://discord.ly/vocal-3)**\n<a:Links:823556331554078780> **Vocal 4 -** **[Vote Me](https://discord.ly/vocal-4)**\n<a:Links:823556331554078780> **Vocal 5 -** **[Vote Me](https://discord.ly/vocal-5)**`)
        .addField("<a:Arrow:825940032769884171> **__Support Server__**", `<a:Links:823556331554078780> **[Join Now](https://discord.gg/x5VGgNRbU8)**`)
        .setColor(`${client.config.embedcolor}`)

        const commandlog = client.channels.cache.get(client.config.commandlog)
        commandlog.send(`${message.author.tag} (${message.author.id}) ran the **vote** command`)

        return message.lineReply(vote);
    },
};