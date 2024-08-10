module.exports = {
    name:'ping',
    deleted: true,
    description: 'Pong!',
    // devOnly: Boolean
    // testOnly: Boolean
    //options: Object[],

    callback: (client, interaction) => {
        interaction.reply(`Pong! ${client.ws.ping}ms`)
    },

};