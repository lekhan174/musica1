const { JsonDatabase, YamlDatabase } = require("wio.db");
const db = new JsonDatabase("myDatabase");
const yamldb = new YamlDatabase("myDatabase");

module.exports = {
    name: 'add-premium',
    aliases: ["ap"],
    category: 'Onwer-only',
    utilisation: '{prefix}add-premium',

    execute(client, message) {
        if(message.author.id != "686607245747945495") {
            return message.lineReply("Only Bot Owner Can Use This Command")
        }

        const user = message.mentions.users.first()

        db.set(`pre_${user.tag}`, {user: user.id})

        message.lineReply(`${user.tag} has been sucessfully added to premium users list`)
    },
};