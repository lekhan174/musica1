module.exports = {
    name: 'clearchannel',
    aliases: ["cc"],
    category: 'Owner-Only',
    utilisation: '{prefix}clearchannel',

    async execute(client, message) {
        if(message.author.id != "686607245747945495") {
            return message.channel.send("Only Bot Owner Can Use This Command")
        }

        message.channel.messages.fetch().then((results) => {
            message.channel.bulkDelete(results)
        })

        message.channel.send(`This Channel Was Nuked By ${message.author.tag}`)
    },
};
