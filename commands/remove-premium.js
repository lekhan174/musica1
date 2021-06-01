const { JsonDatabase, YamlDatabase } = require("wio.db");
const db = new JsonDatabase("myDatabase");
const yamldb = new YamlDatabase("myDatabase");

module.exports = {
    name: 'remove-premium',
    aliases: ["rp"],
    category: 'Onwer-only',
    utilisation: '{prefix}remove-premium',

    execute(client, message) {
        if(message.author.id != "686607245747945495") {
            return message.lineReply("Only Bot Owner Can Use This Command")
        }

        const user = message.mentions.users.first()

        db.get(`pre_${user.tag}.user`)
        db.delete(`pre_${user.tag}.user`)

        message.lineReply(`${user.tag} has been sucessfully removed from the premium users list`)
    },
};