const {
    ApplicationCommandOptionType,
    PermissionFlagsBits,
  } = require('discord.js');

module.exports = {
    deleted: true,
    name:'ban',
    description: 'Hands out the Ban Hammer. change',
    // devOnly: Boolean
    // testOnly: Boolean
    options: [
        {
            name: 'target-user',
            description: 'The user to ban',
            required: true,
            type: ApplicationCommandOptionType.Mentionable,
        },
        {
            name: 'reason',
            description: 'The user to ban',
            type: ApplicationCommandOptionType.String,
        }
    ],
    permissionsRequired: [PermissionFlagsBits.Administrator],
    botPermissions: [PermissionFlagsBits.Administrator],

    callback: (client, interaction) => {
        interaction.reply('ban...');
    },

};