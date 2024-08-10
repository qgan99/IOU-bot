const {
    ApplicationCommandOptionType,
    PermissionFlagsBits,
  } = require('discord.js');

module.exports = {
    name: 'returns',
    description: 'one user returning items to another',
    options: [
        {
            name: 'user',
            description: 'person returning to',
            type: ApplicationCommandOptionType.User,
            required: true
        },
        {
            name: 'amount',
            description: 'amount of card returned',
            type: ApplicationCommandOptionType.Integer,
            required: true
        },
        {
            name: 'card',
            description:  'name of card returned',
            type: ApplicationCommandOptionType.String,
            required: true
        }
    ],
    callback: (client, interaction) => {
        let username = interaction.options.get('user').user.globalName;
        let num = interaction.options.get('amount').value;
        let card = interaction.options.get('card').value;
        interaction.reply(interaction.user.globalName + ' returned ' + num + ' ' + card + ' to ' + username);
    },
};