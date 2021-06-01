const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'invite',
    aliases: ["inv"],
    category: 'General',
    utilisation: '{prefix}invite',

    execute(client, message) {
        const av1 = "**__[Invite Me](https://discord.com/api/oauth2/authorize?client_id=845932774808223784&permissions=8&scope=bot)__**"
        const av2 = "**__[Invite Me](https://discord.com/api/oauth2/authorize?client_id=845934877026156565&permissions=8&scope=bot)__**"
        const av3 = "**__[Invite Me](https://discord.com/api/oauth2/authorize?client_id=845936163994337290&permissions=8&scope=bot)__**"
        const av4 = "**__[Invite Me](https://discord.com/api/oauth2/authorize?client_id=848953787518812180&permissions=8&scope=8)__**"
        const av5 = "**__[Invite Me](https://discord.com/api/oauth2/authorize?client_id=849061866008870922&permissions=8&scope=bot)__**"
        const nav1 = "**__[Invite Me](https://discord.com/api/oauth2/authorize?client_id=845932774808223784&permissions=3426880&scope=bot)__**"
        const nav2 = "**__[Invite Me](https://discord.com/api/oauth2/authorize?client_id=845934877026156565&permissions=3426880&scope=bot)__**"
        const nav3 = "**__[Invite Me](https://discord.com/api/oauth2/authorize?client_id=845936163994337290&permissions=3426880&scope=bot)__**"
        const nav4 = "**__[Invite Me](https://discord.com/api/oauth2/authorize?client_id=848953787518812180&permissions=3426880&scope=bot)__**"
        const nav5 = "**__[Invite Me](https://discord.com/api/oauth2/authorize?client_id=849061866008870922&permissions=3426880&scope=bot)__**"
    
        let invite = new MessageEmbed()
        .setTitle(`Invite Links of Lyricall Bots`)
        .addField("<a:785046224171827251:849031302274351105>   **__Invite Me With Admin Perms__**", `<a:837362535228375080:849031304771010560>   **Lyrical 1 -** ${av1}\n<a:837362535228375080:849031304771010560>   **Lyrical 2 -** ${av2}\n<a:837362535228375080:849031304771010560>   **Lyrical 3 -** ${av3}\n<a:837362535228375080:849031304771010560>   **Lyrical 4 -** ${av4}\n<a:837362535228375080:849031304771010560>   **Lyrical 5 -** ${av5}`)
        .addField("<a:785046224171827251:849031302274351105>   **__Invite Me Without Admin Perms__**", `<a:842444222049157171:849031301603524648>   **Lyrical 1 -** ${nav1}\n<a:842444222049157171:849031301603524648>   **Lyrical 2 -** ${nav2}\n<a:842444222049157171:849031301603524648>   **Lyrical 3 -** ${nav3}\n<a:842444222049157171:849031301603524648>   **Lyrical 4 -** ${nav4}\n<a:842444222049157171:849031301603524648>   **Lyrical 5 -** ${nav5}`)
        .addField("<a:785046224171827251:849031302274351105>   **__Support Server__**", `<a:785046224171827251:849031302274351105>   **[Join Now](https://discord.gg/x5VGgNRbU8)**`)
        .setColor("#8d2aff")

        message.lineReply(invite);

// -----------------------------------------------------------------------------------------------

        const commandlog = client.channels.cache.get(client.config.commandlog)
        commandlog.send(`${message.author.tag} (${message.author.id}) ran the **invite** command`)
    }
};