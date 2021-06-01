module.exports = {
    name: 'guild-leave',
    aliases: ["gl"],
    category: 'Owner-Only',
    utilisation: '{prefix}guild-leave',

    async execute(client, message, args) {

        if(message.author.id != "686607245747945495") {
            return message.lineReply("Only Bot Owner Can Use This Command")
        }

        const gleave = args[0];

        if(!gleave) {
            return message.lineReply("Please provide an Id")
        }

        const guild = client.guilds.cache.find((g) => g.id === gleave);

        if(!guild) {
            return message.lineReply("That Guild wasn't found")
        }

        try {
            await guild.leave();
            message.lineReply(`I have left the Guild: **${guild.name}**`)
        } catch (error) {
            console.error(error)
            return message.lineReply("I Couldn't leave the Guild!");
        }
    }
};