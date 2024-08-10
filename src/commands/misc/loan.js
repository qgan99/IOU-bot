const {
    ApplicationCommandOptionType,
    PermissionFlagsBits,
  } = require('discord.js');

module.exports = {
    name: 'loan',
    description: 'one user loaning to another',
    options: [
        {
            name: 'user',
            description: 'person loaning to',
            type: ApplicationCommandOptionType.User,
            required: true
        },
        {
            name: 'amount',
            description: 'amount of card loaned',
            type: ApplicationCommandOptionType.Integer,
            required: true
        },
        {
            name: 'card',
            description:  'name of card loaned',
            type: ApplicationCommandOptionType.String,
            required: true
        }
    ],
    callback: (client, interaction) => {
        let username = interaction.options.get('user').user.globalName;
        let num = interaction.options.get('amount').value;
        let card = interaction.options.get('card').value;
        interaction.reply(interaction.user.globalName + ' is loaning ' + num + ' ' + card + ' to ' + username);
    },
};